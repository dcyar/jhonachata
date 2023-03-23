---
type: proyecto
title: Laravel Rooms, websocket's con soketi
slug: laravel-rooms
publishedAt: 2023-03-23
excerpt: Proyecto de laravel implementando websocket's con Soketi
tags: ['websockets', 'broadcasting', 'laravel', 'soketi']
repo: https://github.com/dcyar/laravel-rooms
---
Proyecto de `laravel` implementando `websocket's` con <a href="https://soketi.app" target="_blank">Soketi</a>

## Requerimientos

Para que el proyecto funcione sin errores es necesario tener instalado **[Soketi]('https://docs.soketi.app/getting-started/installation/cli-installation')**.

- Php 8.1
- Laravel 10.x

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/dcyar/laravel-rooms

# Ingresar a la carpeta del proyecto
cd laravel-rooms

# Instalar las dependencias de composer
composer install

# Instalar las dependencias de npm
npm install && npm run build
```

## Levantar la aplicación

```bash
# Levantar soketi
soketi start
```

## Capturas
### Vista de bienvenida

![Welcome](https://raw.githubusercontent.com/dcyar/laravel-rooms/main/public/demo/welcome.png)

### Vista para crear salas

![Create Room](https://raw.githubusercontent.com/dcyar/laravel-rooms/main/public/demo/create-room.png)

### Vista de lista de salas

![Rooms List](https://raw.githubusercontent.com/dcyar/laravel-rooms/main/public/demo/rooms-list.png)

### Vista de chat

![Chat](https://raw.githubusercontent.com/dcyar/laravel-rooms/main/public/demo/chat.png)

> Puedes ver más en el repositorio del proyecto: <a href="https://github.com/dcyar/laravel-rooms" target="_blank">Laravel Rooms</a>
