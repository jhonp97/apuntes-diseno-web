# Local Storage

Sirve para almacenar info en nuestro navegador.
la informacion se guarda segun el dominio.
Solo guarda STRINGS (textos), si quiero guardar Arrays, u objetos, utilizamos JSON. Para ello usamos "`JSON.stringify(nuestraLista);`"  Y para volver a tener nuestros datos en JS, usamos `JSON.parse(nuestroString);`


```js
localStorage.setItem("edad",25); /

localStorage.getItem("edad"); // "25" <--- texto

```

Para que se usa:
- Guardar preferencias del usuario: "modo oscuro/claro!, tamaño de fuente, si la barra lateral esta abierta.
- Recordar las decisiones del ususario, por ejemplo si ya acepto o no un mensaje de bienvenida.
- almacenar datos sin necesidad de un servidor. Por ejemplo carritos de compra

```js
// catalogo.html
const productos = ["producto 1", "producto 2", "producto 25"];
productos.push("producto 4")
const textoAGuardar = JSON.stringify(productos); // convierto a mi array a un string
localStorage.setItem("listDeProductos", textoAGuardar);


// checkout.html
const textoProductos = localStorage.getItem("listDeProductos");
const listaProductos =JSON.parse(textoProductos);
```


# SetTimeout

``` js
//version de funcion externa
let sumar = ()=>{

}
 const idTimeout =setTimeout(sumar, 2000);

// version de una sola linea
 const idTimeout =setTimeout(()=>{

},2000);

// quitar el timeout
clearTimeout(idTimeout)


```


# SetInterval
```js
const idInterval = setInterval(sumar,2000);

clearInterval(idInterval);

```
