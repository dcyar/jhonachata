---
type: original
title: 'Laravel Pail: Seguimiento de registros de logs en tiempo real'
slug: 'laravel-pail-seguimiento-de-registros-de-logs-en-tiempo-real'
publishedAt: 2023-11-13
excerpt: 'A menudo necesitamos revisar los archivos de logs para hacer debug de alguna funcionalidad, para estos casos se creo Laravel Pail, la forma más fácil de hacer seguimiento a los archivos de logs en tiempo real'
tags: ['laravel', 'logs', 'package']
---
<div class="indice">
Indice del contenido:

- [Introducción](#introducción "Introducción")
- [Instalación de Laravel Pail](#instalación-de-laravel-pail "Instalación de Laravel Pail")
- [Usando Pail para hacer seguimiento de los logs](#usando-pail-para-hacer-seguimiento-de-los-logs "Usando Pail para hacer seguimiento de los logs")
- [Filtrando logs](#filtrando-logs "Filtrando logs")
    - [Filtro por contenido](#filtro-por-contenido "Filtro por contenido")
    - [Filtro por mensaje](#filtro-por-mensaje "Filtro por mensaje")
    - [Filtro por el nivel](#filtro-por-el-nivel "Filtro por el nivel")
    - [Filtro por usuario](#filtro-por-usuario "Filtro por usuario")
- [Conclusión](#conclusión "Conclusión")
</div>

## Introducción

A menudo necesitamos revisar los archivos de logs para hacer debug de alguna funcionalidad, para estos casos se creo <a href="https://github.com/laravel/pail" target="_blank" title="Repositorio del paquete laravel pail">**Laravel Pail**</a>, la forma más fácil de hacer seguimiento a los archivos de logs en tiempo real.

Antes de **Laravel Pail**, se hacia el seguimiento usando el comando **tail**:

```bash title="Terminal"
tail -f storage/logs/laravel.log
```

Con este comando obtenemos los nuevos registros que llegan al archivo de `laravel.log`, aunque de una forma nada elegante.

## Instalación de Laravel Pail

Antes de seguir con la instalación, debemos tener en cuenta que el paquete tiene ciertos requerimientos:

- PHP 8.2+
- Extensión <a href="https://www.php.net/manual/en/book.pcntl.php" target="_blank" rel="nofollow" title="extensión de php PCNTL">PCNTL</a>

Una vez cumplidos estos requerimientos, podemos proceder con la instalación con el siguiente comando:

```bash title="Terminal"
composer require laravel/pail
```

## Usando Pail para hacer seguimiento de los logs

Para usar el paquete **Laravel Pail**, unicamente debemos ejecutar siguiente comando en nuestra terminal:

![Laravel Pail](/images/laravel-pail/laravel-pail.webp "Laravel Pail comando")

El comando también tiene opciones para obtener mas información de los logs

```bash title="Terminal"
# Muestra más detalles de los logs
php artisan pail -v

# Muestra más detalles y el stack trace de los logs
php artisan pail -vv
```

## Filtrando logs

El paquete **Pail** incluye también diferentes opciones para filtrar logs, entre estos tenemos:

### Filtro por contenido
Este filtro es el más general, ya que hace el filtro por el tipo, archivo, mensaje y el contenido del stack trace.

```bash title="Terminal"
php artisan pail --filter="QueryException"
```

### Filtro por mensaje
Para filtrar por el mensaje del log, usamos la siguiente opción.

```bash title="Terminal"
php artisan pail --message="User created"
```

### Filtro por el nivel
También podemos filtrar por el <a href="https://laravel.com/docs/10.x/logging#log-levels" target="_blank" title="Niveles de logs en laravel">nivel del log</a>.

```bash title="Terminal"
php artisan pail --level=warning
```

### Filtro por usuario
Por último podemos filtrar por un usuario especifico, con esto solo obtendremos los logs del usuario en particular.

```bash title="Terminal"
php artisan pail --user=1
```

## Conclusión

Una diferencia muy grande con el comando **tail** aparte del estilo con el que se muestran los logs, es que con **Laravel Pail** esta construido para funcionar con cualquier tipo de **log driver** que tengamos configurado, por ejemplo: **Sentry** o **Flare**, ademas de los filtros que nos permiten ver cierta información especifica en particular.

Puedes ver más información en la <a href="https://laravel.com/docs/10.x/logging#tailing-log-messages-using-pail" target="_blank" title="Documentación oficial">documentación oficial</a>.