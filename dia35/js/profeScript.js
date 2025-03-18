
const listaBloques = document.querySelectorAll(".tab-content");
const listaButtons = document.querySelectorAll(".nav-button");

const containerCanciones = document.getElementById("containerCanciones");




const listaObjetos = [
    {
        id: 1, titulo: "Beat it", artista: "Michael Jackson", imagen: "img/img1.jpg", fuente: "https://mi-musica.com/tema-1.mp3"
    },
    {
        id: 2, titulo: "Rap God", artista: "Eminem", imagen: "img/img3.jpg", fuente: "https://mi-musica.com/tema-2.mp3"
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

listaButtons.forEach((button, idx) => {

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





listaObjetos.forEach((tema, idx) => {
    // deconstruccion del objeto "tema"
    const { id, titulo, artista, imagen, fuente } = tema;

    containerCanciones.innerHTML += `
        
                    <li class="cardCancion">
                        <img class="imgCancion" src="${imagen}" alt="${artista}">
                        <div>
                            <h2 class="titleCancion">${titulo}</h2>
                            <small class="artista">${artista}</small>
                        </div>
                    </li>
            `;
        })
            
            
        const cardCancion = containerCanciones.querySelectorAll(".cardCancion");
            
        cardCancion.forEach((tarjeta)=>{
            tarjeta.addEventListener("click", ()=>{
                 const titulo = tarjeta.querySelector(".titleCancion").textContent;
                cancionActual.textContent = titulo;

        })
            })

