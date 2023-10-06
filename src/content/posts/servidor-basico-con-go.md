---
type: original
title: Servidor web básico con Go (Golang)
slug: servidor-web-basico-con-go
publishedAt: 2022-12-17
excerpt: En esta ocasión realizaremos un servidor web básico con Go (Golang), para este ejemplo usaremos los módulos que vienen por defecto con Go
tags: ['go', 'golang', 'http', 'web-server']
---
<div class="indice">
Indice de contenido:

- [Primeros pasos](#primeros-pasos "Primeros pasos")
- [Hola mundo en Go](#hola-mundo-en-go "Hola mundo en Go")
- [Servidor básico con el módulo http](#servidor-básico-con-el-módulo-http "Servidor básico con el módulo http")
- [Primera ruta de nuestra aplicación](#primera-ruta-de-nuestra-aplicación "Primera ruta de nuestra aplicación")
- [Servir archivos estáticos](#servir-archivos-estáticos "Servir archivos estáticos")
</div>

En esta ocasión realizaremos un servidor web básico con <a href="https://go.dev/" target="_blank" title="Página de Golang" rel="nofollow noopener">Go (Golang)</a>, para este ejemplo usaremos los módulos que vienen por defecto con `Go`

## Primeros pasos

Para iniciar con nuestra aplicación nos dirigimos a la carpeta donde guardaremos el proyecto, en mi caso: `/home/jhon/Code/go/goserver`.

Abrimos una terminal, nos ubicamos en la carpeta y ejecutamos el comando para inicializar nuestra aplicación

![Iniciando proyecto con go desde la terminal](/images/go-crud-mongodb/go-mod-init.webp "Iniciando proyecto con go desde la terminal")

Este comando creará el archivo `go.mod` en la carpeta del proyecto, el archivo contiene el nombre del módulo y la versión de Go con la que generamos el módulo (para este ejemplo estaré usando la versión `1.19` de Go)

```go title="go.mod"
module github.com/dcyar/goserver

go 1.19
```

## Hola mundo en Go

Bien, ahora vamos a escribir las primeras líneas de la aplicación con un clásico **Hola Mundo**, para esto necesitamos crear un archivo, este se llamará `main.go`, dentro del archivo escribimos lo siguiente:

```go title="main.go"
package main

import "fmt"

func main() {
    fmt.Println("Hola Mundo")
}
```

Guardamos y nos dirigimos a la terminal, donde ejecutaremos el siguiente comando `go run main.go`, esto nos devolverá el **Hola Mundo** en la terminal.

![Hola mundo con Go](/images/go-crud-mongodb/hola-mundo.webp "Hola mundo con Go")

Listo, ya logramos imprimir el **Hola Mundo** en la terminal, pero esto no es lo que queremos lograr, aún nos queda algo de trabajo, así que manos a la obra.

## Servidor básico con el módulo http

Primero hagamos unos cambios en el archivo `main.go`, haremos uso del módulo <a href="https://pkg.go.dev/net/http" target="_blank" title="Módulo http" rel="nofollow noopener">http</a> de Go para inicializar nuestro servidor

```go title="main.go" del={3, 15} ins={4-9, 12, 16-27}
package main

import "fmt"
// Fíjate que para importar más de un módulo se deben usar los paréntesis
import (
	"fmt"
	"log"
	"net/http"
)

// Definimos una constante con el puerto que vamos a usar
const PORT string = ":5000"

func main() {
    fmt.Println("Hola Mundo")
    // Hacemos una nueva instancia de ServeMux
    // En la documentación se define a ServeMux
    // como un multiplexor de peticiones HTTP
    mux := http.NewServeMux()

    fmt.Printf("Servidor ejecutándose en el puerto %s\n", PORT)

    // Con http.ListenAndServe() escuchamos las peticiones
    // y manejamos las solicitudes del cliente
    // Encerramos ese llamado con log.Fatal()
    // para ver por consola cualquier error
    log.Fatal(http.ListenAndServe(PORT, mux))
}
```

Si vamos a la terminal, cancelamos la ejecución anterior (`ctrl + c`) y volvemos a ejecutar el comando `go run main.go`, veremos lo siguiente:

![Servidor básico con go mostrado en consola](/images/go-crud-mongodb/basic-http.webp "Servidor básico con go mostrado en consola")

Si vamos al navegador y escribimos `http://localhost:5000`, podremos apreciar que nos devuelve un error 404, esto es por que aún no hemos definido ninguna ruta

![Servidor web en el navegador con error 404](/images/go-crud-mongodb/basic-http-web.webp "Servidor web en el navegador con error 404")

## Primera ruta de nuestra aplicación

Ahora escribamos la primera ruta de nuestra aplicación:

Justo debajo de la instancia de `ServeMux`, agregamos nuestra primera ruta:

```go title="main.go"
mux := http.NewServeMux()

mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hola Mundo")
})
```

Vamos a la terminal y reiniciemos el servidor, si nos dirigimos al navegador podremos ver el **Hola Mundo**:

![Hola Mundo en el navegador](/images/go-crud-mongodb/hola-mundo-web.webp "Hola Mundo en el navegador")

Ahora podemos crear tantas rutas como queramos, por ejemplo:

```go title="main.go"
mux.HandleFunc("/contacto", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Desde contacto")
})
```

![Página de contacto en el navegador](/images/go-crud-mongodb/contacto-web.webp "Página de contacto en el navegador")

Pero qué si deseamos usar algún archivo `html`?

## Servir archivos estáticos

Para lograrlo, hacemos uso del módulo `html/template` que también viene con `Go`, veamos:

```go title="main.go" ins={5}
import (
	"fmt"
	"log"
	"net/http"
	"html/template" // Asegurémonos de importar el módulo
)
```

<br />

```go title="main.go"
// Escribamos la ruta
mux.HandleFunc("/acerca", func(w http.ResponseWriter, r *http.Request) {
    // Para este ejemplo el archivo "acerca.html"
    // se encuentra en la carpeta "views"
    // que esta al mismo nivel que "main.go"
    tmpl := template.Must(template.ParseFiles("./views/acerca.html"))

    tmpl.Execute(w, nil)
})
```

El contenido del archivo `acerca.html`, tiene una estructura básica

```html title="acerca.html"
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <title>Acerca</title>
    </head>
    <body>
        <h1>Desde la página de Acerca</h1>
    </body>
</html>
```

Reiniciamos el servidor y vamos al navegador, allí podremos visualizar lo siguiente:

![Página de acerca en el navegador](/images/go-crud-mongodb/acerca-web.webp "Página de acerca en el navegador")

<!-- Listo, en siguientes artículos estaremos viendo como enviar información al template, procesar formularios y almacenar registros en bases de datos como `MongoDb` o `Mysql`. -->
