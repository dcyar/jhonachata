---
type: original
title: 'Number: Nueva clase de utilidad para formatear números'
slug: 'number-nueva-clase-de-utilidad-para-formatear-numeros'
publishedAt: 2023-11-21
excerpt: 'Junto a las utilidades ya existentes para manejo de arrays, objetos, string y más, ahora también se une una nueva utilidad para el formateo de números'
tags: ['laravel', 'tips', 'helpers']
---
<div class="indice">
Indice del contenido:

- [Number::format()](#numberformat "Number::format()")
- [Number::percentage()](#numberpercentage "Number::percentage()")
- [Number::currency()](#numbercurrency "Number::currency()")
- [Number::fileSize()](#numberfilesize "Number::fileSize()")
- [Number::forHumans()](#numberforhumans "Number::forHumans()")
- [Number::spell()](#numberspell "Number::spell()")
- [Number::ordinal()](#numberordinal "Number::ordinal()")
</div>

Junto a las utilidades ya existentes para manejo de arrays, objetos, string y más, ahora también se une una nueva utilidad para el formateo de números.

En un reciente <a href="https://github.com/laravel/framework/pull/48845" target="_blank" title="Url de pull request">PR (#48845)</a>, se agrego la nueva clase de utilidad **Number**, que contiene algunos helpers que nos ayudaran con el formateo de números para ciertos casos.

## Number::format()

```php
use Illuminate\Support\Number;
 
Number::format(100000);
// 100,000
 
Number::format(100000, precision: 2);
// 100,000.00
 
Number::format(100000.123, maxPrecision: 2);
// 100,000.12
 
Number::format(100000, locale: 'de');
// 100.000

Number::format(100000, locale: 'sv');
// 100 000
```

## Number::percentage()

```php
use Illuminate\Support\Number;

Number::percentage(10);
// 10%
 
Number::percentage((1/3) * 100, precision: 2);
// 33.33%
```

## Number::currency()

```php
use Illuminate\Support\Number;

Number::currency(1000); 
// $1,000.00
 
Number::currency(1000, in: 'EUR');
// €1,000.00
 
Number::currency(1000, in: 'EUR', locale: 'de');
// 1.000.00 €
```

## Number::fileSize()

```php
use Illuminate\Support\Number;
 
Number::fileSize(1024);
// 1 KB
 
Number::fileSize(1024 * 1024);
// 1 MB
 
Number::fileSize(1024, precision: 2);
// 1.00 KB
```

## Number::forHumans()

```php
use Illuminate\Support\Number;
 
Number::forHumans(1000);
// 1 thousand
 
Number::forHumans(489939);
// 490 thousand
 
Number::forHumans(1230000, precision: 2);
// 1.23 million
```

## Number::spell()

```php
use Illuminate\Support\Number;

Number::spell(1500);
// one thousand five hundred

Number::spell(1500, 'es_PE');
// mil quinientos

Number::spell(1500, 'fr_FR');
// mille cinq cents
```

## Number::ordinal()

```php
use Illuminate\Support\Number;

Number::ordinal(5);
// 5th

Number::ordinal(5, locale: 'es');
// 5.º

Number::ordinal(5, locale: 'fr');
// 5e
```

Puedes ver más información en la <a href="https://laravel.com/docs/10.x/helpers#method-number-format" target="_blank" title="documentación del helper Number">documentación oficial</a>