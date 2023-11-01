---
type: original
title: Confirmación de contraseña para acciones sensibles en laravel
slug: confirmacion-de-contrasena-para-acciones-sensibles-en-laravel
publishedAt: 2023-08-06
excerpt: En ocasiones necesitamos proteger ciertas acciones o rutas de nuestra aplicación, donde para poder acceder a la información o realizar una acción se requiere de la contraseña del usuario
tags: ['laravel', 'seguridad']
---
En ocasiones necesitamos proteger ciertas acciones o rutas de nuestra aplicación, donde para poder acceder a la información o realizar una acción se requiere de la contraseña del usuario. En esta ocasión veremos como hacerlo en laravel.

Para poder lograr esta funcionalidad, podemos usar el middleware `password.confirm`, que esta disponible desde la versión `6.x` del framework. Puedes encontrar la referencia al middleware en el archivo `app/Http/Kernel.php`

```php title="Kernel.php"
'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
```

En este caso, tenemos como ejemplo una página (**Página Secreta**) que contiene información sensible.

![Página de ejemplo con un enlace en el menú que tiene información protegida](/images/confirmacion-de-contrasena-para-acciones-sensibles-en-laravel/pagina-ejemplo.webp "Página de ejemplo con un enlace en el menú que tiene información protegida")

Ahora, unicamente necesitamos agregar el middleware a cualquier ruta que necesite la confirmación con contraseña del usuario para continuar.

```php title="web.php"
Route::view('/secret', 'secret')->middleware('password.confirm')->name('secret');
```

Listo, ya tenemos una ruta protegida que para visualizarla requerimos que el usuario introduzca su contraseña. Si intentamos acceder, vamos a ver un formulario para ingresar la contraseña.

![Formulario de confirmación de contraseña](/images/confirmacion-de-contrasena-para-acciones-sensibles-en-laravel/formulario-confirmacion-contrasena.webp "Formulario de confirmación de contraseña")

Si ingresamos la contraseña correcta, podremos acceder al contenido.

![Contenido de la página protegida](/images/confirmacion-de-contrasena-para-acciones-sensibles-en-laravel/contenido-secreto.webp "Contenido de la página protegida")

Después de ingresar la contraseña, no se nos volverá a pedir hasta dentro de 3 horas, si queremos que este tiempo sea menor o mayor, podemos cambiarlo desde el archivo `config/auth.php`

```php title="auth.php"
'password_timeout' => 10800, // Tiempo en segundos
```

En esta ocasión vimos como proteger el contenido de una ruta, pero también podemos usarlo para acciones sensibles e importante, como:

- Cerrar la sesión en otros dispositivos.
- Cambiar la contraseña.
- Eliminar la cuenta.
- Borrar recursos
- Etc.

Puedes encontrar mas información en la <a href="https://laravel.com/docs/10.x/authentication#password-confirmation" target="_blank" title="Documentación de laravel" rel="nofollow">documentación.</a>
