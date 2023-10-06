---
type: original
title: Sintaxis invocable de primera clase PHP 8.1
slug: sintaxis-invocable-de-primera-clases-php-8-1
publishedAt: 2023-04-07
excerpt: La sintaxis invocable de primera clase (First class callable syntax), es una forma de escribir el encadenamiento de funciones mucho mas limpio y elegante
tags: ['php']
---
<div class="indice">
Indice de contenido:

- [Ejemplo de como utilizarlo](#ejemplo-de-como-utilizarlo "Ejemplo de como utilizarlo")
- [Usando la sintaxis invocable de primera clase](#usando-la-sintaxis-invocable-de-primera-clase "Usando la sintaxis invocable de primera clase")
</div>

La <a href="https://www.php.net/manual/en/functions.first_class_callable_syntax.php" target="_blank" title="Documentación de php" rel="nofollow noopener">sintaxis invocable de primera clase (First class callable syntax)</a>, es una forma de escribir el encadenamiento de funciones mucho mas limpio y elegante, esta opción esta disponible desde `PHP 8.1`.

## Ejemplo de como utilizarlo

Veamos el siguiente caso:

```php
array_map(function($letter) {
    return strtoupper($letter);
}, ['a', 'b', 'c'])

// resultado: ['A', 'B', 'C']
```

Podemos simplificar el código anterior usando las <a href="https://www.php.net/manual/es/functions.arrow.php" title="Documentación de php" target="_blank" rel="nofollow noopener">funciones de flecha</a>, disponibles desde `PHP 7.4`.

```php
array_map(
    fn ($letter) => strtoupper($letter),
    ['a', 'b', 'c']
)

// resultado: ['A', 'B', 'C']
```

Ya se ve un poco mejor, cierto?, pero vayamos más allá.

## Usando la sintaxis invocable de primera clase

<a href="https://www.php.net/manual/en/functions.first_class_callable_syntax.php" target="_blank" title="Documentación de php" rel="nofollow noopener">Sintaxis invocable de primera clase (First class callable syntax)</a>, es una forma escribir el código de tal manera que evitemos el código repetitivo.

Usemos esta opción en el ejemplo anterior:

```php
array_map(strtoupper(...), ['a', 'b', 'c'])

// resultado: ['A', 'B', 'C']
```

Ahora el código se ve super limpio y legible.