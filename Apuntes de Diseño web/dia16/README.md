# BEM (BLOCK, ELEMENT MODIFIER)

# Suite CSS

- Block ---> componente
- Element ---> Elemento
- Modifier --> Modificador

Nuevos
- Utilities
- Estados (on/off)

## Utilities

- Se escribe con `u-utilitiyName`por ejemplo `u-red`
- se escribe con u- camelCase
- Se utiliza para aplicar un estilo a cualquier elemento

```css
.u-red{
    background-color:red;
    color:white;
}

.u-big{
    font-size:5rem;
}
/* utilities responsive */
.u-sm-text{
    /* texto pequeño (small)*/
}

.u-md-text{
    /* texto mediano (medium)*/
}

.u-lg-text{
    /* texto grande (large) */
}
```

# Componente

Igual al bloque de BEM, pero se escribe con PascalCase. Por ejemplo `Header`, `MiBoton`, `SeccionHero`  `Card` `Tweet`

# Elementos (Part, descendentName)

Igual que el elemento en BEM, pero se escribe con camelCase. por ejemplo `Header-title`, `Card-imageFront` `Tweet-bodyImage`, `Tweet-bodyText`


```html
<article class="Tweet">
    <header class="Tweet-header">
        <img src="./img/mi-foto.png" alt="">
        ...
    </header>
    <div class="Tweet-bodyText">
        ...
    </div>
</article>
```

## Modificadores

Al igual que en BEM, y se utiliza `componente--nombreModificador`

```html
<button class="Button">Boton normal</button>
<button class="Button Button--navidad">Boton de Navidad</button>
```

## Estados 

Nuevo: Clases para elementos que marcan el estado denun componente/elemento. Se escribe con camelCase y usa la palabra `is-`delante.

```css
.Tweet{
/* Estilos de un tweet comun */
}
.Tweet.is-expanded{
/* Solo cambios para el tweet abierto*/
}

```

```html
<article class="Tweet">
    ...
</article>
<article class="Tweet is-expanded">
    ...
</article>
```


# Grid continuacion (2/2)

Existe la opcion minmax() que nos permite definir un tamaño minimo y maximo para las columnas y filas.

```css
.container{
    display:grid;
    grid-template-columns: minmax(100px, 1fr) minmax(200px, 2fr) minmax(100px, 1fr);
    grid-template-rows: 100px 100px 100px;
    grid-gap:10px
}
```

# Grid Template Areas

Podemos nombrar las celdas utilizando `grid-templates-areas`y asignando un nombre a cada uno:

```css
.container{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows:repeat(3, 100px);
    grid-gap:10px;
    grid-template-areas:
    "header     header      header"
    "main       main        sidebar"
    "footer     footer      footer";
}

.item-1{
    grid-area: header;
}

.item-2{
    grid-area: main;
}

.item-3{
    grid-area:sidebar;
}

.item-4{
    grid-area:footer;
}
```

Podemos utilizar `justify-items` y `align-items`para alinear los elementos dentro de las celdas. sus opciones posibles son: start, end, center y baseline. Por defecto se aplica stretch.

```css
.container{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows:repeat(3, 100px);
    grid-gap:10px;
    justify-items:start;
    align-items:end;
}
```

Podemos decirle a un item especifico que se alinee de manera diferente utilizando `justify-self`y `align-self`.
sus opciones son start, end, center, stretch y baseline.

```css
.item-1{
    justify-self:center;
    align-self:stretch;
}

```

Podemos alinear nuestro grid en base a su contenedor utilizando `justify-content` y `align-content`. Sus opcines son start, end, center, stretch, space-around, space-between, space-evenly.

```css
.container{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows:repeat(3, 100px);
    grid-gap:10px;
    justify-content:center;
    align-content:center;
}
```

Podemos crear un grid responsive con el uso de `auto-fit`. esto nos permite que los elementos se ajusten al tamaño del contenedor.

```css
.container{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows:  repeat(4, 1fr);
    grid-gap:10px;
}
```