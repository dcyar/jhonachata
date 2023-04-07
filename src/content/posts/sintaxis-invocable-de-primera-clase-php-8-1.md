---
type: artículo
title: Sintaxis invocable de primera clase PHP 8.1
slug: sintaxis-invocable-de-primera-clases-php-8-1
publishedAt: 2023-04-07
excerpt: La sintaxis invocable de primera clase (First class callable syntax), es una forma de escribir el encadenamiento de funciones mucho mas limpio y elegante...
tags: ['php']
---

La <a href="https://www.php.net/manual/en/functions.first_class_callable_syntax.php" target="_blank">sintaxis invocable de primera clase (First class callable syntax)</a>, es una forma de escribir el encadenamiento de funciones mucho mas limpio y elegante, esta opción esta disponible desde `PHP 8.1`.

### Ejemplo de como utilizarlo

Veamos el siguiente caso:

```php
array_map(function($letter) {
    return strtoupper($letter);
}, ['a', 'b', 'c'])

// resultado: ['A', 'B', 'C']
```

Podemos simplificar el código anterior usando las <a href="https://www.php.net/manual/es/functions.arrow.php" target="_blank">funciones de flecha</a>, disponibles desde `PHP 7.4`.

```php
array_map(
    fn ($letter) => strtoupper($letter),
    ['a', 'b', 'c']
)

// resultado: ['A', 'B', 'C']
```

Ya se ve un poco mejor, cierto?, pero vayamos más allá.

## Sintaxis invocable de primera clase (First class callable syntax)

<a href="https://www.php.net/manual/en/functions.first_class_callable_syntax.php" target="_blank">Sintaxis invocable de primera clase (First class callable syntax)</a>, es una forma escribir el código de tal manera que evitemos el código repetitivo.

Usemos esta opción en el ejemplo anterior:

```php
array_map(strtoupper(...), ['a', 'b', 'c'])

// resultado: ['A', 'B', 'C']
```

Ahora el código se ve super limpio y legible.