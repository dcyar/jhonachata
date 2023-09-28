---
type: original
title: Directivas if de blade personalizadas
slug: directivas-if-de-blade-personalizadas
publishedAt: 2023-04-23
excerpt: En algunas circunstancias necesitamos extender blade para cumplir cierta funcionalidad sin duplicar un código verboso, es por ello que el framework nos permite crear directivas if de blade para usarlo de formas mucho más simple
tags: ['laravel', 'blade', 'directivas']
---

En algunas circunstancias necesitamos extender blade para cumplir cierta funcionalidad sin duplicar un código verboso, es por ello que el framework nos permite crear `directivas if de blade` para usarlo de formas mucho más simple

En esta ocasión veremos como tener <a href="https://laravel.com/docs/10.x/blade#custom-if-statements" target="_blank" title="Documentación de laravel" rel="nofollow noopener">directivas if de blade personalizadas</a>

Para ello lo único que tenemos que hacer, es registrar la nueva directiva en el archivo `app/Providers/AppServiceProvider.php`, tal cual nos indica la documentación oficial.

```php title="AppServiceProvider.php"
use Illuminate\Support\Facades\Blade;
 
/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Blade::if('disk', function (string $value) {
        return config('filesystems.default') === $value;
    });
}
```

En el ejemplo anterior, creamos una `directiva if de blade`, para validar el disco que estamos usando en nuestra aplicación, unicamente con ello, podemos usar la directiva `@disk()` en blade.

```blade
@disk('local')
    <!-- La aplicación esta usando el disco local -->
@elsedisk('s3')
    <!-- La aplicación esta usando el disco s3 -->
@else
    <!-- La aplicación esta usando otro disco -->
@enddisk
 
@unlessdisk('local')
    <!-- La aplicación no esta usando el disco local -->
@enddisk
```

Gracias esta funcionalidad podemos tener un código mas legible y mantenible.