---
type: original
title: Generar slugs con una sola linea de código en Javascript
slug: generar-slugs-con-una-sola-linea-de-codigo-en-javascript
publishedAt: 2023-08-08
excerpt: Los slugs son una cadena de texto separada por guiones que muy a menudo usamos para identificar una página web en particular.
tags: ['javascript', 'tips', 'slugs']
---
Los slugs son una cadena de texto separada por guiones que muy a menudo usamos para identificar una página web en particular.

Muchas veces habrás visto que los slugs son generados automáticamente por algún CMS o plataforma. <a href="https://wordpress.org/" target="_blank">WordPress</a> es un claro ejemplo, en `WordPress` los slugs son generados a partir del titulo de una publicación.

En algunos casos puede que quieras generar un slug en algún proyecto en el que estés trabajando, y no necesitas ninguna biblioteca externa para lograr esto, en este articulo veremos como, con una sola linea de código en javascript podemos generar un slug.

### Código para generar un slug

```js
function slugify(texto) {
    return texto.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
}
```
Endentamos que esta sucediendo.

Primero estamos convirtiendo la cadena de texto a minúsculas, para esto hacemos uso de la función `toLowerCase()`.

Luego, en el primer `replace()`remplazamos todos los caracteres no alfanuméricos con un guion.

Por ultimo, con el segundo `replace()`, eliminamos los guiones, espacios y otros caracteres no alfanuméricos del principio y el final de la cadena de texto.

### Usando la función

Veamos un ejemplo del funcionamiento de nuestro generador de slugs.

```js
const titulo = '  Hola, este es un ejemplo para generar un slug en javascript!'

console.log(slugify(titulo));
// hola-este-es-un-ejemplo-para-generar-un-slug-en-javascript
```