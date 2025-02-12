# Unidades de medidas en CSS: px, %, em, rem

## Pixel

Son unidades absolutas que representan unidades en pantalla. Son ideales para tamaños y dimensiones precisos que no deben cambiar en relacion con otros elementos.
Es recomendable usarlo para bordes, imagenes y otros elementos de dimension fija.

## Porcentaje "%"

Es una unidad relativa al tamaño del elemento padre. Ej: el padre es de 200px y el elemento tiene un width de 50%, el ancho del objeto será de 100px.
Esta medida es util para diseños fluidos y responsive que se adapten al tamaño de pantalla. Es recomendable para contenedores que varien segun su contenedor

## Em "em"

La unida "em" es tambien relativa al tamaño de la fuente del elemento padre (o al suyo). Por ejemplo si el padre tiene un `font-size:10px`, y un `margin:3em`el margen será de 30px.
Esta unidad es util para crear tamaños de texto y margenes que escalen con el tamaño de la fuente. 
Esto mejora la accesibilidad y la flexibilidad del diseño.
Por defecto los navegadores asignan el font-size inicial a 16px.

```css
.card{
    font-size:16px; /*16px*/
    padding:1.5em;  /*16px*/
}
```

## REM (Root EM)

Es relativa al tamaño de la fuente de la RAIZ del elemento
(normalmente es <html>). Por ejemplo, si el tamaño de la fuente del HTML es de 8px, y un elemento descendente en varios niveles tiene una medida de "3rem" su medida será de: "24px".
Rem es util para mantener una escala consistente en todo el documento, independientemente de la estructura del DOM. Es recomendable usar REM para tamaños globales, como el tamaño principal y los margenes, para garantizar coherencia en todo el sitio.

```css
html{
    font-size:16px;
}

.card{
    font-size:2em; /* 32px*/
}

.card__title{
    /*El REM ignora el font-size de .card*/
    margin: 1rem; /*16 px*/
}
```