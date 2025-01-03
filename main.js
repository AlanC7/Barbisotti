
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

// elimino y agrego clases que necesito al cambiar el tamaño del viwport
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1100) { 
        lista.style.display = "flex";
        lista.style.flexDirection = "row";
        lista.classList.remove("visiblemenu");
        contenedormenu.classList.remove("visiblecontenedor");
        boton.classList.remove('bi-x-circle-fill');
        boton.classList.add('bi-list');
    } else {
        lista.style.display = "none";
    }
});



window.addEventListener('load',()=>
    {
        var loader=document.querySelector('.loader-container')
        //var navegacion=document.querySelector('.SP')
        loader.style.opacity= '0%' 
        loader.style.transition= 'all 1s' 
        loader.style.visibility='hidden' 
        var scrollbody=document.querySelector('#bodyscroll').classList.remove("ocultarScroll")
            
    })



