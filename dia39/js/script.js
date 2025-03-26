function parallaxEffect(){
    const parallaxBg = document.querySelector(".parallax-bg");
    // seleccionamos a nuestra mascota
    const elementoFlotante = document.querySelector(".parallax-elemento-flotante");

    window.addEventListener("scroll", ()=>{
        let scrollPos = window.scrollY;
        console.log(scrollPos)

        // Mover el fondo
        // velocidad 0.3 significa que se mueve al 30% de la velocidad del scroll
        parallaxBg.style.transform = `translateY(${scrollPos * 0.3}px)`

        if(elementoFlotante){

            // podemos aplicar multiples movimientos, ej rotacion
            let rotation = scrollPos * 0.05; // umna rotacion pequeña
            // IMPORTANTE  transfrom :translateY() es mejor para el rendimiento que cambiar top
            elementoFlotante.style.transform = `translateY(${scrollPos *0.6}px)rotate(${rotation}deg)`;
        }
    });
}

if(window.matchMedia(`(prefers-reduced-motion:reduce)`).matches){
    // no aplicar efectos
    console.log("no aplicar parallax por decision del usuario")
}else{
    //aplicar efectos de parallax
    console.log("se aplica el parallax")
    parallaxEffect();
}
