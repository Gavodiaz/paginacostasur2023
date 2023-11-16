import cerrarGaleria from "./cerrarGaleria";

const galeria = document.getElementById('galeria');

galeria.addEventListener('click',(e) =>{
    const boton = e.target.closest('button');

    //compruebo si el boton en el html tiene un data de tipo acción
    if (boton?.dataset?.accion==='cerrar-galeria') {
        cerrarGaleria();
    }
});