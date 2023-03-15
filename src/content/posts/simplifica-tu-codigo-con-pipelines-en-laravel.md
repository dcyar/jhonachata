---
type: artículo
title: Simplifica tu código con pipelines en Laravel
slug: simplifica-tu-codigo-con-pipelines-en-laravel
publishedAt: 2023-03-14
excerpt: Los pipelines son una forma de encadenar diferentes acciones o procesos sobre un elemento, de forma que podamos trabajar de manera mas eficiente y ordenada...
tags: ['laravel', 'pipelines', 'optimizacion']
---

Los `pipelines` son una forma de encadenar diferentes acciones o procesos sobre un elemento, de forma que podamos trabajar de manera mas eficiente y ordenada. En lugar de tener que definir todos los pasos necesarios en un solo lugar podemos crear sub procesos que se apliquen al elemento que le pasamos a un pipeline.

### Estructura de un pipeline de laravel
Pensemos en los `Pipelines` como una fabrica, al inicio enviamos la materia prima y sobre esta vamos aplicando diferentes procesos para obtener un resultado final. A cada proceso lo conocemos como `Pipe`, son muy parecidos a los `middlewares` en cuanto a estructura, veamos a continuación:

```php
use Closure;
use App\Models\User;
use Illuminate\Support\Facades\Pipeline;

$user = Pipeline::send($user)
            ->through([
                function (User $user, Closure $next) {
                    // ...
 
                    return $next($user);
                },
                function (User $user, Closure $next) {
                    // ...
 
                    return $next($user);
                },
            ])
            ->then(fn (User $user) => $user);
```

En el ejemplo anterior vemos que enviamos un usuario al pipeline, y los `pipes` (sub procesos), reciben el usuario y un parámetro adicional `$next` que es un closure.

Ademas de escribir cada `pipe` como una función, también podemos extraer la lógica en una clase aparte y enviarla al `pipeline`.

```php
$user = Pipeline::send($user)
            ->through([
                GenerateProfilePhoto::class,
                ActivateSubscription::class,
                SendWelcomeEmail::class,
            ])
            ->then(fn (User $user) => $user);
```


## Ahora pongamos un ejemplo:

> En una tienda online, estamos creando el proceso en el que un usuario agrega un producto a su carrito de compras.

Para completar este proceso, debemos tomar en cuenta algunos sub procesos para completar el proceso principal:

1. Validar stock del producto
2. Agregar el producto al carrito
3. Calcular el monto total

### Aplicamos la solución con Pipelines

```php
$carrito = Pipeline::send($carrito)
            ->through([
                ValidateStock::class,
                AddProductToCart::class,
                CalculateTotalAmount::class,
            ])
            ->then(fn (Carrito $carrito) => $carrito);
```

La estructura de un pipe se vería asi:

```php
class ValidateStock {
    public function __invoke(Carrito $carrito, Closure $next)
    {
        // Hacer la validación

        return $next($carrito);
    }
}
```

> Al final de cada pipe debemos devolver el elemento que le pasamos al pipeline al inicio.

Como vimos, los `Pipelines en laravel`, son una funcionalidad muy util que nos permite simplicar nuestro código y hacerlo mas eficiente.

> Como dato adicional, solo podremos encontrar documentación sobre los Pipelines en la version 10.x del framework, pero podemos usarlo en <a href="https://packagist.org/packages/illuminate/pipeline" target="_blank">cualquier versión</a>, ya que este viene por defecto en el core.