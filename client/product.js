const productOfDigits = (digits) => {
    let result = 1;
    for (let i = 0; i < digits.length; i++) {
        result = result * digits[i];
    }
    return result;
}

console.log(productOfDigits([1, 2, 4, 5]));