# DIA 4

## Selectores CSS
```css

/* Selector de id */
#caja{ 
    color: blue;
}


/* selector de clase */
.clase{ 
    color:red;
}

.cajaimportante{
    color: yellow;
}

/* selector de etiqueta */
div { 
    color: green;
}


/* selector de multiples items*/
h1, h2, h3, p{
    color: red;
}

/* selector con atributos */
img[alt="foto1"]{
    color: brown;
}

a[]


/* selector de hijos directos */
nav > #logo > a{

}


/* selector de todos los elementos */
nav a{

}

/* selector del siguiente hijo*/
p + a {

}
```

```HTML
<div class="caja caja importante" id="caja1">soy un div</div>
<header>
    <nav>
        <h1 id="logo">
            <a href="www.link">mi pagina</a>
        </h1>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
    </nav>
</header>

<img src="" alt="foto1">

```

# Reset CSS

Buscamos que todos los navegadores inicien nuestros proyectos con los mismos estilos soin aplicar los propios del navegador

ejemplos de reset de CSS
meyer web [https://meyerweb.com/eric/tools/css/reset/]
Eduardo Fierro [https://raw.githubusercontent.com/eduardofierropro/Reset-CSS/refs/heads/main/css/app.css]
top 10 [https://cssauthor.com/css-reset-stylesheets/]
 O 
 ```CSS
 /*reset minimo*/
  /* el * incluye todos los elementos de mi web */
  /*el border box utiliza el borde la caja como ancho, en vez del contenido*/
 *{
    margin 0;
    padding: 0;
    box-sizing: border-box;
 }
 ```

 # mini actividad
 1. Crear una pagina con dos cajas que contengan parrafos
 2. agregar estilos a tus cajas para visualizar border, padding y margen.
 3. a la segunda caja agregarle la clase "alternativa"
 4. a la clase alternativa agregarle el estilo "box-sizing: border-box" y comparar la diferencia
5. por ultimo buscar en internet alguna hoja de reset e implementarla

```html

´´´