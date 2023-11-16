import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";

const galeria = document.getElementById('galeria');

galeria.addEventListener('click',(e) =>{
    const boton = e.target.closest('button');

    //compruebo si el boton en el html tiene un data de tipo acción
    //cerrar galeria
    if (boton?.dataset?.accion==='cerrar-galeria') {
        cerrarGaleria();
    }

    //seleccionar imagen del slide
    if(e.target.dataset.id){
        slideClick(e);
    };
});