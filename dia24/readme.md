# Bucles

Bucle para imprimir numeros del 1 al 10
los bucles FOR se dividen en 3 partes
1. iniciar una variable (normalmente i)
2. Crear una condicion para esa variable (ej: i<10)
3. aplicar un cambio a esa variable cada iteracion (ej i++)

```js
// imprimir numeros del 1 al 10
for (let i=10; i>0; i--){
    console.log("numero :",i) // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
}

```

# Funciones

seccion de codigo reutilizable.

```js
// parte 1: crear la funcion
function saludar(){
    console.log("Hola como andan")
}
// parte 2: usar la funcion desde donde querramos
// entra juan
saludar();
// entra Maria
saludar();
//entra el profe
for(i=0;i<2; i++){
    saludar();
}


let num1 =10;
let num2 =20
```