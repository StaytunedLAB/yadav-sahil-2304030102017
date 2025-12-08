function calculateGrade(marks) {
    let grade;

    switch (true) {
        case (marks >= 90 && marks <= 100):
            grade = "A";
            break;

        case (marks >= 80 && marks < 90):
            grade = "B";
            break;

        case (marks >= 70 && marks < 80):
            grade = "C";
            break;

        case (marks >= 60 && marks < 70):
            grade = "D";
            break;

        case (marks >= 0 && marks < 60):
            grade = "F";
            break;

        default:
            grade = "Invalid Marks";
    }

    return grade;
}


let marks = 85;
console.log("Your Grade is:", calculateGrade(marks));
