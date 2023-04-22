---
type: original
title: Subir archivos a cloudinary con Express y Nodejs
slug: subir-archivos-a-cloudinary-con-express-y-nodejs
publishedAt: 2022-12-04
excerpt: Una de las características más importantes de las aplicaciones web, son las subidas de archivos por parte de los usuarios, como una foto de perfil
tags: ['nodejs', 'express', 'cloudinary']
---

Una de las características más importantes de las aplicaciones web, son las subidas de archivos por parte de los usuarios, como una foto de perfil, algún documento requerido por nuestra aplicación, un video de presentación, etc.

En esta ocasión veremos un ejemplo de como lograr esto con `ExpressJS` y `NodeJS`, además de integrarlo con `cloudinary`

> <a href="https://cloudinary.com/" target="_blank">Cloudinary</a> es una plataforma en la nube que permite a los usuarios subir, almacenar, gestionar y distribuir sus archivos de imagen, audio y video de manera fácil y segura. Con la integración de Cloudinary en una aplicación Express, puedes brindar a tus usuarios la capacidad de subir archivos directamente a tu aplicación web y manipularlos en tiempo real.

Primero vamos a configurar nuestra aplicación con <a href="https://expressjs.com/" target="_blank">ExpressJS</a>.

```bash
# Nos situamos en la carpeta donde crearemos la aplicación
cd /home/jhon/Desktop/

# Creamos la carpeta donde estará de la aplicación
mkdir express-cloudinary

# Ingresamos a la carpeta
cd express-cloudinary
```

Inicializamos npm, incluimos la opción `-y`, para aceptar la configuración por defecto
![Terminal ejecutando el comando npm i -y](/images/express-cloudinary/npm-init.png)

Ahora instalamos las dependencias necesarias para nuestra aplicación

```bash
npm install express express-fileupload cloudinary
```

En el archivo `package.json`, en la sección de `scripts`, incluimos el siguiente comando, esto nos servirá para iniciar nuestra aplicación.

```json
"scripts": {
    "start": "node app"
},
```

A continuación creamos el archivo `app.js`, donde usaremos `express` para crear nuestra aplicación.

![Listado de archivos incluido app.js](/images/express-cloudinary/app-js.png)

Dentro del archivo `app.js` escribimos lo siguiente:

```js
const express = require('express');
const fileupload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

cloudinary.config('xxxxxx');

const app = express();

app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true,
    })
);

// Imprime un formulario con un input file
// para adjuntar un archivo
app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(`<h1>Upload Your File Here :)</h1>
    <form
        action="/"
        method="post"
        enctype="multipart/form-data"
    >
        <fieldset>
            <legend>Upload your file</legend>
            <label for="photo">File:</label>
            <input type="file" name="photo" id="photo" />
        </fieldset>
        <button type="submit">Upload</button>
    </form>`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

Ahora en la consola al ejecutar el comando `npm start`, se iniciará nuestra aplicación y veremos lo siguiente:

![Terminal ejecutando el comando npm start](/images/express-cloudinary/npm-start.png)

En el navegador al visitar `http://localhost:3000`, podremos ver un formulario con un campo para adjuntar archivos

![Formulario para adjuntar archivos](/images/express-cloudinary/localhost.png)

A continuación vamos a crear una cuenta gratuita en <a href="https://cloudinary.com/" target="_blank">Cloudinary</a>.

![Página de registro de cloudinary](/images/express-cloudinary/cloudinary-register.png)

Una vez creada la cuenta, nos dirigimos al `dashboard` en cloudinary, ahí podremos ubicar las credenciales necesarias para integrarlo a nuestro sistema.

![Página de inicio de cloudinary](/images/express-cloudinary/cloudinary-dashboard.png)

Copiamos la sección `API Environment variable` de cloudinary, y lo adjuntamos en la parte de la configuración de cloudinary en nuestra aplicación.

```js
cloudinary.config('cloudinary://**************:**************@dcyar');
```

Por último agregamos el código necesario para procesar el formulario.

```js
app.post('/', async (req, res) => {
    // Validamos que nos envíen algún archivo
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Extraemos el archivo de la request
    // el nombre "file" debe coincidir
    // con el valor del atributo name del input
    const file = req.files.file;

    // Extraemos la extensión del archivo
    const extension = file.mimetype.split('/')[1];

    // Aquí validamos alguna extensión en particular
    // cualquier otra, devolverá un error
    const validExtensions = ['png', 'pdf'];
    if (!validExtensions.includes(extension)) {
        return res.status(400).send('Not valid file extension');
    }

    // Hacemos uso de cloudinary para subir el archivo
    const uploaded = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'images', // Asignamos la carpeta de destino
    });

    // Extraemos la url pública del archivo en cloudinary
    const { secure_url } = uploaded;

    // Devolvemos una respuesta con la url del archivo
    res.send(
        `<p>File uploaded to cloudinary!</p>
        <a href="${secure_url}">File here</a>`
    );
});
```

Ahora, si volvemos a la url de nuestra aplicación, adjuntamos un archivo y pulsamos en el botón _Upload_, podremos ver la siguiente pantalla.

![Página de respuesta de formulario para subir archivos a cloudinary](/images/express-cloudinary/form-response.png)

Al pulsar en el enlace `File here`, se abrirá una pestaña con la imagen de subimos.

Si visitamos la pestaña de `Media Library` en cloudinary podremos ver la carpeta `images` y dentro de ella el archivo que adjuntamos en el formulario.

![Página de media library de cloudinary](/images/express-cloudinary/cloudinary-ml.png)

Eso es todo, ahora ya podemos agregar la funcionalidad de subir archivos a nuestros proyectos.

> Nota: en este ejemplo pusimos la url de cloudinary, dentro del archivo `app.js`, generalmente y por seguridad deberíamos agregar dicha url en un archivo de variables (`.env`), podemos lograrlo con el <a href="https://www.npmjs.com/package/dotenv" target="_blank">paquete dotenv</a>.

También te dejo un repositorio con el código que vimos, también incluye la opción para subir archivos a una carpeta del mismo proyecto.

<a href="https://github.com/dcyar-learning/node-file-upload">Proyecto para subir archivos a una carpeta del mismo proyecto y a cloudinary</a>
