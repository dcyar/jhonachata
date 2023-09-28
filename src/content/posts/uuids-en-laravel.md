---
type: original
title: UUID's en laravel
slug: uuid-en-laravel
publishedAt: 2022-11-29
excerpt: En lugar de usar números enteros auto incrementados como claves principales de nuestros modelos de Eloquent, ahora podemos optar por usar UUID en su lugar
tags: ['uuid', 'laravel']
---
Indice de contenido:
- [Introducción](#introducción "Introducción")
- [Configuración inicial de la aplicación](#configuración-inicial-de-la-aplicación "Configuración inicial de la aplicación")
- [Modelo Task y migraciones](#modelo-task-y-migraciones "Modelo Task y migraciones")
- [Resultado](#resultado "Resultado")

---

## Introducción

En lugar de usar números enteros auto incrementados como claves principales de nuestros modelos de Eloquent, ahora podemos optar por usar `UUID's` en su lugar.

> Los **UUID** son identificadores alfanuméricos únicos universales que tienen 36 caracteres de largo.

En la versión <a href="https://github.com/laravel/framework/releases/tag/v9.30.1" target="_blank" title="Release de laravel" rel="nofollow noopener">9.30.1</a> de laravel, se agregó la opción de poder usar **UUID** como identificadores de los modelos de eloquent (<a href="https://github.com/laravel/framework/pull/44074" target="_blank" title="Pull request" rel="nofollow noopener">PR #44074</a>).

¿Cómo podemos lograr esto?, te muestro a continuación:

## Configuración inicial de la aplicación

Tenemos varias opciones para crear un nuevo proyecto de laravel

```bash title="Terminal"
# Con composer
composer create-project laravel/laravel uuid

# Con laravel installer
laravel new uuid

# Laravel con docker (sail)
# agregamos también "?with=mysql" para que nos incluya
# el contenedor de mysql
curl -s "https://laravel.build/uuid?with=mysql" | bash
```

En mi caso, usaré <a href="https://laravel.com/docs/9.x/sail" target="_blank" title="Laravel sail" rel="nofollow noopener">laravel sail</a>, que esta disponible para Mac y Linux, en Windows se debe configurar previamente <a href="https://learn.microsoft.com/en-us/windows/wsl/install" target="_blank" title="Documentación windows wsl" rel="nofollow noopener">WSL (Windows Subsystem for Linux)</a>

Levantamos el proyecto:

```bash title="Terminal"
# Navegamos a la carpeta del proyecto
cd ~/your-path/uuid

# Iniciamos los contenedores con el comando
./vendor/bin/sail up -d
```

## Modelo Task y migraciones

Creamos un nuevo modelo ***Task***, usamos la opción `-m`, para generar también la migración.

![Crear modelo Task](/images/uuids-en-laravel/make-model.webp "Crear modelo Task")

Editamos la migración y agregamos el campo `title`

```php
Schema::create('tasks', function (Blueprint $table) {
    $table->uuid('id'); // columna de tipo uuid
    $table->string('title');
    $table->timestamps();
});
```

Ahora agregamos el campo `title` para la asignación masiva en la propiedad `$fillable` del modelo

```php title="Task.php"
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// Importar también este trait HasUuids
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Task extends Model
{
    use HasFactory;
    use HasUuids; // Añadimos el trait

    protected $fillable = [
        'title',
    ];
}
```

Ejecutamos las migraciones

![Ejecutar migraciones](/images/uuids-en-laravel/run-migrations.webp "Ejecutar migraciones")

## Resultado

Creamos una nueva tarea, desde tinker

```bash title="Terminal"
./vendor/bin/sail tinker
```

<br />

```php
$task = Task::create([
    'title' => 'Nueva tarea'
]);

// Al imprimir el id, obtenemos un uuid
$task->id; // "97ddb274-d2d6-4dfb-b23d-6f7c50f58f51"
```

Puedes encontrar mas información acerca de los **Uuid** en la <a href="https://laravel.com/docs/9.x/eloquent#uuid-and-ulid-keys" class="font-semibold text-red-600" target="_blank" title="Documentación laravel" rel="nofollow noopener">documentación de laravel.</a>
