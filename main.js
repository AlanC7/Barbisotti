
/*const boton = document.querySelector("#botonmenu");
const contenedormenu = document.querySelector("#contemenu");
const lista = document.querySelector("#menu");

boton.addEventListener("click", () => {
    contenedormenu.classList.toggle("visiblecontenedor"); 
    if (lista.classList.contains("visiblemenu"))
    {
        lista.classList.remove("visiblemenu");lista.style.display="none"; 
        
    }
    else
    {  
        lista.classList.add("visiblemenu"); 
        lista.style.display="block"; 
        lista.style.fexDilrection="column";

    }

    if (boton.classList.contains('bi-list')) {
        boton.classList.remove('bi-list');
        boton.classList.add('bi-x-circle-fill');
    } else {
        boton.classList.remove('bi-x-circle-fill');
        boton.classList.add('bi-list');
    }
    
});*/


const boton = document.querySelector("#botonmenu");
const contenedormenu = document.querySelector("#contemenu");
const lista = document.querySelector("#menu");

boton.addEventListener("click", () => {
    contenedormenu.classList.toggle("visiblecontenedor"); 
    if (lista.classList.contains("visiblemenu")) {
        lista.classList.remove("visiblemenu");
        lista.style.display = "none"; 
    } else {  
        lista.classList.add("visiblemenu"); 
        lista.style.display = "block"; 
        lista.style.flexDirection = "column";
    }

    if (boton.classList.contains('bi-list')) {
        boton.classList.remove('bi-list');
        boton.classList.add('bi-x-circle-fill');
    } else {
        boton.classList.remove('bi-x-circle-fill');
        boton.classList.add('bi-list');
    }
});

// Asegúrate de que el menú se muestre correctamente al cambiar el tamaño de la pantalla
window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) { // Ajusta el valor según tus necesidades
        lista.style.display = "flex";
        lista.style.flexDirection = "row";
        lista.classList.remove("visiblemenu");
        contenedormenu.classList.remove("visiblecontenedor");
        boton.classList.remove('bi-x-circle-fill');
        boton.classList.add('bi-list');
    } else {
        // lista.style.display = "none";
    }
});




