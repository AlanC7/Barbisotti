
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




  function scrollToSection() {
    const section = document.getElementById('contacto');
    const offset = 100; // Ajusta este valor según la altura de tu barra fija
    const bodyRect = document.body.getBoundingClientRect().top;
    const sectionRect = section.getBoundingClientRect().top;
    const sectionPosition = sectionRect - bodyRect;
    const offsetPosition = sectionPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }


  
//   muestra un mensaje para el envio el formulario

/*function mostrarMensaje(event) {
    
    var modal = document.getElementById("miModal");
    modal.style.display = "flex";
    setTimeout(cerrarModal, 1000); // Cierra el modal después de 3 segundos
}

function cerrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
}*/


function enviarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    var form = event.target;
    var formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/alan.castillo@utelvt.edu.ec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        mostrarMensaje();
        form.reset(); // Resetea el formulario después de enviarlo
    })
    .catch(error => console.error('Error:', error));
}

function mostrarMensaje() {
    var modal = document.getElementById("miModal");
    modal.style.display = "flex";
    setTimeout(cerrarModal, 3000); // Cierra el modal después de 3 segundos
}

function cerrarModal() {
    var modal = document.getElementById("miModal");
    modal.style.display = "none";
}


