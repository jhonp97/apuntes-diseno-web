// const navBtn = document.querySelectorAll(".nav-button");
// const tabs = document.querySelectorAll(".tab-content")
// const tab1 = document.getElementById("tab1");
// const tab2 = document.getElementById("tab2");
// const tab3= document.getElementById("tab3");
// const listaObjetos = [
// {
//     id: 1, titulo:"Cancion 1", artista: "Artista 1", imagen:"img/img1.jpg", fuente:"https://mi-musica.com/tema-1.mp3"
// },
// {
//     id: 2, titulo:"Cancion 2", artista: "Artista 2", imagen:"img/img2.jpg", fuente:"https://mi-musica.com/tema-2.mp3"
// },
// {
//     id: 3, titulo:"Cancion 3", artista: "Artista 3", imagen:"img/img3.jpg", fuente:"https://mi-musica.com/tema-3.mp3"
// },
// {
//     id: 4, titulo:"Cancion 4", artista: "Artista 4", imagen:"img/img4.jpg", fuente:"https://mi-musica.com/tema-4.mp3"
// },
// {
//     id: 5, titulo:"Cancion 5", artista: "Artista 5", imagen:"img/img5.jpg", fuente:"https://mi-musica.com/tema-5.mp3"
// }
// ];

// const containerCanciones = document.getElementById("containerCanciones");

// listaObjetos.forEach((tema, idx)=>{
//     // deconstruccion del objeto "tema"
//     const {id, titulo, artista, imagen, fuente} = tema;
     
//     containerCanciones.innerHTML += `
    
//                 <li class="cardCancion">
//                     <img class="imgCancion" src="https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97" alt="${artista}">
//                     <div>
//                         <h2 class="titleCancion">${titulo}</h2>
//                         <small class="artista">${artista}</small>
//                     </div>
//                 </li>
//         `
// })

// navBtn.forEach((btn, idx)=>{
//     // console.log("funciona"+btn);
//     // console.log("funciona"+idx);
//     navBtn[idx].addEventListener("click", ()=>{
//         tabs[idx].classList.remove("active")
//         // tab2.classList.add("active")
        
//     })
//     tabs[idx].classList.add("active")
// })



const cancionActual = document.getElementById("cancionActual");
const urlCancion = document.getElementById("urlCancion");

