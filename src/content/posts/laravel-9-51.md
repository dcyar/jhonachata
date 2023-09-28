---
type: original
title: Laravel v9.51 nuevo comando sail:add
slug: laravel-9-51-nuevo-comando-sail-add
publishedAt: 2023-02-09
excerpt: Laravel sail es una de las herramientas del ecosistema de laravel que nos facilita el desarrollo con el uso de docker que nos permite usar diferentes servicios fácilmente
tags: ['laravel', 'docker', 'sail']
---
Indice de contenido:
- [Métodos para instalar sail en laravel](#métodos-para-instalar-sail-en-laravel "Métodos para instalar sail en laravel")
    - [Usando laravel installer](#usando-laravel-installer "Usando laravel installer")
    - [Usando curl](#usando-curl "Usando curl")
- [Agregar más servicios con sail:add](#agregar-más-servicios-con-sailadd "Agregar más servicios con sail:add")

---

<a href="https://laravel.com/docs/10.x/sail" target="_blank" title="Laravel sail" rel="nofollow noopener">Laravel Sail</a> es una de las herramientas del ecosistema de <a href="https://laravel.com/" target="_blank" title="Laravel" rel="nofollow noopener">Laravel</a> que nos facilita el desarrollo con el uso de docker que nos permite usar diferentes servicios fácilmente.

Cuando queremos crear un nuevo proyecto de `laravel` y usarlo con `sail`, podemos seguir 2 caminos.

## Métodos para instalar sail en laravel

### Usando "laravel installer"

```bash title="Terminal"
laravel new my-project

cd my-project

php artisan sail:install
```

Justo después de ejecutar `sail:install`, en la consola se nos mostrará un menú para elegir que servicio deseamos agregar.

![Agregar servicios a laravel sail con sail:install](/images/laravel-sail-add/laravel-installer-sail-install.webp "Agregar servicios a laravel sail con sail:install")

### Usando curl

```bash title="Terminal"
curl -s "https://laravel.build/my-project?with=mysql,redis" | bash
```

Como vemos en el comando, usamos el parámetro `with=mysql,redis` para indicar que servicios se deben agregar en nuestro nuevo proyecto (en este caso `mysql` y `redis`)

## Agregar más servicios con sail:add

Pero ¿qué sucede si queremos agregar un nuevo servicio a nuestro proyecto ya creado?

Aquí es donde hacemos uso del nuevo comando para sail que se agregó en la  versión `9.51` del framework.

Lo único que debemos hacer, es ejecutar el comando `php artisan sail:add` en la consola y se mostrará el mismo menú cuando usamos `sail:install`

![Agregar servicios a laravel sail con sail:add](/images/laravel-sail-add/sail-add.webp "Agregar servicios a laravel sail con sail:add")

Aquí ya podemos agregar los servicios que deseamos integrar en nuestro proyecto.