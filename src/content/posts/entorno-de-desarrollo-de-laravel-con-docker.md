---
type: artículo
title: Entorno de desarrollo de laravel con docker
slug: entorno-de-desarrollo-de-laravel-con-docker
publishedAt: 2020-03-22
excerpt: En mi máquina funcionaba, ¿lo haz escuchado alguna vez? En este post veremos como usar docker para crear un entorno de desarrollo para laravel y trabajar de forma mas profesional
draft: false
---

> En mi máquina funcionaba, ¿lo haz escuchado alguna vez?

Los entornos de desarrollo son un punto muy importante al momento de iniciar un nuevo proyecto, y más de una vez se ha oído: **En mi máquina funcionaba!**.

En el ecosistema de **PHP** hay varias opciones para trabajar de forma local, hay opciones como:

-   <a href="https://www.apachefriends.org/es/index.html" target="_blank" rel="nofollow">XAMPP</a>
-   <a href="http://www.wampserver.com/en/" target="_blank" rel="nofollow">WAMPP</a>
-   <a href="https://laragon.org/" target="_blank" rel="nofollow">LARAGON</a>

Que funcionan muy bien cuando estamos desarrollando un proyecto nosotros solos, pero ¿que sucede si hay un equipo de más de una persona trabajando en ese proyecto?. Si todos trabajan en entornos diferentes, al momento de subir los cambios pueden ocurrir errores de funcionamiento para los demás miembros del equipo cuando vayan a probar los nuevos cambios.

Y si estas desarrollando el proyecto en **Windows**, podría ocurrir problemas cuando este se sube a producción, ya que los servidores ejecutan **Linux**, y este necesita una configuración adicional.

### ¿Qué es <a href="https://www.docker.com/" target="_blank" rel="nofollow">Docker</a>?

<a href="https://www.docker.com/" target="_blank" rel="nofollow">Docker</a> es una plataforma abierta para desarrolladores y administradores de sistemas con la que se pueden desarrollar, enviar y ejecutar aplicaciones distribuidas, y estas se pueden ejecutar ya sea en computadoras portátiles, maquinas virtuales de centros de datos o en la nube.

> Docker está transformando la forma en que se desarrolla, distribuye y ejecuta el software. **La ventaja: podemos encapsular todo el entorno para pasarlo a producción con las mismas características**.

Y es exactamente lo que, como desarrolladores necesitamos, un entorno de trabajo único, tanto para local como para producción.

> Docker nos ayuda a no malgastar nuestro tiempo configurando el entorno, y las dependencias del sistema, porque lo vamos a poder desplegar fácilmente. Algo muy útil tanto para grandes empresas, como para las pequeñas startups que empiezan a desarrollar su aplicación.

## Laravel y Docker

Ahora, vamos a ver una de tantas configuraciones de entorno de desarrollo para trabajar con el framework <a href="https://laravel.com/" target="_blank" rel="nofollow">Laravel</a> en Windows.

1. Primero es necesario tener <a href="https://www.docker.com/" target="_blank" rel="nofollow">Docker</a> instalado.

2. En la carpeta donde queremos tener el proyecto ejecutamos los siguientes comandos.

```bash
git clone https://github.com/dcyar/laravel-docker-starter.git

docker-compose build
```

![docker-compose build](/images/laravel-docker/docker-compose-build.png)

3. Luego ejecutamos el archivo _install.sh_ desde la terminal.

```bash
./install.sh
```

![install.sh](/images/laravel-docker/install-sh.png)

El archivo contiene las siguientes instrucciones:

![install steps](/images/laravel-docker/steps.png)

Al finalizar tendremos el siguiente entorno para trabajar nuestro proyecto:

-   nginx
-   php 7.3
-   mysql 5.7
-   phpmyadmin
-   laravel 7.0
-   yarn
-   git inicializado con las ramas _master_ y _develop_

> El proyecto de laravel estará listo para usarlo en **localhost**, **phpmyadmin** lo tendremos en **localhost:8081**

![localhost](/images/laravel-docker/localhost.png)

![phpmyadmin](/images/laravel-docker/phpmyadmin.png)

> Y eso es todo, ya tenemos todo listo para construir nuestros proyectos con laravel y docker.

El proyecto en <a href="https://github.com/dcyar/laravel-docker-starter" target="_blank" rel="nofollow">github</a>.

Si tienes dudas puedes escribirme en twitter <a href="https://twitter.com/jhonachata" target="_blank" rel="nofollow">@jhonachata</a>.
