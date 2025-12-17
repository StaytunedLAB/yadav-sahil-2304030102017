function timeToMinutes(t) {
    if (!t) throw new Error("Invalid time");
    const [h, m] = t.split(":").map(Number);
    if (isNaN(h) || isNaN(m)) throw new Error("Invalid time");
    return h * 60 + m;
}

function processAttendance(att) {
    const summary = {
        employeeId: att.employeeId || null,
        date: att.date || null,
        status: "complete",
        totalWorkingMinutes: 0,
        overtimeMinutes: 0,
        note: "",
        error: null
    };

    try {
        if (!att.checkIn || !att.checkOut) {
            summary.status = "incomplete";
            summary.note = "Missing check-in or check-out";
            return summary;
        }

        const inMin = timeToMinutes(att.checkIn);
        const outMin = timeToMinutes(att.checkOut);

        let total = outMin - inMin;
        let breakMin = 0;

        if (att.breakStart && att.breakEnd) {
            breakMin = timeToMinutes(att.breakEnd) - timeToMinutes(att.breakStart);
        } else if (att.breakStart && !att.breakEnd) {
            breakMin = 30;
            summary.note = "Default 30 min break used";
        }

        total -= breakMin;

        if (total < 0) {
            summary.status = "invalid";
            summary.note = "Invalid time calculation";
            return summary;
        }

        summary.totalWorkingMinutes = total;

        if (att.overtimeApproved && total > 480) {
            summary.overtimeMinutes = total - 480;
        }

    } catch (err) {
        summary.status = "error";
        summary.error = err.message;
        summary.note = "Error during processing";
    } finally {
        console.log("Attendance processed successfully");
    }

    return summary;
}

// Example
console.log(processAttendance({
    employeeId: "E101",
    date: "2025-01-01",
    checkIn: "09:00",
    checkOut: "18:30",
    breakStart: "13:00",
    breakEnd: "13:30",
    overtimeApproved: true
}));
