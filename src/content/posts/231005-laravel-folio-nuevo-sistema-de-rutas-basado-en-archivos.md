---
type: original
title: 'Laravel Folio: Nuevo sistema de rutas basado en archivos'
slug: 'laravel-folio-nuevo-sistema-de-rutas-basado-en-archivos'
publishedAt: 2023-10-05
excerpt: 'Laravel Folio es un nuevo sistema de rutas automático basado en archivos y directorios, diseñado para simplificar el sistema de rutas en aplicaciones de Laravel.'
tags: ['laravel-folio', 'laravel']
---
<div class="indice">
Indice de contenido:

- [Introducción](#introducción "Introducción")
- [Instalación](#instalación "Instalación")
- [El comando php artisan make:folio](#el-comando-php-artisan-makefolio "El comando php artisan make:folio")
    - [Crear páginas](#crear-páginas "Crear páginas")
    - [Crear páginas anidadas](#crear-páginas-anidadas "Crear páginas anidadas")
    - [Páginas dinámicas](#páginas-dinámicas "Páginas dinámicas")
    - [Route Model Binding](#route-model-binding "Route Model Binding")
- [Usando middlewares](#usando-middlewares "Usando middlewares")
    - [Middleware global](#middleware-global "Middleware global")
    - [Middleware local](#middleware-local "Middleware local")
- [Listando las rutas de Laravel Folio](#listando-las-rutas-de-laravel-folio "Listando las rutas de Laravel Folio")
</div>

## Introducción

<a href="https://laravel.com/docs/10.x/folio" target="_blank" rel="nofollow" title="Laravel folio">**Laravel Folio**</a> es un nuevo sistema de rutas automático basado en archivos y directorios, diseñado para simplificar el sistema de rutas en aplicaciones de **Laravel**.

Al igual que frameworks como **Astro**, **NextJS**, **NuxtJS** u otros, donde para crear una página solo necesitamos crear un archivo en un directorio `pages`, **Laravel Folio** tiene la misma funcionalidad para aprovecharla en laravel.

Por ejemplo si queremos tener una página de `contacto`, solo debemos crear el archivo de blade `contacto.blade.php` en la carpeta `resources/views/pages`. Y desde el navegador ya podremos acceder a la página desde `/contacto`.

```blade title="contacto.blade.php"
<div>
    <h2>Hola desde contacto</h2>
</div>
```

## Instalación

Para integrar **Laravel Folio** en nuestra aplicación debemos tener en cuentas los siguientes requerimientos:

- **PHP 8.1** o superior
- **Laravel 10.19** o superior

Una vez cumplidos estos requerimientos procedemos a la instalación (también puedes consultar la <a href="https://laravel.com/docs/10.x/folio" target="_blank" rel="nofollow" title="Documentación oficial">documentación oficial</a>).

En la consola ejecutamos los siguientes comandos:

```bash title="Terminal"
composer require laravel/folio

php artisan folio:install
```

El comando `php artisan folio:install` agregará el provider `FolioServiceProvider` en nuestro código, este es el archivo donde podemos realizar configuraciones respecto a Laravel Folio:

```php title="FolioServiceProvider.php"
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Folio\Folio;

class FolioServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Folio::path(resource_path('views/pages'))->middleware([
            '*' => [
                //
            ],
        ]);
    }
}
```

Por ejemplo si queremos cambiar la carpeta de donde se servirán las páginas.

```php title="FolioServiceProvider.php" del={1} ins={3}
Folio::path(resource_path('views/pages'))->middleware([
// Ahora se usará la carpeta resources/views/páginas
Folio::path(resource_path('views/paginas'))->middleware([
    '*' => [
        //
    ],
]);
```

## El comando php artisan make:folio

Al instalar **Laravel Folio** también estará disponible el comando de artisan `make:folio`, con el que de forma simplificada podremos crear nuevas páginas

### Crear páginas

Ahora podemos crear nuevas paginas, por ejemplo una página para nuestros proyectos.

```bash title="Terminal"
php artisan make:folio proyectos

# INFO  Page [resources/views/pages/proyectos.blade.php] created successfully. 
```

Ahora tenemos el archivo de blade `resources/views/pages/proyectos.blade.php`

```blade title="proyectos.blade.php"
<div>
    //
</div>
```

También podemos acceder desde la ruta `/proyectos` y ver el contenido.

### Crear páginas anidadas
Otro uso del comando de artisan `make:folio`, es que podemos usarlo para crear páginas anidadas, por ejemplo para la ruta `/usuario/perfil` debemos usar lo siguiente:

```bash title="Terminal"
php artisan make:folio usuario/perfil

# INFO  Page [resources/views/pages/usuario/perfil.blade.php] created successfully. 
```

### Páginas dinámicas
Si queremos tener una ruta dinámica, por ejemplo: `/peliculas/[id]`, podemos lograrlo con el siguiente comando:

```bash title="Terminal"
php artisan make:folio "peliculas/[id]"

# INFO  Page [resources/views/pages/peliculas/[id].blade.php] created successfully.  
```

En el archivo de blade podremos acceder a la variable `id`

```blade title="peliculas/[id].blade.php"
<div>
    <h2>Película #{{ $id }}</h2>
</div>
```

### Route Model Binding
También podemos asociar modelos en las rutas, unicamente debemos agregar el nombre del modelo a usar en la variable dinámica:
```bash title="Terminal"
php artisan make:folio "usuarios/[User]"

# INFO  Page [resources/views/pages/usuarios/[User].blade.php] created successfully.  
```

En la vista podremos acceder a los datos del modelo:

```blade title="usuarios/[User].blade.php"
<div>
    <h2>Usuario {{ $user->name }}</h2>
</div>
```

## Usando middlewares

### Middleware global
Podemos configurar los middlewares de forma global desde el archivo `FolioServiceProvider.php`:

```php title="FolioServiceProvider.php" ins={3-5}
Folio::path(resource_path('views/pages'))->middleware([
    '*' => [
        'auth',
        'verified',
        // ...
    ],
]);
```

### Middleware local
También podemos configurar middlewares por cada página:

```blade title="usuarios/[User].blade.php" ins={1-5}
<?php
use function Laravel\Folio\{middleware};

middleware(['auth']);
?>
<div>
    <h2>Usuario {{ $user->name }}</h2>
</div>
```

## Listando las rutas de Laravel Folio
Para listar las rutas de **Laravel Folio** podemos usar el siguiente comando:

```bash title="Terminal"
php artisan folio:list

GET /contacto .................. contacto.blade.php
GET /peliculas/{id} ...... peliculas/[id].blade.php
GET /proyectos ................ proyectos.blade.php
GET /usuarios/{user} .... usuarios/[User].blade.php
                                 Showing [4] routes
```