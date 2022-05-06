//prime num = a number that can only be divided by itself and 1
// prime numbers begin from 2
// 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5)) // true 
// Time Complexity: O(n) because this algorithm checks all numbers from 0 to n.

// A better solution

function is_prime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    // this is checked so that we skip
    // the middle five numbers in the below loop
    if (n % 2 == 0 || n % 3 == 0) return false;


    for (let i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }

    return true;
}

is_prime(17) // true
//Time Complexity O(sqrt(n)) : cuts the time complexity down significantly

