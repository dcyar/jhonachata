---
type: artículo
title: Laravel v9.51 nuevo comando sail:add
slug: laravel-9-51-nuevo-comando-sail-add
publishedAt: 2023-02-09
excerpt: Laravel sail es una de las herramientas del ecosistema de laravel que nos facilita el desarrollo con el uso de docker que nos permite usar diferentes servicios fácilmente...
tags: ['laravel', 'docker', 'sail']
---

`Laravel sail` es una de las herramientas del ecosistema de **laravel** que nos facilita el desarrollo con el uso de docker que nos permite usar diferentes servicios fácilmente.

Como ya sabemos, cuando queremos crear un nuevo proyecto de laravel y usarlo con sail, podemos seguir 2 caminos.

#### Usando `laravel installer`:

```bash
laravel new my-project

cd my-project

php artisan sail:install
```

Justo después de ejecutar `sail:install`, en la consola se nos mostrará un menú para elegir que servicio deseamos agregar.

![Agregar servicios a laravel sail con sail:install](/images/laravel-sail-add/laravel-installer-sail-install.png)

#### Usando curl:

```bash
curl -s "https://laravel.build/my-project?with=mysql,redis" | bash
```

Como vemos en el comando, usamos el parámetro `with=mysql,redis` para indicar que servicios se deben agregar en nuestro nuevo proyecto (en este caso `mysql` y `redis`)

> Pero ¿qué sucede si queremos agregar un nuevo servicio a nuestro proyecto ya creado?

Aquí es donde hacemos uso del nuevo comando para sail que se agregó en la  versión `9.51` del framework.

Lo único que debemos hacer, es ejecutar el comando `php artisan sail:add` en la consola y se mostrará el mismo menú cuando usamos `sail:install`

![Agregar servicios a laravel sail con sail:add](/images/laravel-sail-add/sail-add.png)

Aquí ya podemos agregar los servicios que deseamos integrar en nuestro proyecto.