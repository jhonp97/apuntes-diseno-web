function parallaxEffect(){
    const parallaxContainers = document.querySelectorAll(".parallax-contenedor")

    const viewportHeight = window.innerHeight;

    function updateParallax(){
        parallaxContainers.forEach(container =>{

            const rect = container.getBoundingClientRect();


        });
    }

    window.addEventListener("scroll", ()=>{
        updateParallax
    })
}

if(window.matchMedia(`(prefers-reduced-motion:reduce)`).matches){
    // no aplicar efectos
    console.log("no aplicar parallax por decision del usuario")
}else{
    //aplicar efectos de parallax
    console.log("se aplica el parallax")
    parallaxEffect();
}
