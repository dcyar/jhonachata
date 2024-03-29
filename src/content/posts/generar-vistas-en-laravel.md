---
type: original
title: Generar vistas en Laravel con Artisan
slug: generar-vistas-laravel-con-artisan
publishedAt: 2023-09-15
excerpt: Aprende cómo generar vistas en Laravel de manera rápida y sencilla utilizando Artisan, la herramienta de línea de comandos de Laravel.
tags: ['laravel', 'artisan', 'views']
---
<div class="indice">
Indice de contenido:

- [Introducción](#introducción "Introducción")
- [Crear una vista con el comando make:view](#crear-una-vista-con-el-comando-makeview "Crear una vista con el comando make:view")
- [Personalizar la extensión de la vista](#personalizar-la-extensión-de-la-vista "Personalizar la extensión de la vista")
- [Generar tests para la vista](#generar-tests-para-la-vista "Generar tests para la vista")
</div>

## Introducción

En este artículo aprenderás cómo generar vistas de manera rápida y sencilla utilizando `artisan`, la herramienta de línea de comandos de `Laravel`. Descubre cómo crear vistas con diferentes extensiones, cómo personalizar la estructura de directorios y cómo generar los tests.

> En la versión <a href="https://github.com/laravel/framework/releases/tag/v10.23.0" target="_blank" title="Repositorio de laravel" rel="nofollow">10.23.0</a> del framework se agregó el comando de artisan `make:view` que nos permite generar vistas con múltiples opciones disponibles

## Crear una vista con el comando make:view

```bash title="Terminal"
php artisan make:view posts.index

# INFO  View [resources/views/posts/index.blade.php] created successfully. 
```

El comando anterior creará la siguiente vista en la ruta `resources/views/posts/index.blade.php`
```blade title="index.blade.php"
<div>
    <!-- The best way to take care of the future is to take care of the present moment. - Thich Nhat Hanh -->
</div>
```

## Personalizar la extensión de la vista

Ademas de indicar la ruta de la vista, también podemos indicar la extensión de la vista:
```bash title="Terminal"
# Podemos indicar la extensión del archivo
php artisan make:view posts.index --extension=html

# INFO  View [resources/views/posts/index.html] created successfully.
```

## Generar tests para la vista

También podemos generar los tests para la nueva vista:
```bash title="Terminal"
# Test con phpunit
php artisan make:view posts.index --test

# Test con pest
php artisan make:view posts.index --pest
```