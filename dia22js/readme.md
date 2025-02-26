## Javascript

Es un lenguaje de programacion de alto nivel, interpretado y orientado a objetos. Lo utilizamos para crear contenido dinamico e interactivos en sitios web.

- Alto nivel: está diseñado para ser facil de leer y escribir por humanos.
- Interpretado: se ejecuta en tiempo real, linea por linea y NO necesita   ser compilado. 

```js
let numero = 1;
console.log("Linea 1 y número vale: ", numero); 
// Imprime en consola el texto  linea 1 y numero vale: 1
numero = numero + 2;
console.log("linea 2 y numero vale: ", numero);
// imprime en consola el texto  Linea 2 y numero vale: 3
```

Orientado a objetos:

Js utiliza un paradigma (OOP - Object Oriented Programming) significa que organiza su codigo en "objetos". Un objeto es una coleccion de `propiedades` (caracteristicas) y `metodos` (funciones) que se pueden leer y manipular.

Perro:
// Propiedades
- color: blanco y negro
- nombre: Lasie
// metodos
- ladran()
- moverCola()

```js
// ejemplo de propiedades y metodos
const alumno = {
    nombre: "Lucia Perez",
    edad: 35,
    saludar: function(){
        console.log("Hola mi nombre es Lucia");
    }
}

// para imprimir el nombre del alumno usamos algo como:
console.log(alumno.nombre);
console.log("me llamo ", alumno.nombre, "y tengo ", alumno.edad, "años");
// Me llamo Lucia Perez y tengo 35 años

// para ejecutar un metodo/funcion tenemos que usar () al final.
alumno.saludar();
```

## Dónde podemos probar/codificsr con JS

- En el navegado: en la pestaña de consola.
- En etiquetas de `<script>` dentro del HTML, Y se sueñen poner al final antes de cerrar el `</body>`
- Se pueden usar archivos externos con la extension `.js` linkeado en nuestro html: <script src="./js/miscript.js"></script>
- Usar extension de VSC --> Quokka para empezar a usar: "command+p" ">Quokka"
- Usar en paginas externas:

1. https://playcode.io/new
2. https://codepen.io
3. https://jsfiddle.net

# Funcionalidades

- Manipulacion de DOM (Document Object Model): agregar, modificar o quitar elementos HTML Y CSS.
- Procesar formularios: Veridicar datos ingresados por el usuario y realizar formularios complejos de multiples secciones.
- Manejo de animaciones: Manipular efectos visuales y animaciones en nuestra web.
- Manejo de eventos: Responder a las acciones del usuario, como por ej: hacer click, mover el mouse, desplazarse por la web...
- Comunicacion asincrona con servidores AJAX/Fetch: enviar o recibir datos de un servidor sin tener que recargar la pagina

## Tipos de datos

- Numeros: enteros, decimales, positivos, negativos, etc.
- Cadenas de textos (strings): textos, palabras, frases, 1 letra. entre comillas simples 'simples' "dobles" p `balticks`.
- Booleanos: verdadero o falso
- Listas de cosas (arrays): se escriben con [] y los items se separan con coma.
- Objetos (Object): Coleccion de propiedades (caracteristicas) y metodos (funcionalidades), y se escriben con { }

```js
// PRIMITIVOS
let texto = "Hola alumnos de CEI";
let textoConComillas = 'Hola estoy muy "bien"';
let textoConComillasDobles "I'm Tomi";
let texto = `quiero comillas 'simples' y "dobles"`; // template string (plantilla)

let numero = 123;
let numero2= "123"; // "123"
numero2 = Number(numero2); // 123

lwt entero = 25; // Numero entero
let decimal = 22.30; // Numero decimal
let negativo = -5;
const PI = 3.14159;

let estaPrendido = false;
let isPrimary = true;
let onActive = false;

//REFERENCIALES

//objeto
const alumno = {
    nombre: "Mario",
    edad: 33,
    isRecibido: false,
    presentarProyecto: function(){
        this.isRecibido = true; //this es para referirse a este objeto (alumno)
        this.edad = 34,
    }, // para tener mas de una funcion se separan con comas
    irseDeVacaciones: function (){...}
}

alumno.edad; //33
alumno.presentarProyecto();// presenta el proyecto

//como escribir en un objeto
alumno.edad = 37;


//Listas o ARRAYS

const alumnoDeDW = ["jhon", "Maria", "Sonia", "Ainhoa"];
const edades = [25, 32, 48, 19];
const listaMixta = [1, "Juan", true, {val1: "hoola", val2: "chau"}];

// las listas comienzan su indice en 0
console.log(alumnosDeDw[0]) // "Jhon"
console.log(alumnosDeDw[1]) // "Maria"
console.log(alumnosDeDw[2]) // "Sonia"

// para escribir un valor en una lista
alumnosDeDw[0]= "Jhon Edwar";
console.log(alumnosDeDw[0]); // "Jhon Edwar"
```

Ejercicio 1: Creación y acceso a arrays
- Crea un array llamado frutas que contenga las siguientes frutas: "Manzana", "Banana", "Naranja".
`let frutas = ["Manzana", "Banana", "Naranja"];`
- Imprime en la consola el primer elemento del array frutas.
`console.log(frutas[0])`
- Cambia el segundo elemento del array frutas a "Mango".
`frutas[1]= "Mango"`
- Imprime en la consola el array completo para verificar el cambio.
`console.log(frutas)`

Ejercicio 2: Creación y acceso a objetos

- Crea un objeto llamado persona con las propiedades nombre (cadena), edad (número) y ciudad (cadena).
```js
const persona = {
  nombre: "Jhon",
  edad: 27,
  ciudad: "Valencia"
}
```
- Imprime en la consola el valor de la propiedad nombre del objeto persona.
- Cambia el valor de la propiedad edad a 30.
- Imprime en la consola el objeto persona completo para verificar el cambio.

Ejercicio 3: Arrays de objetos

- Crea un array llamado estudiantes que contenga tres objetos, cada uno representando a un estudiante con - las propiedades nombre y nota.
```js
const estudiantes = [{ nombre: "Jhon", nota: 100},
                     {  nombre: "Julano", nota: 77},
                     {  nombre: "Sutano", nota: 25}
                    ]                  
```
- Imprime en la consola el nombre del segundo estudiante.
`console.log(estudiantes[1].nombre);`
- Cambia la nota del primer estudiante a 95.
`estudiantes[0].nota = 95;` 
- Utiliza un bucle for para imprimir el nombre y la nota de cada estudiante en la consola.
```js
for( let i = 0; i < estudiantes.length; i++){ 
console.log("Los resultados son: ", ${estudiantes[i].nombre}, ${estudiantes[i].nota})};
```

Ejercicio 4: Métodos en objetos

- Crea un objeto llamado calculadora con las propiedades a y b (números) y un método sumar que retorne la suma de a y b.
```js
let calculadora = { a: 8,
                    b: 10,
                   sumar(){
                    console.log("la suma de a y b dá como resultado: ", this.a + this.b);
                  }         
}
```
- Asigna valores a a y b y llama al método sumar, imprimiendo el resultado en la consola.
```js
calculadora.sumar()
// la suma de a y b dá como resultado:  18 
```

