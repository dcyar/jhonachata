---
type: original
title: Pluralizar textos en Laravel
slug: pluralizar-textos-en-laravel
publishedAt: 2023-11-03
excerpt: Trabajar con strings en laravel no tiene por que ser complicado, en esta ocasión veremos como pluralizar textos a nuestra conveniencia
tags: ['laravel', 'tips', 'strings']
---
<div class="indice">
Indice del contenido:

- [Escenario](#escenario "Escenario")
- [Método plural de laravel](#método-plural-de-laravel "Método plural de laravel")
- [Pluralización en español](#pluralización-en-español "Pluralización en español")

</div>

Trabajar con strings en laravel no tiene por que ser complicado, en esta ocasión veremos como pluralizar textos a nuestra conveniencia.

## Escenario

Tomemos como ejemplo un carrito de compras, en este caso, necesitaremos mostrar un resumen de cuantos productos tenemos en el carrito, por ejemplo.

```
Tienes 1 producto
```

Y si tenemos más de un producto, debemos cambiar el texto por:

```
Tienes 3 productos
```

Una posible solución seria el siguiente:

```php
$carrito = Carrito::with('detalles')->find(3);

echo "Tienes $productos producto" . ($carrito->detalles->count() > 1 ? 's' : '');

// Output: Tienes 3 productos
```

En la solución anterior usamos un ternario pero la solución no se ve nada elegante.

## Método plural de laravel

Vamos una solución más elegante de como pluralizar textos, con el helper <a href="https://laravel.com/docs/9.x/helpers#method-fluent-str-plural" target="_blank">plural</a> de laravel.

```php
$carrito = Carrito::with('detalles')->find(3);

echo "Tienes $productos " . Str::of('producto')->plural($carrito->detalles->count());

// Output: Tienes 3 productos
```

## Pluralización en español

El helper **plural** por defecto soporta el idioma ingles, y en algunas palabras nos devolverá una pluralización incorrecta, por ejemplo:

```php
echo Str::of('árbol')->plural(2);

// Output: árbols
```

En el ejemplo anterior obtenemos como plural de la palabra __árbol__, __árbols__ lo cual es incorrecto, pues lo correcto seria __árboles__, para solucionar esto debemos realizar una <a href="https://laravel.com/docs/9.x/localization#pluralization-language" target="_blank" title="Configuración adicional del helper plural">configuración adicional</a> en el archivo `AppServiceProvider.php`:

```php title="AppServiceProvider.php"
use Illuminate\Support\Pluralizer;
 
/**
 * Bootstrap any application services.
 *
 * @return void
 */
public function boot()
{
    Pluralizer::useLanguage('spanish');
}
```

Puedes encontrar mas información sobre el método **plural** en la <a href="https://laravel.com/docs/9.x/helpers#method-fluent-str-plural" target="_blank" title="Documentación del helper plural">documentación.</a>
