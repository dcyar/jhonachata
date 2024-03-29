---
type: original
title: Incrementar múltiples columnas a la vez en laravel
slug: incremenar-multiples-columnas-a-la-vez-en-laravel
publishedAt: 2023-02-25
excerpt: Laravel trae consigo múltiples utilidades para hacer operaciones de forma sencilla y una de ellas es el poder incrementar o decrementar los valores de las columnas de nuestra base de datos
tags: ['laravel', 'query-builder', 'orm']
---
<div class="indice">
Indice de contenido:

- [Incrementar o decrementar una columna](#incrementar-o-decrementar-una-columna "Incrementar o decrementar una columna")
- [Incrementar o decrementar múltiples columnas](#incrementar-o-decrementar-múltiples-columna "Incrementar o decrementar múltiples columnas")
</div>

Laravel trae consigo múltiples utilidades para hacer operaciones de forma sencilla y una de ellas es el poder incrementar o decrementar los valores de las columnas de nuestra base de datos.

## Incrementar o decrementar una columna

Para usar dichas utilidades, en el caso del incremento o decremento de una columna, sería escribir lo siguiente:

```php
$user = User::find(1);

// Esto incrementará en uno el valor de la columna points
$user->increment('points');

// Restar en una unidad el valor de la columna points
$user->decrement('points');

// Si queremos incrementar o decrementar en mas de una unidad el valor de la columna
$user->increment('points', 5);


$user->decrement('points', 5);
```

## Incrementar o decrementar múltiples columna

También podemos actualizar otras columnas a la vez que se hace el incremento o decremento

```php
$user->increment('points', 1, [
    'name' => 'Jhon',
]);
```

Por último, también es posible hacer el incremento o decremento de multiples columnas con `incrementEach` o `decrementEach`

Esto es posible desde la versión 9.x en adelante

```php
$user->incrementEach([
    'points' => 5,
    'votes' => 2,
]);

$user->decrementEach([
    'points' => 5,
    'votes' => 2,
]);
```

Ver más detalles en la <a href="https://laravel.com/docs/10.x/queries#increment-and-decrement" target="_blank" title="Documentación de laravel" rel="nofollow">documentación de laravel</a>.