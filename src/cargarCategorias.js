import dataCategorias from './datos/categorias.js';
const {categorias}=dataCategorias;
const contenedorCategorias = document.getElementById('categorias');


categorias.forEach((categoria) => {
    const nuevaCategoria = document.createElement('a');
    const plantilla = `
      <img class="img-fluid" src="${categoria.imagenPortada}" alt="" />
			<div class="categoria__datos">
					<p class="text-justify">${categoria.nombre}</p>
					<p class="text-justify">${categoria.numeroFotos} Fotos</p>
   `;
nuevaCategoria.innerHTML = plantilla;


nuevaCategoria.classList.add('categoria');
nuevaCategoria.href='#';
nuevaCategoria.dataset.categoria = categoria.id;

contenedorCategorias.append(nuevaCategoria);

});