# dia 32
## Listeners para eventos del usuario

Son funciones que se ejecutan en respuesta a eventos especificos que ocurren en el DOM, como por ejemplo clicks, movimientos del mouse, teclas presionadas, teclas levantadas, etc.Para agregar un evento usamos `addEventListener(evento, función)`

```js
const boton =

```

## Pasar parametros a funciones con eventos

A veces necesiyamos enviar parametro adicionales a la funcion que maneja el evento

```js
boton.addEventListener("click" , function(){
    miFuncion("tomi");
})
// ejecutar la funcion sin usar parametro
boton.addEventListener("click", miFuncion );
// ejecitar la funcion enviando parametro, la debo meter dentro de la funcion flecha
boton.addEventListener("click" ()=>miFuncion("maria"));

function miFuncion(usuario){
    console.log(`HOLA ${usuario}`);
}

```

ejercicio:

1. Cambiar el color de un elemento al hacerle click:
Crear dos botones (rojo y azul) que cambie el color de fondo de un bloque, al hacerle click. la funcion de cambiar de color tiene que ser la misma
2. Mensaje al pasar el mouse:
Crear un elemento que muestre un mensaje cuando el raton pase por encima de él.


### Paramero "e" (event/evento)

Es un objeto que contiene informacion sobre el evento ocurrido. Este se pasa automaticamente a la funcion que maneja el evento.

```js
function handleClick(e){
    console.log("El boton ha sido clickeado");
    console.log("Coordenadas del nouse; ", e.clientX, e.clientY);
}
boton.addEventListener("click", handleClick);

``` 

Ejercicio 3:
formulario de entrada:
Crear un formulario que valide la entrada de un usuario, y muestre en pantalla si la entrada no es valida.