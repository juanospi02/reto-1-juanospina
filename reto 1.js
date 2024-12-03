function findPrimes(n) {
    if (n <= 2) {
        return []; // No hay números primos menores que 2.
    }

    const primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Ejemplo de uso
console.log(findPrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
