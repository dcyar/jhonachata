---
type: artículo
title: Como usar Git stash
slug: como-usar-git-stash
publishedAt: 2023-01-03
excerpt: El comando git stash es una función muy útil de git, nos permite guardar temporalmente para aplicarlos luego. Esto es muy útil cuando se trabaja con múltiples ramas...
tags: git,stash
---

El comando `git stash` es una función muy útil de git, nos permite guardar temporalmente para aplicarlos luego. Esto es muy útil cuando se trabaja con múltiples ramas y se quiere ir cambiando entre ellas sin tener la necesidad de hacer commit de los cambios.

Pongámonos en el siguiente escenario:

> Tenemos un proyecto con 02 ramas, `main` y `develop`, justo estamos realizando cambios en **develop** y necesitamos urgentemente realizar una corrección en la rama **main** que es la que esta en producción.

> Antes de poder cambiarnos de rama para poder realizar el cambio, necesitamos guardar los cambios que ya teníamos hechos en la rama **develop**, pero no queremos hacer commit por que aún no terminamos nuestro trabajo.

Es en estas situaciones donde podemos hacer uso de `git stash`.

Bien, entonces ¿cómo lo uso?, pues es bastante fácil, pongamos como ejemplo el repositorio de este blog (que de hecho puedes encontrar el código en <a href="https://github.com/dcyar/jhonachata" target="_blank">github</a>), en el cual he realizado cambios en algunos archivos:

![Salida del comando git status](/images/git-stash/changes.png)

Como se ve en la imagen, nos encontramos en la rama `develop` y realize 2 cambios: Una modificación en el archivo `MainLayout.astro` y agregue un nuevo archivo `como-usar-git-stash.md` el cual aún no tiene seguimiento por git.

Ahora si queremos cambiarnos a la rama `main` nos podemos encontrar con 2 situaciones:

1. Una en la que al hacer checkout a la rama **main**, nos llevemos los archivos que ya modificamos en la rama **develop**.

2. Otra en la que al intentar hacer checkout a la rama **main**, nos pidan hacer commit de nuestros cambios antes de cambiarnos de rama.

Ahora es donde podemos hacer uso del comando `git stash`

![Salida del comando git stash](/images/git-stash/git-stash-u.png)

Como vemos en la imagen anterior al hacer uso del comando `git stash`, donde también incluí la opción `-u` para se incluyeran los archivos que aún no se están haciendo seguimiento con git, los archivos se almacenaron en un stash.

![Salida del comando git stash list](/images/git-stash/git-stash-list.png)

Ahora ya podemos movernos con libertar entre las ramas, sin perder nuestros cambios previos o agregarlos en un commit.

Pero y ahora ¿Cómo recupero mis cambios?, es muy fácil, lo único que debemos hacer es, ejecutar el comando `git stash pop` o si tenemos más de un stash, podemos obtenerlos según su índice con `git stash pop stash@{0}`

![Salida del comando git stash pop](/images/git-stash/git-stash-pop.png)

Puedes encontrar mas información sobre `git stash` en la <a href="https://git-scm.com/docs/git-stash" target="_blank">documentación.</a>
