---
type: artículo
title: Test A/B con Laravel Pennant
publishedAt: 2023-02-10
excerpt: Junto con el lanzamiento de Laravel 10, el team de laravel nos incluye el paquete Pennant, una herramienta que nos facilitará la introducción de nuevos features, realizar pruebas A/B y mucho más...
tags: ['test a/b', 'pennant', 'laravel']
---
Junto con el lanzamiento de <a href="https://laravel.com/docs/10.x" target="_blank">Laravel 10</a>, el team de laravel nos incluye el paquete <a href="https://laravel.com/docs/10.x/pennant" target="_blank">Pennant</a>, una herramienta que nos facilitará la introducción de **nuevos features**, **realizar pruebas A/B** y mucho más.

En esta ocasión veremos un ejemplo de como usar esta herramienta para realizar pruebas A/B sobre la implementación de una nueva **página de Dashboard**.

Para este ejemplo ya tengo creado una aplicación de laravel que incluye únicamente `Laravel Breeze`.

![Pantalla de inicio de laravel v10](/images/laravel-pennant/welcome-laravel-10.png)

> Cabe señalar que a fecha de hoy, aún no es oficial el lanzamiento de la versión 10 del framework, entonces la instalación se debe hacer con el siguiente comando `laravel new my-site --dev`, con esto, se instalará el proyecto con la versión 10 de laravel.

### Instalación de Laravel Pennant
Para agregar el paquete a nuestro proyecto, ejecutaremos estos comando en nuestra terminal (ver la <a href="https://laravel.com/docs/10.x/pennant" target="_blank">documentación de Laravel Pennant</a> para mas detalles)

1. Instalar Laravel Pennant:
```php
composer require laravel/pennant
```
2. Hacemos públicos el archivo de configuración y las migraciones:
```php
php artisan vendor:publish --provider="Laravel\Pennant\PennantServiceProvider"
```

![Publicación de assets de laravel pennant](/images/laravel-pennant/pennant-assets.png)

3. Ejecutamos las migraciones:
```
php artisan migrate
```

A continuación crearemos nuestra primera `Feature`, tenemos 2 formas de hacerlo:

1. Definir la feature en el archivo **AppServiceProvider.php**

```php
<?php
 
namespace App\Providers;
 
use App\Models\User;
use Illuminate\Support\Lottery;
use Illuminate\Support\ServiceProvider;
use Laravel\Pennant\Feature;
 
class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Feature::define('new-dashboard-page', function() {
            //
        });
    }
}
```


2. Crear una clase Feature con artisan, nosotros usaremos esta opción.

Para crear la Feature con artisan, ejecutamos el siguiente comando en la terminal.

```
php artisan pennant:feature NewDashboardPage
```

Se nos creará el archivo `app/Features/NewDashboardPage.php`

```php
<?php

namespace App\Features;

use Illuminate\Support\Lottery;

class NewDashboardPage
{
    /**
     * Resolve the feature's initial value.
     */
    public function resolve(mixed $scope): mixed
    {
        return false;
    }
}
```

> En nuestro proyecto tomaremos el tiempo que llevan nuestros usuarios en la aplicación para que decidir a quienes mostrar el nuevo diseño de dashboard. En este caso mostraremos a los usuarios con más de 6 meses de antigüedad el nuevo diseño del dashboard.

A continuación haremos una copia del archivo _**dashboard.blade.php**_ y lo nombraremos _**new-dashboard.blade.php**_, con el siguiente contenido.

```blade
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Nuevo Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-indigo-600 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-white">
                    Nuevo diseño de dashboard
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
```

Ahora crearemos 2 usuarios con tinker, para esto nos dirigimos a la terminal y ejecutamos el comando para entrar en la shell de tinker:

```
php artisan tinker
```

Ya en la consola de tinker, crearemos el primer usuario haciendo uso del `factory` del modelo `User`:

```php
User::factory()->create()
```

Luego creamos el segundo usuario y le agregamos que la fecha de creación del registro sea 8 meses antes:

```php
User::factory()->create(['created_at' => now()->subMonths(8)])
```

El resultado será el siguiente:

![Creación de usuarios con tinker](/images/laravel-pennant/create-users-tinker.png)

Ahora continuemos con la configuración del **Feature**, para validar que el nuevo diseño del dashboard se muestre a los usuarios con más de 6 meses de antigüedad, debemos agregar lo siguiente:

```php
<?php

namespace App\Features;

use App\Models\User;

class NewDashboardPage
{
    /**
     * Resolve the feature's initial value.
     */
    public function resolve(User $user): bool
    {
        $antiguedad = today()->diffInMonths($user->created_at);

        return $antiguedad >= 6;
    }
}
```

Ahora en el archivo de rutas web, modificamos la ruta _**/dashboard**_, con lo siguiente:
```php
use App\Features\NewDashboardPage;
use use Laravel\Pennant\Feature;

Route::get('/dashboard', function () {
    return Feature::active(NewDashboardPage::class)
        ? view('new-dashboard')
        : view('dashboard');
})->middleware(['auth'])->name('dashboard');
```

Listo, eso es todo, ahora si iniciamos sesión con cada usuario, podremos ver el nuevo diseño de dashboard únicamente en el usuario con más de 6 meses de antigüedad.

#### Vista de dashboard para usuario nuevo

![Vista dashboard para usuario nuevo](/images/laravel-pennant/new-user.png)

#### Vista de dashboard para usuario con +6 meses de antigüedad

![Agregar servicios a laravel sail con sail:install](/images/laravel-pennant/old-user.png)

<hr />

Si quieres saber mas a cerca de `Laravel Pennant`, puedes visitar la <a href="https://laravel.com/docs/10.x/pennant" target="_blank">documentación oficial</a>.