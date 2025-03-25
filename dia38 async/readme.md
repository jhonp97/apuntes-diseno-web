# Async / Await

La desventaja de las promesas es que se vuelven dificiles de entendercuando se anidan. Por eso se desarrollo `async / await`.
Es mas facil de leer y entender que las promesas con callbacks.

## Ventajas
- Legibilidad: se parece mas al codigo sincrono tradicional, lo que facilita el seguimiento del flujo de ejecucion.
- Manejo de errores con el uso de `try / catch` para manejar errores.
-  Evitar "callback hell": ayuda a evitar ela anidamiento excesivo de callbacks. 

```js
//  codigo utilizando async await
async function traerDatos(){

    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await response.json();

    console.log(datos);
    console.log(datos[0]); //  los datos del 1er usuario

    // simulamos un segundo request trayendo los post del usuario
    const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${datos[0].id}`);
    const datosPost = await responsePost.json();

    } catch (error){
        console.log("tuvimos un error: ", error);
    }

}



// segunda forma de funcion async
const traerDatos = async ()=> {

}
```


```js
console.log(" 1) solicitar al camarero un plato de ensalada de atún");
pedirPlato("ensalada de atún");
console.log("3) la persona se toma el vaso de agua");
function pedirPlato(plato) {
    console.log("2) el camarero va a buscar el plato de comida: ", plato);
    fetch("http://restaurante.com/api/traerPlato")
        .then(response => response.json())
        .then(datos => {
            console.log("Paso 4: El camarero lleva el plato de :", datos.plato);
console.log("Paso 5: El comensal se come su comida");
        })
        .catch(error => {
            console.log("No tenemos mas atún, lo siento");
        });
}

console.log(" 1) solicitar al camarero un plato de ensalada de atún");
pedirPlato("ensalada de atún");
console.log("3) la persona se toma el vaso de agua");

async function pedirPlato(plato){
        console.log("2) el camarero va a buscar el plato de comida: ", plato);

    try{
        const buscarPlato = await fetch(`"http://restaurante.com/api/traerPlato" ${plato}`);
        const comida =  await buscarPlato.json();
        console.log("Paso 4: El camarero lleva el plato de :",comida.plato);
        console.log("Paso 5: El comensal se come su comida");

    } catch (error){
        console.log("No tenemos mas comida, lo siento", error);
    }
}

```