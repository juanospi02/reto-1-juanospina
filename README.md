# Números Primos en JavaScript 🚀

Este proyecto contiene una función en JavaScript que identifica y devuelve todos los números primos menores que un número entero positivo dado `n`.

## Descripción

Un número primo es un número natural mayor que 1, que solo puede dividirse exactamente por 1 y por sí mismo. Por ejemplo, 2, 3, 5, 7, 11, etc.

### Funciones principales:

1. **`findPrimes(n)`**: Devuelve un array con todos los números primos menores que `n`.
2. **`isPrime(num)`**: Verifica si un número dado es primo.

## Ejemplo de uso

```javascript
// Importar o copiar las funciones en tu proyecto.
console.log(findPrimes(20)); // Salida: [2, 3, 5, 7, 11, 13, 17, 19]
```


## Código

```javascript
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
```



