---
type: original
title: Directivas @checked y @selected de blade
slug: directivas-checked-y-selected-de-blade
publishedAt: 2023-08-09
excerpt: En muchos casos cuando creamos un formulario, necesitamos preseleccionar una opción especifica, es para estos casos que hacemos uso de las directivas @checked y @selected de blade, disponibles desde la versión 9.x del framework
tags: ['blade', 'laravel', 'directivas']
---
En muchos casos cuando creamos un formulario, necesitamos preseleccionar una opción especifica, es para estos casos que hacemos uso de las directivas `@checked` y `@selected` de blade, disponibles desde la <a href="https://laravel.com/docs/9.x/releases#checked-selected-blade-directives" target="_blank" title="Documentación de laravel" rel="nofollow">versión 9.x</a> del framework.

Veamos la siguiente situación, tenemos un post de un blog que tiene asignada una categoría, para este caso podemos usar la directiva `@selected` y al editar preseleccionar la categoría a la que pertenece el post.

```blade
<select name="category">
    @foreach($categories as $category)
        <option
            value="{{ $category->id }}"
            @selected($category->id === $post->category_id)
        >
            {{ $category->name }}
        </option>
    @endforeach
</select>
```

Ahora veamos un caso de uso para la directiva `@checked`, tomemos el mismo ejemplo del post de un blog, el post tiene un campo booleano para ver si el post esta activo o no.

```blade
<input type="checkbox" name="active" @checked($post->active) />
```

Tanto para la directiva `@selected` y `@checked`, debemos enviar `true o false` como parámetro.

Puedes encontrar mas información en la <a href="https://laravel.com/docs/9.x/blade#additional-attributes" target="_blank" title="Documentación de laravel" rel="nofollow">documentación.</a>