
## Variables referenciales vs primitivas

Primitivas es la cubeta donde guardamos algun dato. `Strings, NUmeros, booleanos` y otros...Estos pueden ser siempre `let`o `const` 
Referencial es la llave del camion (no el camion), donde guardamos muchos datos. `Objetos, arrays, funciones`. Estos son siempre `const`

```js
const num = 25;
num = 30 // ERROR!!! no se puede modificsr una constante

const alumnos=["juan", "maria", "pedro"];
alumnos[0]="Tomas"; // OK! se puede modificar el contenido de un array.

```

## Comentarios en JS

- Comentarios simple: se utiliza `//`para una sola linea
- Comentario simple en linea: puede usarse `//`al final de la linea
- Comentarios en bloque: `/*....*/`para hacer comentarios de multiples lineas.
- Comentario de documentación: se utiliza `/**......*/`para iniciar un bloque informativo. Se usa mucho para funciones.

```js
// 1 sola linea
let nombre="Juan"; // 1 sola linea al final
/*
soy un comentario
multilinea

ASCI
https://patorjk.com/software/taag/#p=display&f=Slant%20Relief&t=Jhon
https://fsymbols.com/es/arte-de-texto/
*/

/**
 *  Esta es una funcion que suma dos numeros
 *
 * @param {number} num1 - el primer numero
 * @param {number} num2 - es el segundo numero
 * @return {number} la suma de num1 y num2
 * 
 * */
function sumar(num1 + num2){
    return num1+num2
}
```

# Operadores artimeticos

Tenemos operadores de asigancion, comparacion, logicos.

los aritmeticos mas comunes son:

- suma "+": suma 2 valores
- Resta "-"; resta 2 valores
- Incrementar un valor "++": incrementar el valor de una variable
- Decrementar un valo "--": decrementa el valor de una variable
- multiplicacion "*"
- division "/"
- modulo "%": el resto de la division de 2 valores.

```js
let a =10;
let b= 5,

let suma = a+b; // 15
let resta = a-b; //5
let multi= a*b; // 50
let divi = a/b;  // 2
let modulo =a%b;  // 0
a++; //11 incrementa a en 1
b--; //4 decrementa b en 1


let a = 5;
let b = 10;
let c = " 5 ";


// SIMBOLOS COMPARATIVOS
=== // SI SON IGUALES ESTRICTAMENTE (el mismo valor y el mismo tipo)
!== // si no son estrictamente iguales
== // PARA VER SI SON IGUALES
!= // PARA VER SI SON DISTINTOS
< //PARA VER SI ES MENOR
> // PARA VER SI ES MAYOR
<= // SI ES MENOR O IGUAL QUE...
>= // SI ES MAYOR O IGUAL QUE...


if(a !=b){
    // se hace esto.
}else 
//se hace esto otro..


```

