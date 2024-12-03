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

## Instalación

No requiere dependencias externas ni instalación.

1. Copia el código del archivo `findPrimes.js`.
2. Usa las funciones en tu proyecto o prueba en un entorno como Node.js o el navegador.

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

## Optimización

La función **`isPrime`** usa la raíz cuadrada de `num` para optimizar la cantidad de divisiones necesarias, haciendo que sea más eficiente en comparación con iterar hasta `num-1`.

## Estructura del repositorio

```
find-primes/
├── README.md
├── findPrimes.js
```

## Contribuciones

Si encuentras algún error o tienes sugerencias para mejorar, ¡no dudes en crear un issue o un pull request!

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para fines educativos y comerciales.

---

¡Gracias por revisar este proyecto! Espero que te sea útil. 😄