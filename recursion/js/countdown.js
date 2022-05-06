// Iteratively 
function countDown(num) {
    let total = 0;
    for (let i = num; i > 0; i--) {
        total += i;
    }
    return total;
}

countDown(4) // displays 10


// Recursively
function sumRange(num) {
    if (num == 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(4)); // displays 10

