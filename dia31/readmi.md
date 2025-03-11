# Metodos de Arrays / Listas

## pop()
El metodo `pop()` elimina el ultimo elemento de una array y lo devuelve.
Este metodo modifica la longitud del array.

```js
let frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
let ultimoElemento = frutas.pop();
console.log(frutas); // (4) ["manzana", "naranja", "tomate", "uvas"]
console.log(ultimoElemento); // "bananas"

```

## Push()
El metodo `push()` es uno de los mas comunes y añade uno o mas elementos al final de un array. Me devuelve la nueva longitud del array.

```js
let frutas = ["manzana", "naranja"];
let nuevaLongitud = frutas.push("pera","tomate");
console.log(frutas); // (4) ["manzana", "naranja", "pera","tomate"]
console.log(nuevaLongitud); // 4

```

## Shift()
El metodo `shift()` elimina el primer elemento del array y lo devuelve. Este metodo modifica la longitud del array.

```js
let frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"]
let elementoQuitado = frutas.shift();
console.log(frutas); // (3) ["naranja", "tomate", "uvas" "bananas"]
console.log(nuevaLongitud); // "manzana"

```

## Unshift()
Con el metodo`unshift()` podemos añadir uno o mas elementos al inicio del array. Devuelve la nueva longitud del array.

```js
let frutas = ["manzana", "naranja"]
let nuevaLongitud = frutas.unshift("pera", "ciruela");
console.log(frutas); // (5) ["pera", "ciruela", "manzana", "naranja"]
console.log(nuevaLongitud); // 5

```

## Splice()
El metodo `splice()` cambia el contenido de un array eliminando, creando o reemplazando sus elementos. Modifica el valor original y recibe 3 parametros. Devuelve los elementos eliminados.

- el indice del vectos donde se va realizar la operacion
- La cantidad de elementos a eliminar
- los elementos que quiero agregar

```js
const frutas = ["manzana", "naranja", "tomate", "uvas", "bananas"];
let frutasEliminadas = frutas.splice(2, 2, "pera", "ciruela");
console.log(frutas); //["manzana", "naranja", "pera", "ciruela" "bananas"];
console.log(frutasEliminadas); // ["tomate", "uvas"]
```

ejercicio de splice:

```js
let lenguajes = ["python", "java", "javascript", "php", "C++", "c#"];
lenguajes.splice(0,1); // "python" METODO SHIFT PORQUE QUITA EL PRIMERO
lenguajes.splice(-1,1); // "C#"  METODO POP PORQUE QUITA EL ULTIMO
lenguajes.splice(-1,0, "c", "cobol"); // SE POSICIONA AL FINAL, NO BORRA NADA Y AGREGA "C" Y "COBOL"

// quitar 2 elementos a partir del indice 2
lenguaje.splice(2,2);

```

## ForEach

recorre cada elemento de una lista, y ejecuta la funcion indicada dentro del mismo

```js
["a", "b", "c"].forEach((letra)=>{
    console.log(letra);
})
```

## Map
Devolver el doble de cada elemetno:

```js

//OPTIMIZACION DE METODOS DE ARRAY
const listaNumeros = [5,15,7];
// metodo largo
const numeroDoble = listaNumeros.map( (num) =>{
     return num*2
     });
     
     // metodo corto SOLO SI TIENE UNA SOLA LINEA Y ES RETURN
const numeroDoble = listaNumeros.map( num => num*2)
console.log(numeroDoble); // [10, 30, 14]
```

## Buscar item
El metodo `find()`devuelve el PRIMER elemento del array que cumpla la funcion de prueba proporcionada. En caso contrario devuelve undefined.

```js
const numeros = [5,12,8,130,44,12];
const item = numeros.find( num => num>10 )
console.log(item); //12
```
## Buscar multiples items
## Filter()
La funcion `filter()`devuelve un array con TODOS los ELEMENTOS que cumplan la condicion especificada

```JS
const numeros = [5,12,8,130,44,12];
const listItems = numeros.filter( num => num <10;)
console.log(listaItems);// [12,130,44,12]


const personas = [
    {nombre: "juan", edad:33},
    {nombre: "ana", edad:15},
    {nombre: "luis", edad:9},
    {nombre: "maria", edad:30},
];
// obtener una lista de las persona mayores de edad
const mayores = personas.filter( persona => persona.edad >= 18);
console.log(mayores )
```

1. De una lista de numeros devolver solo los impares
```js
const numeros =[2,5,8,4,6,1,9,33,50,77,7];
const impares = numeros.filter(numero => numero % 2 !== 0);
console.log(impares); // (6) [5, 1, 9, 33, 77, 7]
```

2. de una lista de objetos de personas imprimir su nombre.

```js
const personajes = [
    {nombre: "juan", edad:33},
    {nombre: "pedro", edad:18},
    {nombre: "maria", edad:30},
]
const nombres = personajes.map(persona =>persona.nombre);
console.log(nombres);
```
3. encuentra un libro con el titulo especifico (buscar "la odisea")
```js
const libros = [
    {titulo: "el quijote", autor: "miguel de Cervantes"},
    {titulo: "Cien años de soledad", autor: "gabriel garcia marquez"},
    {titulo: "La odisea", autor: "homero"},
];

let buscador = libros.find(libro => libro.titulo.toLowerCase()== "la odisea" || libro.titulo.toUpperCase()== "la Odisea");
console.log(buscador)
```
3b. Usar los metodos de string para busquedad parciales "cien años"

4. dado una lista de numeros desordenados, ordenar de menor a mayor 
(investigar)
## funcion sort()
convierte los números en strings y los ordena alfabéticamente
```js

const numeros = [42, 7, 19, 3, 88, 23, 56, 12, 91, 5];
const orden = numeros.sort((a, b) => a-b);
console.log(orden)// (10) [3, 5, 7, 12, 19, 23, 42, 56, 88, 91]