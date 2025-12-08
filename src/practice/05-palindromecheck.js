function reverseStr(str) {
    return str.split('').reverse().join('');
}

function checkedPalindrom(str) {
    let lower = str.toLowerCase();
    let reversed = reverseStr(lower);

    if (lower === reversed) {
        console.log(str + " is a palindrome");
    } else {
        console.log(str + " is NOT a palindrome");
    }
}

const stre = "madam";
checkedPalindrom(stre);
