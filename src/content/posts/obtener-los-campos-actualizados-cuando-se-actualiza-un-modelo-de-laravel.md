---
type: original
title: Cómo detectar cambios en modelos Eloquent de Laravel
slug: como-detectar-cambios-en-modelos-eloquent-de-laravel
publishedAt: 2023-09-03
excerpt: En este artículo, te presentaremos una valiosa funcionalidad de los modelos Eloquent en Laravel que te permite identificar qué campos se han actualizado al ejecutar una operación de actualización en un modelo.
tags: ['laravel', 'eloquent', 'tip']
---
Indice de contenido:
- [Entendiendo la funcionalidad](#entendiendo-la-funcionalidad "Entendiendo la funcionalidad")
- [Identificando cambios](#identificando-cambios "Identificando cambios")
- [Consideraciones importantes](#consideraciones-importantes "Consideraciones importantes")
- [Conclusión](#conclusión "Conclusión")

---

En este artículo, te presentaremos una valiosa funcionalidad de los modelos Eloquent en Laravel que te permite identificar qué campos se han actualizado al ejecutar una operación de actualización en un modelo. Aprenderemos cómo funciona este proceso y cómo puedes aprovecharlo en tus proyectos.

## Entendiendo la funcionalidad
Primero, echemos un vistazo a cómo funciona esta característica. Supongamos que tenemos el siguiente modelo llamado `Product`:

```php title="Product.php"
class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'cover',
        'content',
        'published_at',
    ];

    protected $dates = [
        'published_at',
    ];
}
```

Ahora, realizamos una actualización en un registro de este modelo utilizando el método `update`:

```php
$product->update([
    'title' => 'New Title',
    'excerpt' => 'New Excerpt',
]);
```

## Identificando cambios
Una vez que hemos realizado la actualización, podemos utilizar el método `getChanges()` en el modelo para obtener una lista de los campos que se han modificado, junto con la fecha de actualización en el campo `updated_at`:

```php
$product->getChanges();

// Resultado
{
  "title": "New Title",
  "excerpt": "New Excerpt",
  "updated_at": "2023-09-03 15:28:07"
}
```

## Consideraciones importantes
Es importante tener en cuenta que si en el array pasado al método `update` incluimos un campo con el mismo contenido que el valor original, este no se incluirá en la lista de cambios devuelta por `getChanges()`. Por ejemplo:

```php
$product->update([
    'title' => 'New product Title', // Solo cambiamos este valor
    'excerpt' => 'New Excerpt',
]);
```

En este caso, al utilizar el método `getChanges()`, solo obtendremos el campo `title` en la lista de cambios:

```php
$product->getChanges();

// Resultado
{
  "title": "New product Title",
  "updated_at": "2023-09-03 15:28:07"
}
```

## Conclusión

Esta funcionalidad es especialmente útil para llevar un registro de las modificaciones en tus modelos Eloquent y realizar acciones específicas en función de los cambios detectados. ¡Espero que esta información te sea útil en tus proyectos Laravel!