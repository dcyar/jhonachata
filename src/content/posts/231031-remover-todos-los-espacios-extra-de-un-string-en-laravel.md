---
type: original
title: 'Remover todos los espacios extra de un string en Laravel'
slug: 'remover-todos-los-espacios-extra-de-un-string-en-laravel'
publishedAt: 2023-10-31
excerpt: 'Laravel es un popular framework de PHP, conocido por su amplio conjunto de características útiles que hacen que la programación sea mucho más fácil y eficiente'
tags: ['laravel', 'helpers', 'strings']
---
<div class="indice">
Indice del contenido:

- [Introducción](#introducción "Introducción")
- [Helper Squish](#helper-squish "Helper Squish")
- [Cómo usar el helper squish](#cómo-usar-el-helper-squish "Cómo usar el helper squish")
- [Conclusión](#conclusión "Conclusión")
</div>

## Introducción

Laravel es un popular framework de PHP, conocido por su amplio conjunto de características útiles que hacen que la programación sea mucho más fácil y eficiente.

Una de esas características son los llamados **helpers**, pequeñas funciones que realizan tareas específicas y que se pueden utilizar en cualquier proyecto de Laravel. En este post hablaremos acerca del helper **squish** y cómo puede facilitar la gestión de cadenas de texto.

## Helper Squish

El helper **squish** es una función de Laravel que permite eliminar los espacios en blanco adicionales de una cadena de texto. Esto es especialmente útil cuando se trabaja con formularios y se quiere asegurarse que los datos introducidos por el usuario no contienen espacios adicionales al principio, final o entre las palabras.

## Cómo usar el helper Squish

El uso de helper **squish** es muy sencillo. Simplemente debemos llamar a la función `Str::squish('texto')`, veamos un ejemplo:

```php
$texto = '  Esto es una  cadena de PHP   ';

$salida = Str::squish($texto);

var_dump($salida);
// output: 'Esto es una cadena de PHP'
```

A diferencia del helper **trim**, que quita los espacios al principio y al final de una cadena de texto, el helper **squish** también removerá los espacios adiciones entre palabras.

Otra forma de usar el helper **squish**, es usando la función global `str()`:

```php
$texto = '  Esto es una  cadena de PHP   ';

$salida = str($texto)->squish();

var_dump($salida);
// output: 'Esto es una cadena de PHP'
```

## Conclusión

El helper Squish de Laravel es una función simple pero útil que puede hacer que la gestión de cadenas de texto sea mucho más fácil. Con su ayuda, puedes reducir o normalizar los espacios en blanco de cualquier cadena de texto.