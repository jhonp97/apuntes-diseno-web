## Operacion ternaria

Una forma de reescribir el `if....else` se componen de tres partes: 
1. Una expresion que se eevalua.
2. expresion que se ejecita en caso de ser cierta
3. expresion que se ejecuta en caso de ser falsa

Simplifica la legibilidad, pero no se recomienda para anidar operaciones ternarias o cuando el resultado de la operacion es muy complejo o posee mas d euna linea.

```js
let numero =10;
let mensaje;
if(numero %2 ==0){
    mensaje ="es par";
}else {
    mensaje ="es impar";
}

// version ternaria:
let mensaje = (numero%2===0)?"es par"  : "es impar";

if(edad >=18){
    mensaje = "es mayor de edad";
}else {
    mensaje="es menor de edad"
}

mensaje = (edad>=18)?"es mayor de edad" : "es menor de edad"
```
    No se puede utilizar ternarias si no tengo el "else... o si tengo mas de una linea.

```js

// funcion que recibe dos numeros y devuelve el mayor
function mayor(num1, num2){
    return(num1>num2){
        return num1;
    }else{
        return num2
    }
// ternario
function mayor (num1, num2){
    return(num1>num2)? num1 : num2;
}
mayor(5,8);
```     

Crear una funcion que reciba 2 parametros (jugador1 y jugador2), y que devuelva si el jugador1 le gana al jugador2 en piedra papel o tijera.

```js

 

function juego(jugador1, jugador2){
    if(jugador1===jugador2){
        return "juego empatado";
    }else if(
        jugador1 == "piedra" && jugador2=="tijera" ||
        jugador1 == "tijera" && jugador2=="papel" ||
        jugador1== "papel" && jugador2=="piedra"){
            return `jugador1 saca ${jugador1} y le gana a jugador2 con ${jugador2}`; 
        }else{
            return `jugador2 saca ${jugador2} y le gana a jugador1 con ${jugador1}`
        }
        
    };
    juego(piedra, papel);
```

## recorrer arrays/listas

### ForEach

-Recorrer cada item de un array, y ejecuta una funcion dentro del mismo.
Se le asigna una variable a cada item.
ejemplo:
    listaAlumnos ---> alumno
    listaLetras ----> letra
    listaHobbies ----> hobbie

```js

// con for
for(i=0 <letras.length; i++){
    const letra = letras[i];
    console.log(letra);
}


// con forEach
const letras = ["a", "b", "c"];
letras.forEach((letra)=>{
    letra =letra.toUpperCase();
    if(letra=="A"){
        console.log(letra); / A
    }
    
})

```

### Modificar elementos con un forEach

Si queremos usar el indice podemos leerlo agregando un segundo parametro a nuestra funcion flecha.

```js
const listaLetras = ["a", "b", "c"];

letras.forEach((letra, indice)=>{
    console.log(letra, indice); 
    listaLetras[indice] =letra.toUpperCase();
})

console.log(listaLetras); // (3) ["A", "B", "C"]

```

### Map

Si deseamos generar una copia de la lista, podemos utilizar el metodo map(), quien crea un nuevo array con los resultados de la funcion flecha

```js
const listaNumeros = [ 1, 2, 3, 4, 5];

listaNumeros.map((=>{ }));

const nuevaLista = listaNumeros.map((numero)=>{
    return numero*2;
})

console.log(listaNumeros); //(5) [1, 2, 3, 4, 5]
console.log(nuevaLista); // (5) [2, 4, 6, 8, 10]

```


