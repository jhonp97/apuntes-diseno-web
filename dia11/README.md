
# Que es una media Query (MQ)

- Declaraciones en CSS que nos permite definir que reglas aplicar a partir de unas reglas asignadas por nosotros.

# Sintaxis de un MQ

Una media query se compone de las siguientes partes:
- un @media la cual es una palabra reservada [keyword]
- Un tipo de media (screen, print, all, speech) [Media Type]
- Operadores (and, not, only) [Operators]
- Breakpoints una condicion (max-width, min-width, etc)
- un bloque de CSS (nuestras reglas CSS)

```CSS
/* keyword   MediaType   Operador/es (breakpoint)     */
/* @media     screen        and      (breakpoint)  { } */

@media not|only|" " screen and|or (min-width:600px) {

    body {
        background-color: lightblue;
    }

    h1{
        color: red;
    }

}

/* combinar breakpoints */
@media screen and (min-width:600px;) and (max-width:800px;){
body {
        background-color: lightblue;
}
    }

    /* cuando la pantalla está horizontal (vertical sería portrait)*/
    @media screen and (orientation: landscape){
        body {
        background-color: lightblue;
    }
    }

    /* modo oscuro */
    @media screen and (prefers-color-schema:dark){
        body{
            backgroun-color: darkgray;
            color: white;
        }
    }


```

### Media Types (screen/print)

- all: todos los dispositivos
- print: material de vista previa de impresion
- screen: pantallas a color (tablets, movil, computadora)


- otros: pueden aparecer types DEPRECIATED tv, handheld, speech, braile, etc... (no van mas a partir de CSS3)
- speech: dispositivos de conversion de texto a voz.

Ejemplos de impresion:

```css
@media print{
    .no-te-imprimas{
        display:none !important;
    }
}

```

### Tips para utilizarlos:

- sobreescriben las reglas de CSS normales, pero no posee una mayor especificidad, por lo tanto las media queries deben estar por debajo de las reglas que quiera reemplazar.

- Deben tener el mismo selector para que reemplace las reglas que deseamos. Como excepcion podemos usar las reglas principales como especificas (background para reemplazar backgroun-color)

- pensar bien los breakpoints

- podemos utilizar un @media para cada selector, o una sola para todos los selectores (recomendada)

- Mobile First!!!!

## mOBILE First
Intentamos desarrollar siempre primero para el movil, y luego para pantallas mas grandes. De esta manera nos aseguramos de que se vea bien en dispositivos mobiles.

[2024]{https://www.browserstack.com/guide/common-screen-resolutions}
- Mobile (55%) 320px - 480px
- Tablets (2%) 768px - 1024px
- desktop (43%) 1024 - 1920px

```css

/* Mobile First*/

/* Tablet */
@media only screen and (min-width: 760px){
    /* reglas para tablets*/
}

/* Desktop*/
@media only screen and (min-width:1024px){
    /* reglas para desktop*/
}
```

# Ejemplo de Media queries en imagenes (usando picture)

```html
<picture>
    <source media="(min-width:659px)" srcser="./img/grande.jpg">
    <source media="(min-width:450px)" srcser="./img/mediana.jpg">
    <img src="./img/foto-pequenia.jpg" alt="Mi mascota">
</picture> 

```

# Media Queries!

## Actividad
- Crear una página web con un diseño responsivo que contenga 3 breakpoints (Mobile, Tablet y Desktop).
- Implementar metodología BEM.
- Utilizar media queries en el CSS para modificar el color de fondo de la página en cada breakpoint.
- Mostrar un título diferente en cada breakpoint.
- Implementar media queries en HTML para mostrar una imágen distinta en cada breakpoint.

## Pasos

1. Crear estructura de carpetas y archivos.
2. Crear un archivo HTML con la maquetación básica.
3. Utilizar la metodología BEM en mi HTML.
4. Crear el CSS de mi diseño principal (Mobile First)
5. Crear media queries en CSS para modificar el diseño en cada breakpoint.


## Opcionales
- transition de color de background
- transition opacidad y visibilidad de títulos
