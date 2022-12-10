---
type: proyecto
title: Todo App con MEVN
slug: todo-app-con-mevn
publishedAt: 2022-12-09
excerpt: Proyecto de lista de tareas con NodeJS, ExpressJS, VueJS y MongoDB, con soporte para múltiples usuarios e inicio de sesión con google
tags: nodejs,express,mongodb,jwt,vue3,pinia
---

**<a href="https://github.com/dcyar/mevn-todo" target="_blank">MEVN Todo</a>** es una aplicación de gestión de tareas por proyectos. Cada usuario puede gestionar su cuenta y sus proyectos

## Características

-   Autenticación por token (Inicio de sesión y registro de usuarios)
-   Autenticación con google
-   Proyectos por usuarios (CRD)
-   Tareas por proyectos (CRD)
-   Perfil de usuario
-   Cambio de contraseña

## Tecnologías

-   NodeJS
-   ExpressJS
-   Express Validator
-   JWT
-   MongoDB
-   Mongoose
-   VueJS 3 (composition API)
-   Pinia
-   Vue Router

## Instalación

### Backend

```bash
cd ./api

cp .env.example .env

npm install

npm run dev
```

### Frontend

```bash
cd ./app

cp .env.example .env

npm install

npm run dev
```

## Capturas

### Página de inicio

![Página de inicio](/images/mevn-todo/home.png)

### Página de inicio de sesión

![Página de inicio de sesión](/images/mevn-todo/login.png)

### Página de registro

![Página de registro](/images/mevn-todo/registro.png)

### Página de proyectos

![Página de proyectos](/images/mevn-todo/proyectos.png)

### Página de tareas

![Página de tareas](/images/mevn-todo/todos.png)

Si deseas usar la aplicación y necesitas ayuda con la instalación o el uso, puedes contactarme por linkedin: <a href="https://www.linkedin.com/in/jhonachata/" target="_blank">@jhonachata</a>

> Puedes acceder a una copia de la aplicación desde aquí <a href="https://github.com/dcyar/mevn-todo" target="_blank">MEVN Todo</a>
