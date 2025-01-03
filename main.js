/*const boton =document.querySelector("#botonmenu");
const contenedormenu =document.querySelector("#contemenu");
 const lista =document.querySelector("#menu");
 boton.addEventListener("click",() =>{
     contenedormenu.classList.add("visiblecontenedor");
     lista.classList.add("visiblemenu");
})

boton.addEventListener("click",() =>{
    contenedormenu.classList.remove("visiblecontenedor");
    lista.classList.remove("visiblemenu");
})*/
const boton = document.querySelector("#botonmenu");
const contenedormenu = document.querySelector("#contemenu");
const lista = document.querySelector("#menu");

boton.addEventListener("click", () => {
    contenedormenu.classList.toggle("visiblecontenedor");
    lista.classList.toggle("visiblemenu");
});


// document.addEventListener('DOMContentLoaded', function() {
//     const botonMenu = document.getElementById('botonmenu');
//     const contenedorMenu = document.getElementById('contemenu');
//     const menu = document.getElementById('menu');

//     botonMenu.addEventListener('click', function() {
//         contenedorMenu.classList.toggle('visiblecontenedor');
//         menu.classList.toggle('visiblemenu');
//     });
// });

