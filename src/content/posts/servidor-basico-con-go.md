---
type: original
title: Servidor web básico con Go (Golang)
slug: servidor-web-basico-con-go
publishedAt: 2022-12-17
excerpt: En esta ocasión realizaremos un servidor web básico con Go (Golang), para este ejemplo usaremos los módulos que vienen por defecto con Go...
tags: ['go', 'golang', 'http', 'web server']
---

En esta ocasión realizaremos un servidor web básico con <a href="https://go.dev/" target="_blank">Go (Golang)</a>, para este ejemplo usaremos los módulos que vienen por defecto con `Go`

Para iniciar con nuestra aplicación nos dirigimos a la carpeta donde guardaremos el proyecto, en mi caso: `/home/jhon/Code/go/goserver`.

Abrimos una terminal, nos ubicamos en la carpeta y ejecutamos el comando para inicializar nuestra aplicación

![Iniciando proyecto con go desde la terminal](/images/go-crud-mongodb/go-mod-init.png)

Este comando creará el archivo `go.mod` en la carpeta del proyecto, el archivo contiene el nombre del módulo y la versión de Go con la que generamos el módulo (para este ejemplo estaré usando la versión `1.19` de Go)

```go
module github.com/dcyar/goserver

go 1.19
```

Bien, ahora vamos a escribir las primeras líneas de la aplicación con un clásico **Hola Mundo**, para esto necesitamos crear un archivo, este se llamará `main.go`, dentro del archivo escribimos lo siguiente:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hola Mundo")
}
```

Guardamos y nos dirigimos a la terminal, donde ejecutaremos el siguiente comando `go run main.go`, esto nos devolverá el **Hola Mundo** en la terminal.

![Hola mundo con Go](/images/go-crud-mongodb/hola-mundo.png)

Listo, ya logramos imprimir el **Hola Mundo** en la terminal, pero esto no es lo que queremos lograr, aún nos queda algo de trabajo, así que manos a la obra.

Primero hagamos unos cambios en el archivo `main.go`, haremos uso del módulo <a href="https://pkg.go.dev/net/http" target="_blank">http</a> de Go para inicializar nuestro servidor

```go
package main

// Fíjate que para importar más de un módulo se deben usar los paréntesis
import (
	"fmt"
	"log"
	"net/http"
)

// Definimos una constante con el puerto que vamos a usar
const PORT string = ":5000"

func main() {
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

![Servidor básico con go mostrado en consola](/images/go-crud-mongodb/basic-http.png)

Si vamos al navegador y escribimos `http://localhost:5000`, podremos apreciar que nos devuelve un error 404, esto es por que aún no hemos definido ninguna ruta

![Servidor web en el navegador con error 404](/images/go-crud-mongodb/basic-http-web.png)

Ahora escribamos la primera ruta de nuestra aplicación:

Justo debajo de la instancia de `ServeMux`, agregamos nuestra primera ruta:

```go
mux := http.NewServeMux()

mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hola Mundo")
})
```

Vamos a la terminal y reiniciemos el servidor, si nos dirigimos al navegador podremos ver el **Hola Mundo**:

![Hola Mundo en el navegador](/images/go-crud-mongodb/hola-mundo-web.png)

Ahora podemos crear tantas rutas como queramos, por ejemplo:

```go
mux.HandleFunc("/contacto", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Desde contacto")
})
```

![Página de contacto en el navegador](/images/go-crud-mongodb/contacto-web.png)

Pero qué si deseamos usar algún archivo `html`?

Para lograrlo, hacemos uso del módulo `html/template` que también viene con `Go`, veamos:

```go
import (
	...
	"html/template" // Asegurémonos de importar el módulo
	...
)
```

```go
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

```html
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

![Página de acerca en el navegador](/images/go-crud-mongodb/acerca-web.png)

Listo, en siguientes artículos estaremos viendo como enviar información al template, procesar formularios y almacenar registros en bases de datos como `MongoDb` o `Mysql`.

> Si tienes alguna duda puedes contactarme por linkedin: <a href="https://www.linkedin.com/in/jhonachata/" target="_blank">@jhonachata</a>
