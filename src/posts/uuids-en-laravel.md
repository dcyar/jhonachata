---
type: article
title: UUID's en laravel
slug: uuid-en-laravel
publishedAt: 2022-11-29
excerpt: En lugar de usar números enteros auto incrementados como claves principales de nuestros modelos de Eloquent, ahora podemos optar por usar UUID en su lugar...
draft: false
---

En lugar de usar números enteros auto incrementados como claves principales de nuestros modelos de Eloquent, ahora podemos optar por usar UUID en su lugar.

> Los UUID son identificadores alfanuméricos únicos universales que tienen 36 carácteres de largo.

En la versión <a href="https://github.com/laravel/framework/releases/tag/v9.30.1" class="font-semibold text-red-700" target="_blank">9.30.1</a> de laravel, se agregó la opción de poder usar **UUID** como identificadores de los modelos de eloquent (<a href="https://github.com/laravel/framework/pull/44074" target="_blank" class="font-semibold text-red-700">PR #44074</a>).

¿Cómo podemos lograr esto?, te muestro a continuación:

#### 1. Primero necesitamos una instalación nueva de un proyecto de laravel

Tenemos varias opciones para crear un nuevo proyecto de laravel

```bash
# Con composer
composer create-project laravel/laravel uuid

# Con laravel installer
laravel new uuid

# Laravel con docker (sail)
# agregamos tambien "?with=mysql" para que nos incluya
# el contenedor de mysql
curl -s "https://laravel.build/uuid?with=mysql" | bash
```

En mi caso, usaré <a href="https://laravel.com/docs/9.x/sail" target="_blank" class="font-semibold text-red-700">laravel sail</a>, que esta disponible para Mac y Linux, en Windows se debe configurar previamente <a href="https://learn.microsoft.com/en-us/windows/wsl/install" class="font-semibold text-red-700" target="_blank">WSL (Windows Subsystem for Linux)</a>

#### 2. Levantamos el proyecto

```bash
# Navegamos a la carpeta del proyecto
cd ~/your-path/uuid

# Iniciamos los contenedores con el comando
./vendor/bin/sail up -d
```

#### 3. Creamos un nuevo modelo (Task)

![Crear modelo Task](/images/uuids-en-laravel/make-model.png)

Usamos la opción _**-m**_, para generar tambien la migración.

#### 4. Modificamos la migración del modelo Task

```php
Schema::create('tasks', function (Blueprint $table) {
    $table->uuid('id'); // columna de tipo uuid
    $table->string('title');
    $table->timestamps();
});
```

#### 5. Modificamos el modelo Task

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// Importar tambien este trait HasUuids
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

#### 6. Ejecutamos las migraciones

![Ejecutar migraciones](/images/uuids-en-laravel/run-migrations.png)

#### 7. Por último, creamos una nueva tarea, desde tinker

```bash
./vendor/bin/sail tinker
```

```php
$task = Task::create([
    'title' => 'Nueva tarea'
]);

// Al imprimir el id, obtenemos un uuid
$task->id; // "97ddb274-d2d6-4dfb-b23d-6f7c50f58f51"
```

Puedes encontrar mas información acerca de los **Uuid** en la <a href="https://laravel.com/docs/9.x/eloquent#uuid-and-ulid-keys" class="font-semibold text-red-600" target="_blank">documentación de laravel.</a>
