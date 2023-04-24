---
type: original
title: Generar contraseñas seguras con Laravel 10
slug: generar-contrasenas-seguras-con-laravel-10
publishedAt: 2023-02-22
excerpt: La mayoría de sistemas necesitan un sistema de autenticación con usuario y contraseña, y en ocasiones la generación de la contraseña es nuestra responsabilidad, por lo tanto debemos idear una solución o usar un paquete para que estas contraseñas sean lo más seguras posibles
tags: ['laravel', 'helpers', 'seguridad']
---
La mayoría de sistemas necesitan un sistema de autenticación con usuario y contraseña, y en ocasiones la generación de la contraseña es nuestra responsabilidad, por lo tanto debemos idear una solución o usar un paquete para que estas contraseñas sean lo más seguras posibles.

> Anteriormente para generar estas contraseñas se hacia uso del helper `Str::random()`, que generaba un cadena de texto aleatoria, pero en algunas ocasiones la cadena no era suficientemente segura.

A partir de `Laravel 10` se introdujo un nuevo método `Str::password()` para generar contraseñas seguras, que genera una cadena de texto que incluye letras (mayúsculas y minúsculas), símbolos y números, que es bastante fácil de usar.

```php
use Illuminate\Support\Str;

$password = Str::password();

// EbJo2vE-AS:U,$%_gkrV4n,q~1xy/-_4
```

La función `password()` recibe varios parámetros que nos pueden ayudar a personalizar aún más el texto generado

```php
public static function password(
    $length = 32,
    $letters = true,
    $numbers = true,
    $symbols = true,
    $spaces = false
) { ... }
```

Por ejemplo, si queremos generar una cadena con solo 12 caracteres y que contenga solo números y símbolos, podemos hacer lo siguiente:

```php
$password = Str::password(12, false);

// 64&23)3@418$
```
