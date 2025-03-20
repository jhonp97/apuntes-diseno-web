
const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");
const containerCanciones = document.getElementById("containerCanciones");


 let idCancionActual =0;

 // posicion de la cancion en el array
 let posicionTemaActual = 4;




const listaTemas = [
    {
        id: 1, titulo: "Beat it", artista: "Michael Jackson", imagen: "img/img1.jpg", fuente: "https://mi-musica.com/tema-1.mp3"
    },
    {
        id: 2, titulo: "Rap God", artista: "Eminem", imagen: "./img/img3.jpg", fuente: "https://mi-musica.com/tema-2.mp3"
    },
    {
        id: 3, titulo: "Billie Jean", artista: "Michael Jackson", imagen: "img/img2.jpg", fuente: "https://mi-musica.com/tema-3.mp3"
    },
    {
        id: 4, titulo: "Alors On Danse", artista: "Stromae", imagen: "img/img4.jpg", fuente: "https://mi-musica.com/tema-4.mp3"
    },
    {
        id: 5, titulo: "Venom", artista: "Eminem", imagen: "img/img5.jpg", fuente: "https://mi-musica.com/tema-5.mp3"
    }
];

//-------------NAVEGACION--------------//
listaButtons.forEach((button) => {

    button.addEventListener("click", () => {
        // obtenemos el ID del target que quiero mostrar
        const target = button.getAttribute("data-tab");

        // Actualizar la visibilidad de los bloques
        listaBloques.forEach(bloque => {
            bloque.classList.remove("active");
            // si el bloque es el que me interesa, agregar active
            if (bloque.id == target) {
                bloque.classList.add("active");
            }
        })

        // Actualizar el boton activo de navegacion
        listaButtons.forEach(btn => {
            btn.classList.remove("active");
        })
        button.classList.add("active")
    });
})


//-----------------LISTAR TEMAS---------------//
listaTemas.forEach(tema => {
    // deconstruccion del objeto "tema"
    const { id, titulo, artista, imagen, fuente } = tema;

    containerCanciones.innerHTML += `
        
                    <li class="cardCancion" data-id="${id}">
                        <img class="imgCancion" src="./${imagen}" alt="${artista}">
                        <div>
                            <h2 class="titleCancion">${titulo}</h2>
                            <small class="artista">${artista}</small>
                        </div>
                    </li> `;

 // agarrar el ultimo hijo agregado para incluirle un eventListener
    const cardCancion = containerCanciones.lastChild;
    console.log("card : ", cardCancion);
    console.log(titulo);

    cardCancion.addEventListener("click", ()=>{
        cargarCancion(id);
        document.querySelector("[data-tab='tab3']").click();
    });

 })
             

 //------------ REPRODUCTOR--------------//    
 const playBtn = document.querySelector(".fa-play");
 const pauseBtn = document.querySelector(".fa-pause");
 const nextBtn = document.querySelector(".fa-step-forward");
 const prevBtn = document.querySelector(".fa-step-backward");
 const audioPlayer = document.querySelector("#audioPlayer"); // nuestro reproductor

const divCurrentSongInfo = document.querySelector(".current-song-info")

 pauseBtn.style.display ="none";


// funcion para cargar un tema
function cargarCancion(id){
    // recorremos nuestras canciones y obtenemos solo la que me interesa
    const cancion = listaTemas.find(tema => tema.id == id);

    if(!cancion){return;}

    //deconstruccion de objetos para obtener sus variables
    const {titulo, imagen, artista, fuente} = cancion;

    console.log(cancion);
    audioPlayer.src = fuente;
    idCancionActual = id;

    divCurrentSongInfo.innerHTML = ` <img src="./${imagen}" alt="${artista}">
                                        <h2>${titulo}</h2>
                                        <p>${artista}</p>` ;

    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display ="inline";
}

// event listeners de botones de reproductor
playBtn.addEventListener("click", ()=>{
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display ="inline";
});

pauseBtn.addEventListener("click", ()=>{
    audioPlayer.pause();
    playBtn.style.display = "inline";
    pauseBtn.style.display ="none";
});

 nextBtn.addEventListener("click", ()=>{
    posicionTemaActual++;
    const idCancion = listaTemas[posicionTemaActual].id;
    cargarCancion(idCancion);

 });

 prevBtn.addEventListener("click", ()=>{
    posicionTemaActual--;
    const idCancion = listaTemas[posicionTemaActual].id;
    cargarCancion(idCancion);

 });