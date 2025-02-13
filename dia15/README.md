# CSS GRID

Grid es un sistema de maquetacion bidimensional para crear interfaces y layouts tipo tablas.
Se compone de filas y columnas, y se pueden anidar unos de otros.
Se pueden crear layouts complejos con muy pocas lineas de codigo.

- Nos sirve para crear layouts.
- No es opuesto a Flex, se pueden combinas entre ellos.
- Grid si sustituye a las <tables> para el armado de layouts.

Utilizamos `dispaly:grid` para crear in grid y un `grid-template-columns:`y `grid-template-rows`para definir el numero de columnas y filas.

```css
/* layout de 3x3*/
.container{
    display:grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
}
```

Pueden visualizar el layout de GRID desde la consola de chrome.

Podemos indicar a cada item, donde posicionarlo usando grid-row-start, grid-row-end, grid-column-start y grid-column-end, teniendo en cuenta que las filas y columnas empiezan en 1 (no en 0)

Si queremos que ocupe 3 columnas y una fila, debemos indicar que comience en la col 1, y termine en la col 4. Y que la fila comience en la 1 y termine en la 2
```css
.item-1{
    grid-column-start:1;
    grid-column-end:4;
    grid-row-start: 1;
    grid-row-end:2;
}
```

Se pueden invertir el start y el end y funcionaran igual.
```css
.item-1{
    grid-column-start:4;
    grid-column-end:1;
    grid-row-start: 2;
    grid-row-end:1;
}
```

Se pueden utilizar valores negativos para seleccionar elementos desde el final del grid.
```css
.item-1{
    grid-column-start:1;
    grid-column-end:-1;
    grid-row-start: 1;
    grid-row-end:-1;
}
```

En vez de seleccionar la fila/columna de destino, podemos usar span para indicar cuantas filas/columnas queremos que ocupe un item
```css
/* item de 3 col y 1 fila */
.item-1{
    grid-column-start:1;
    grid-column-end:span 2; /* se amplia 1 bloque mas*/
    grid-row-start: 1;
    grid-row-end:span 3; /* se amplia 2 bloque mas*/
}
```

Para reducir grid-column-start y grid-column-end en una sola linea, podemos usar `grid-column`. Lo mismo con `grid-row`
```css
/
.item-2{
    grid-column: 1 / 3; /* col start / end*/
    grid-row: 2 / 4;    /* row start / end*/
}
```

Podemos uitilizar una forma aun mas corta utilizando `grid-area`donde definimos grid-row-start, grid-column-end, grid-row-start y grid-column-end

```css

.item-2{
    grid-area: 1/ 1/ 4 / 4;
}
```

Con GRID es muy simple crear un elemento por encima de otro,

Podemos utilizar en el container `grid-gap` para definir un espacion entre las columnas y filas. El mismo soporta un valor para fila y columna, o podemos poner dos valores para diferenciarlos.

```css
/* layout de 3x3*/
.container{
    display:grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px 100px;
    grid-gap:10px; /* separacion entre filas y columnas*/
    grid-gap: 1em 3em; /* separacion independiente para filas y columnas*/
}
```


Existe la opcion de repeat() que nos permite repetir en numero de veces que quiero para una fila o columna
```css
/* layout de 3x3*/
.container{
    display:grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 3em);
    grid-gap:10px; /* separacion entre filas y columnas*/
    
}
```

Si agregamos mas bloques dentro de nuestro grid, se intentará ubicarlo en la primer posicion libre disponible, si no quedan posiciones libres, se creará una nueva fila. Esta nuevas celdas no tendrán el tamaño asignado en nuestro grid-template, y a se llaman "grid-implicitas". Podemos usar ``grid-auto-rows:100px`` para definir el tamaño de nuestras nuevas filas
```css
/* layout de 3x3*/
.container{
    display:grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 3em);
    grid-gap:10px; /* separacion entre filas y columnas*/
    grid-auto-rows: 100px;
    
}
```

Tambien existe el `grid-auto-flow` que nos permite definir si las nuevas celdas se crearán como filas o columnas.
```css
/* layout de 3x3*/
.container{
    display:grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 3em);
    grid-gap:10px; /* separacion entre filas y columnas*/
    grid-auto-rows: 100px;
    grid-auto-flow: column;
    
}
```



Las unidades que podemos utilizar son px, %, em, rem, pero se les suma una nueva de valor fraccional o fr. Este valor nos permite fraccionar el tamaño disponible.

por ejemplo, si tebnemos 3 columnas y definimos que la primer columna tenga una tamaño de un 1fr, la segunda de 2fr y la tercrea de 1fr, la segunda columna ocupará el doble de espacio que las otras dos.
```css
/* layout col del medio ocupa 2x*/
.container{
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(3, 3em);
    grid-gap:10px; 
    
}
```
