const listaEnlaces = document.querySelectorAll(".a");
const listaImg = document.querySelectorAll(".img")
const lightbox = document.querySelector(".lightbox");
const cerrar = document.querySelector(".btnClose");
const imgBig = document.querySelector(".imgBig");

// recorrer los enlaces
listaEnlaces.forEach((enlace) =>{
    // agregar un eventlistener a cada uno
    enlace.addEventListener("click", ()=>{
        // agregar la clase active a lightbox
        lightbox.classList.add("active");
    })
    //imgBig cambiarle el src a la que le hice click.
    listaImg.forEach((img, i)=>{
        img.addEventListener("click",()=>{
            imgBig.src = img.src
        })
    })
    
    // si hago click en cerrar... sacar clase de active de lightbox
     cerrar.addEventListener("click",()=>{
         lightbox.classList.remove("active");
     })
})
