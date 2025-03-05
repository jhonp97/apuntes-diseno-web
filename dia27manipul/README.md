# Manipulacion de textos

1. Concatenación
```js
const nombre="Lucia";
const apellido ="Perez";

const nombreCompleto= nombre+" " +apellido;//Lucia Perez

// concatenar usando +=
let saludo = "hola, ";
saludo +="¿Cómo estas?";
console.log(saludo);// Hola, ¿cómo estas?
```

2. Interpolacion

Cuando usamos plantillas litearles (`template literals` / template strings), se pueden insertar `variables` o `expresiones` dentro de una cadena de texto usando `${}`.

```js
let nombre = "Ana";
let edad = 25;

//interpolacion
let mensaje =`Hola mi nombre es ${nombre} y tengo ${edad} años.` 

// insertar expresion
const total =50;
const iva=0.21;
console.log(`El total con impuestos es ${total + (total*iva)}` );

const texto ="El total con impuestos"
["E","L", " " "t", "o", "t", "a", "l",....]
```

3. Métodos de Strings

JS nos ofrece multiples metodos/funciones para manipular cadenas de texto.

- `toIpperCase()` y `toLowerCase()`
Convierte todas las letras de una cadena en mayusculas o minusculas.

- `split()` 
Divide una cadena de texto en una lista/array basada en el separador elegido

- `slice()`
Extraer una porcion de la cadena basada en indices de inicio y fin (sin incluir el indice final)

- `replace()` y `replaceAll()` 
Reemplaza una parte de la cadena por otra ( la primer ocurrencia).
Soporta expresiones regulares (regex) para potenciar la busqueda.

- `trim()`
Eliminar todos los espacios en blanco al inicio y al fin de la cadena. 

- `includes()`
Verifica si una cadena contiene una subcadena especifica.

- `startsWith()` y `endsWith()`
Verifica si una cadena comienza o termina con una subcadena especifica.

- `repeat()`
Repite un mumerp especifico de veces. 

```js
let texto =" Me encanta JS";

//toUpperCase() , toLoweCase()
console.log(texto.toLoweCase()); // me encanta js
console.log(texto.toUpperCase()); // ME ENCANTA JS


// Split
const palabras=texto.split(" ");
console.log(palabras); // ["Me", "encanta", "JS"]
const palabras2= texto.split(" encanta ");
console.log(palabras2);//["Me", "JS"];
const email="jhon@alumnos.cei.es";
console.log(separacion); // ["jhon", "alumnos.cei.es"];


// Slice
let frase= "aprender javascript es divertido";
console.log("Parte de la frase: ", frase.slice(9.19)); // javascript
console.log("desde el indice 9 al final: ", frase.slice(9)); // javascript es divertido


// Replace
let frase="Hola mundo. hola hola hola hola universo";
console.log("reemplazar 'hola' por 'Hola': ", frase.replace("hola", "Hola")); // cambia la primera que encuentre
console.log("reemplazar 'hola' por 'Hola': ", frase.replaceAll("hola", "HOLA")); // cambia todos "hola" por "HOLA"

// trim()
let frase = "      Hola mi nombre es Luka      ";
console.log(frase.trim()); // "Hola mi nombre es Luka"

// includes
let frase = "El sol brilla en el cielo";
console.log("contiene 'sol'?"+ frase.includes("sol"));// true
console.log("contiene 'luna'?"+ frase.includes("luna"));// false


// startsWith y endsWith
let frase ="Javascript es genial";
console.log("¿empieza con 'Java': ", frase.startWith("Java"));//true
console.log("¿empieza con 'Java': ", frase.startWith("java"));//false
console.log("¿Termina con 'genial'?: ", frase.endswith("genial")); //True


//Repeat()
let risa="Ja";
console.log("Me causa mucha gracias: " risa.repeat(3))// JaJaJa

let frase="HolaComo Andan?";
console.log(frase.length); //15
```

Podemos combinar los metodos 

```js
let frase="   No me gusta Javascript en diseño web       ";

//trim(), toUpperCase(), replace()
let resultado =frase.trim()// elimina espacios delante y detras
                    .replace("No me gusta", "me encanta") //reemplaza palabras
                    .toUpperCase(); //lo pone todo en mayuscula
                    

resultado; // ME ENCANTA JAVASCRIPT EN DISEÑO WEB


```