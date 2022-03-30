// Iteratively 
function countDown(num) {
    let total = 0;
    for (i = num; i > 0; i--) {
        total += i;
    }
    return total;
}

countDown(4) // displays 10


// Recursively
function countdown(num) {
    if (num == 1) return 1;
    return num + countdown(num - 1);
}


countdown(4); // displays 10