# PARALLAX

Uso para parallax con CSS:

```CSS
.parallax{
    background-image: urul('imagen.jpg');
    height:500px;
    background-attachment:fixed;
background-position:center;
background-repeat:no-repeat;
background-size: cover;
    
}

```

Uso de parallax con JS:

```JS
window.addEventListener("scrol", ()=>{
    //mostrar cuanto he escrolleado
    console.log("scroll y:", window)
})

```

## prefers-reduce-motion media query

Los usuarios pueden activar en sus dispositivos las preferencia de reduce motion.
- win:      config->accesibilidad->mostrar animaciones en windows
- Mac:      pref sistema .> accesibilidad -> movimiento -> reducir movimiento
- iOS:      config -> accesibilidad -> movimiento -> reducir movimiento
- Androir : config -> accesibilidad -> eliminar animaciones

Para CSS usamos media queries
```css
@media (prefers-reduced-motion: reduce){
    .parallax{
        background-attachment:scroll;
    }
}

```

para JS usamos windows.matchMedia
```js
if(window.matchMedia(`(prefers-reduced-motion:reduce)`).matches){
    // no aplicar efectos
}else{
    //aplicar efectos de parallax
}

```