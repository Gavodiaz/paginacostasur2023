import dataFotos from "./datos/fotos";
import { cargarImagen } from "./galeria/cargarImage";
const contenedorCategorias = document.getElementById("categorias");
const galeria = document.getElementById("galeria");


contenedorCategorias.addEventListener("click", (e) => {
  e.preventDefault();
  console.log();

  if (e.target.closest('a')) {
    galeria.classList.add("galeria--active");
    document.body.style.overflow = "hidden";

    

    const categoriaActiva = e.target.closest('a').dataset.categoria;

    galeria.dataset.categoria = categoriaActiva;

    const fotos = dataFotos.fotos[categoriaActiva];

    const {id, nombre, ruta, descripcion} = fotos[0];
    cargarImagen(id, nombre, ruta, descripcion);

    const carousel = galeria.querySelector('.galeria__carousel-slides');


    carousel.innerHTML = '';

    fotos.forEach((foto) => {
      const slide = `
            <a href="#" class="galeria_ _carousel-slide">
                <img class="galeria__carousel-image" src="${foto.ruta}" data-id=${foto.id} alt="" />
            </a>
                `;
                galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;

                
    });

    //galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');

  }
});
