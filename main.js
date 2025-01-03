
const boton = document.querySelector("#botonmenu");
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
    
});


