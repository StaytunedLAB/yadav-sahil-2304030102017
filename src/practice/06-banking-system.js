
function safeToNumber(value) {
    const num = Number(value);
    return isNaN(num) ? null : num;
}


function isValidTransactionType(type) {
    return type === "deposit" || type === "withdraw";
}

// MAIN PROCESSING FUNCTION
function processBankAccount(account) {
    let logMessage = "";
    let applied = [];
    let rejected = [];

    const {
        accountNumber,
        accountHolder,
        initialBalance,
        currency,
        transactions = []
    } = account || {};

    // --- Convert opening balance 
    let balance = safeToNumber(initialBalance);
    if (balance === null || balance < 0) {
        balance = 0; // fallback for corrupted initial data
    }

    try {
       
        for (let t of transactions) {
            try {
               
                if (!t || !t.type) {
                    rejected.push({
                        transaction: t,
                        reason: "Missing transaction type"
                    });
                    continue;
                }

                if (!isValidTransactionType(t.type)) {
                    rejected.push({
                        transaction: t,
                        reason: "Unknown transaction type"
                    });
                    continue;
                }

                // Validate amount
                const amount = safeToNumber(t.amount);
                if (amount === null || amount <= 0) {
                    rejected.push({
                        transaction: t,
                        reason: "Invalid amount"
                    });
                    continue;
                }

                // Process Deposit
                if (t.type === "deposit") {
                    balance += amount;
                    applied.push({
                        type: t.type,
                        amount
                    });
                }

                // Process Withdraw
                else if (t.type === "withdraw") {
                    if (amount > balance) {
                        rejected.push({
                            transaction: t,
                            reason: "Insufficient balance"
                        });
                        continue;
                    }

                    balance -= amount;
                    applied.push({
                        type: t.type,
                        amount
                    });
                }

            } catch (err) {
                // If something unexpected fails 
                rejected.push({
                    transaction: t,
                    reason: "System Error: " + err.message
                });
            }
        }

    } catch (err) {
        console.error("SYSTEM FAILURE (caught safely):", err.message);
    } finally {
        
        //  FINALLY ALWAYS RUNS
       
        logMessage = "Processing complete. Audit log generated at: " + new Date().toISOString();
    }

    // FINAL OUTPUT
  
    return {
        accountNumber,
        accountHolder,
        currency,
        initialBalance,
        finalBalance: balance,
        appliedTransactions: applied,
        rejectedTransactions: rejected,
        auditLog: logMessage
    };
}

// ======================================================
// EXAMPLE TEST INPUT (You can modify for testing)
// ======================================================

const inputData = {
    accountNumber: "AC9981",
    accountHolder: "Rahul Verma",
    initialBalance: "1500.50",
    currency: "INR",
    transactions: [
        { type: "deposit", amount: "500" },
        { type: "withdraw", amount: 200 },
        { type: "withdraw", amount: 9000 },   
        { type: "abc", amount: 100 },        
        { type: "deposit", amount: "-100" },  
        { amount: 200 },                      
        null                                   
    ]
};

const result = processBankAccount(inputData);

console.log("\n===== FINAL ACCOUNT SUMMARY =====");
console.log(JSON.stringify(result, null, 2));
