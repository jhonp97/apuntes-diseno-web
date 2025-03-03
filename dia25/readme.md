## Operadores OR y AND

```js

const edad =25;

// para que cumpla ambas opciones usar &&
if(edad <= 120 && edad >=18){
    console.log("eres mayor");
}

// para que cumpla alguna de las 2 opcines usar || or
if(edad>=18 || tiene permiso == true){
    console.log("puedes entrar");
}
```

## Forma de escribir funciones

```js

// Esta funcion tiene dos parametros y devuelve la suma de ambos
function sumar (num1, num2){
    return num1 +num2;
}

// Este llamado a la funcion envía como "argumento" 2 numeros
sumar(2,3);


// Función sin nombrar
const sumar = function (num1, num2){
    return num1
    num2
}



// funcion flecha
const sumar = (num1,num2)=>{
    retun num1+num2;
}

// funcion flecha reducida
// solo se puede usar si el codigo tiene una sola linea
const sumar = (num1, num2)=> num1+num2;



const alumno = {
    nombre:"juan",
    edad: 34,
    //sumar: function hacer suma (num1, num2){
      //  return num1 + num2;
    //},
    sumar: (num1, num20)=> num1+num2
    }
alumno.sumar(3+1);

miBoton.addEventListener("click"), ()=> {
    console.log("me hicieron click")
}

```

## Truthy / Falsy

En JS podemos tener un valor truthy o Falsy. Un valor Truthy es aquel que se evalúa como verdadero en un contexto boolenao, mientras que falsy se evalua como falso.
Podemos utilizar este concepto para la toma de decisiones en nuestro codigo.

Valores Falsy: `undifined, null, NaN, 0, "", y false`
Valores truthy: todos los demas.

Ejemplos de valores que parecen falsy, pero que son truthy:
```js
// son todos TRUTHY!!!
const val="false";
const val =-1;
const val = " "; // TIENE UN ESPACIO ES TRUTHY
const val =0.1;
cons val ="0";
const val ="nul";
const val ="undifenided"
```

```JS
edad=19;
if(edad>18){
    //truthy
}else{
    //falsy
}

let numero = 16;
if(numero%2 ==0){
    //ttruthy: es par
}else{
    // falsy: es impar
}
```