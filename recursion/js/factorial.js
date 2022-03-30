// Iteratively
function Factorial(num) {
    let product = 1;
    for (let i = num; i > 0; i--) {
        product *= i;
    }
    return product;
}
Factorial(5); // displays 120

// Recursively
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

factorial(5); // displays 120
