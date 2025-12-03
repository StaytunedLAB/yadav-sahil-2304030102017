// 1. Basic Error Handling using try...catch

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (err) {
        console.log("Caught error:", err.message);
        return null; 
    }
}


// 2. try...catch...finally


function readData(data) {
    try {
        console.log("Reading data...");
        if (!data) throw new Error("No data provided");
        console.log("Data:", data);
    } catch (err) {
        console.log("Error while reading data:", err.message);
    } finally {
        console.log("Finished operation (success or fail)");
    }
}



// 3. Custom Error Class (Extending Error)


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class PermissionError extends Error {
    constructor(message) {
        super(message);
        this.name = "PermissionError";
    }
}



// 4. Using Custom Errors


function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("User must have a name");
    }
    if (!user.role) {
        throw new ValidationError("User must have a role");
    }
}

function checkPermission(user, requiredRole) {
    if (user.role !== requiredRole) {
        throw new PermissionError(`User lacks required role: ${requiredRole}`);
    }
}



// 5. Testing Error Handling


console.log("Divide test:", divide(10, 2));
console.log("Divide test (error):", divide(10, 0));

readData("Sample text");
readData(null);


const user1 = { name: "Alice", role: "admin" };
const user2 = { name: "", role: "guest" };

try {
    validateUser(user1);
    checkPermission(user1, "admin");
    console.log("User1 is valid and allowed");
} catch (err) {
    console.log(`${err.name}: ${err.message}`);
}

try {
    validateUser(user2);
    checkPermission(user2, "admin");
} catch (err) {
    console.log(`${err.name}: ${err.message}`);
}


// 6. Example: catching multiple custom error types


function processUser(user) {
    try {
        validateUser(user);
        checkPermission(user, "admin");
        console.log("User processed successfully");
    } catch (err) {
        if (err instanceof ValidationError) {
            console.log("Validation failed:", err.message);
        } else if (err instanceof PermissionError) {
            console.log("Permission denied:", err.message);
        } else {
            console.log("Unknown error:", err.message);
        }
    }
}

processUser({ name: "Bob", role: "editor" });  
processUser({ role: "admin" });                