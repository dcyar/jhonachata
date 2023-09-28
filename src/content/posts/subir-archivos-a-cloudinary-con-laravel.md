---
type: original
title: Subir archivos a cloudinary con Laravel
slug: subir-archivos-a-cloudinary-con-laravel
publishedAt: 2023-03-30
excerpt: En este artículo aprenderás cómo subir archivos a Cloudinary con Laravel de una manera sencilla y eficiente. Cloudinary es una plataforma de gestión de imágenes y videos en la nube que ofrece una amplia gama de funcionalidades
tags: ['laravel', 'cloudinary']
---
Indice de contenido:
- [Introducción](#introducción "Introducción")
- [Configuración inicial de la aplicación](#configuración-inicial-de-la-aplicación "Configuración inicial de la aplicación")
- [Configuración de cloudinary](#configuración-de-cloudinary "Configuración de cloudinary")
- [Integrar cloudinary en nuestra aplicación](#integrar-cloudinary-en-nuestra-aplicación "Integrar cloudinary en nuestra aplicación")

---

## Introducción

En este artículo aprenderás cómo subir archivos a `Cloudinary` con `Laravel` de una manera sencilla y eficiente.

> <a href="https://cloudinary.com/" target="_blank" title="cloudinary" rel="nofollow noopener">Cloudinary</a> es una plataforma de gestión de imágenes y videos en la nube que ofrece una amplia gama de funcionalidades, como almacenamiento, optimización y transformación de archivos multimedia. Con Laravel, puedes integrar fácilmente Cloudinary en tu aplicación y subir archivos de manera segura y rápida.

Una de las características más importantes de las aplicaciones web, son las subidas de archivos por parte de los usuarios, como una foto de perfil, algún documento requerido por nuestra aplicación, un video de presentación, etc.

En esta ocasión veremos un ejemplo de como lograr esto con `Laravel`, además de integrarlo con `cloudinary`

Si quieres ver código completo, puedes ver el repositorio en <a href="https://github.com/dcyar-learning/laravel-cloudinary" target="_blank" title="repositorio github" rel="nofollow noopener">Github</a>

## Configuración inicial de la aplicación

Primero hacemos uso del installer de Laravel para crear nuestra aplicación.

```bash title="Terminal"
laravel new laravel-cloudinary --git
```

*Le pasamos el flag `--git` para que se inicialice git en el proyecto al terminar la instalación*

Modificamos la vista `welcome` que viene por defecto para dejarlo con el siguiente diseño (<a href="https://github.com/dcyar-learning/laravel-cloudinary/blob/main/resources/views/welcome.blade.php" target="_blank" title="Archivo welcome en github" rel="nofollow noopener">ver código</a>):

![Vista de bienvenida](/images/laravel-cloudinary/welcome-view.webp "Vista de bienvenida")

Seguido instalaremos el paquete <a href="https://github.com/cloudinary-devs/cloudinary-laravel/#installation" target="_blank" title="paquete cloudinary laravel" rel="nofollow noopener">cloudinary-devs/cloudinary-laravel</a>, que nos facilitará la integración con `cloudinary`

```bash title="Terminal"
composer require cloudinary-labs/cloudinary-laravel
```

Publicamos el archivo de configuración del paquete:

```bash title="Terminal"
php artisan vendor:publish --provider="CloudinaryLabs\CloudinaryLaravel\CloudinaryServiceProvider" --tag="cloudinary-laravel-config"
```

## Configuración de cloudinary

A continuación vamos a crear una cuenta gratuita en <a href="https://cloudinary.com/" target="_blank" title="Cloudinary" rel="nofollow noopener">Cloudinary</a>.

![Página de registro de cloudinary](/images/express-cloudinary/cloudinary-register.webp "Página de registro de cloudinary")

Una vez creada la cuenta, nos dirigimos al `dashboard` en cloudinary, ahí podremos ubicar las credenciales necesarias para integrarlo a nuestro sistema.

![Página de inicio de cloudinary](/images/express-cloudinary/cloudinary-dashboard.webp "Página de inicio de cloudinary")

## Integrar cloudinary en nuestra aplicación

Copiamos la sección `API Environment variable` de cloudinary, abrimos el archivo de variables de entorno `.env` y agregamos lo siguiente:

```sh
CLOUDINARY_URL=cloudinary://************@dcyar
```

A continuación creamos una ruta para procesar el formulario para subir el archivo a cloudinary.

```php title="web.php"
Route::post('/upload', function (Request $request) {
    // El archivo se subirá a cloudinary en la carpeta laravel
    $result = $request->file('imagen')->storeOnCloudinary('laravel');

    // Devolvemos la vista con la url pública segura
    return view('result', [
        'image_path' => $result->getSecurePath(),
    ]);
});
```

El contenido de la vista `result` la podemos encontrar en <a href="https://github.com/dcyar-learning/laravel-cloudinary/blob/main/resources/views/result.blade.php" target="_blank" title="Archivo welcome en github" rel="nofollow noopener">este enlace</a>.

Ahora si vamos al formulario, adjuntamos un archivo (una imagen en este caso) y pulsamos en el botón de **SUBIR**, obtendremos el siguiente resultado:

![Página de resultado](/images/laravel-cloudinary/result-view.webp "Página de resultado")

Si visitamos la pestaña de `Media Library` en cloudinary podremos ver la carpeta `laravel` y dentro de ella el archivo que adjuntamos en el formulario.

![Página de media library de cloudinary](/images/laravel-cloudinary/cloudinary-image.webp "Página de media library de cloudinary")

Eso es todo, ahora ya podemos agregar la funcionalidad de subir archivos a cloudinary a nuestros proyectos.

Si quieres ver el código completo, puedes ver el <a href="https://github.com/dcyar-learning/laravel-cloudinary" target="_blank" title="repositorio del proyecto" rel="nofollow noopener">repositorio en github</a>

También te recomiendo otro artículo para <a href="/subir-archivos-a-cloudinary-con-express-y-nodejs" title="artículo para subir archivos a cloudinary con nodejs y express">subir archivos a cloudinary con NodeJS y Express</a>