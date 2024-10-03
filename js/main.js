//Listener para iniciar todo cuando todo el DOM este cargado
document.addEventListener("DOMContentLoaded",()=>{

//declaramos los elementos HTML con los que vamos a trabajar
const contImagenes=document.querySelector(".flex-container");
const cajaBotones=document.querySelectorAll("#seccion_btn");

//Delegamos el evento ONCLICK a la caja de botones, puesto que los botones no estaran en principio creados
cajaBotones.forEach((caja)=>{
    caja.addEventListener("click",(ev)=>{
        //pasamos todo el evento a la funcion para poder trabajar con ella
        mostrarImagen(ev);
    })
})

const galeria_fotos=[
    {
        id:1,
        src:"assest/viajes-1.jpg",
        alt:"foto viaje1",
        titulo:"Viaje1",
        tag:["playa","mar"]
    },
    {
        id:2,
        src:"assest/viajes-2.jpg",
        alt:"foto viaje2",
        titulo:"Viaje2",
        tag:["mar","tropical"]
    },
    {
        id:3,
        src:"assest/viajes-3.jpg",
        alt:"foto viaje3",
        titulo:"Viaje3",
        tag:["viaje","postal"]
    },
    {
        id:4,
        src:"assest/viajes-4.jpg",
        alt:"foto viaje4",
        titulo:"Viaje4",
        tag:["turismo","historico","cultural"]
    },
    {
        id:5,
        src:"assest/viajes-5.jpg",
        alt:"foto viaje5",
        titulo:"Viaje5",
        tag:["turismo","postal","cultural"]
    },
    {
        id:6,
        src:"assest/viajes-6.jpg",
        alt:"foto viaje6",
        titulo:"Viaje6",
        tag:["postal"]
    },
    {
        id:7,
        src:"assest/viajes-7.jpg",
        alt:"foto viaje7",
        titulo:"Viaje7",
        tag:["cultural","turismo"]
    }
]
//array donde guardaremos los tags
const arrayTags=[];

//funcion para crear los botones
const crearBotones=()=>{

}

//funcion para mostrar las imagenes
const mostrarImagen=(element)=>{

}

crearBotones();
})//LOAD COMPLETO