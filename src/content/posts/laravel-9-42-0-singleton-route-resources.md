---
type: original
title: Laravel 9.40.0 Singleton Route Resource
slug: laravel-9-42-0-singleton-route-resource
publishedAt: 2022-11-30
excerpt: Laravel 9.40.0 Singleton Route Resource, rutas para recursos de una sola instancia
tags: ['laravel', 'feature', 'routes']
---

El día de ayer se liberó la versión <a href="https://github.com/laravel/framework/releases/tag/v9.42.0" target="_blank">9.42.0</a> de laravel y una de las características nuevas son las <a href="https://laravel.com/docs/9.x/controllers#singleton-resource-controllers" target="_blank">Single Route Resource</a>, que son similares a las `Resource Controller`, con la diferencia que solo nos crea las rutas para `Ver (GET)`, `Editar (GET)` y `Actualizar (PUT|PATCH)`

Primero nos preguntamos, ¿En que casos podemos usar esta nueva característica?

> En nuestra aplicación, cuando se registre un usuario, debemos crearle un perfil, donde se almacenarán algunos datos extra (teléfono, dirección, fecha de nacimiento, etc), pero en este caso solo tendremos un perfil por usuario, con una relación de uno a uno (un usuario puede tener un solo perfil, y un perfil solo puede pertenecer a un usuario).

> Teniendo esto en cuenta, no necesitaremos las rutas de listar perfiles, tampoco la de crear un nuevo perfil por que solo puede existir una por usuario y tampoco la ruta de eliminar un perfil

¿Y cómo podemos usarlo?

```php
Route::singleton('profile', ProfileController::class);

/*
Esto genera las siguientes rutas:
GET       /profile
GET       /profile/edit
PUT/PATCH /profile
*/
```

Ahora podemos tener la ruta para el cliente `example.com/profile`, donde mostrar los datos del perfil del usuario, si queremos actualizar los datos, dirigimos al usuario a `example.com/profile/edit` y para guardar los datos, agregamos al action del formulario la ruta `example.com/profile` con los métodos `PUT o PATCH`

> Puedes ver más en la documentación a cerca de los <a href="https://laravel.com/docs/9.x/controllers#singleton-resource-controllers" target="_blank">Single Route Resource</a>
