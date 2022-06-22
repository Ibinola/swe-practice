// Prime Factorization is the process of determining which prime numbers multiply to a given number i.e Given 10, it would print 5 and 2

function prime(n) {
    while (n % 2 == 0) {
        console.log(2);
        n = n / 2;
    }

    // when n is an odd number, add 1 to it
    for (var i = 3; i * i <= n; i = i + 2) {
        while (n % i == 0) {
            console.log(i);
            n = n / i;
        }
    }

    if (n > 2) {
        console.log(n);
    }

}

prime(10);

