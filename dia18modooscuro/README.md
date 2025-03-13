# Transitions CSS

Es una forma de cambiar los valores de una o mas propiedades de manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepten valores numericos.
por ej: width, height, padding, color, background-color, opacity, etc.

Prop numericas:
- don-size
- margin
- border-width
- transform (scale, rotate, translate, etc)

prop color:
- Background-color
- color
- border-color
- box-shadow

## Como se define

Utilizamos la propiedad transition y se puede personalizar de la siguiente manera:

-`transition-property`: nos indica la propiedad a animar.
- `transition-duration`: duracion de la animacion (en seg)
- `transition-timing-function`: La manera en que se va a llevar a cabo la animacion.
- `transition-delay`: demora antes de iniciar la transicion.  

```css
div{
transition-property: font-size;
transition-duration: 4s;
transition-timing-function: ease-in-out;
transition-delay: 2s;
/* podemos unificar estas 4 reglas en una sola*/
/*  prop duration timing-function delay */
transition: font-size 4s ease-in-out 2s;
}
```

## Timing Functions

- `ease` : velocidad lenta - rapida - lenta (por defecto)
- `linear`: velocidad constante
- `ease-in`: empieza lento y se hace rapido
- `ease-out`: rapida-lento
- `ease-in-out`: lento-rapido-lento (mas brusca)
- `cubic-bezier()`: timing personalizado  (https://cubic-bezier.com/#.92,.04,.14,.89)