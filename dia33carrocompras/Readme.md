# Actividad music player

1. Crear un array con 5 canciones, recorrer el array y mostrar en consola cada canción.
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
2. Crear un array con 5 artistas, cada artista corresponderá a su cancion.

3. Mostrar en HTML un div para cada cancion y artist GENERADO CON js

4. Crear un boton con el texto "tema 3" que al hacer click muestre en consola el nombre de la cancion y el artista en la posicion 2.

5. agregar botones de siguiente anterior play y pause con ids unico, y agregar el siguiente JS a cada uno y explicar que hace ese codigo.

```js
document.addEventListener("click", (e)=>{
    console.log(event.targer.id);
})
```


6. Agregar in atributo ID a cada elemento generado en el punto 3, y hacer que al hacer click en cada DIV muestre en consola el nombre de la cancion y el artista.
7. Actualizar el punto anterior para mostrar en el HTML un parrafo con el nombre de la cancion y el artista al que le hicieron click

8. Agregar un array con imagenes para cada cancion

9. Darle la funcion necesaria a los botones de siguiente/ anterior para que pase de cancion  mostrando su correspondiemte HTML

10. Convertir los 3 arrays en un array de objetos, y que el programa siga funcionando.