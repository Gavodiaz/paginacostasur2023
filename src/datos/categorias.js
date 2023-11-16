import data from './fotos';
const { fotos } = data;

export default {
	categorias: [
		{ id: 'america', nombre: 'America', numeroFotos: fotos['america'].length, imagenPortada: './img/america.jpg' },
		{ id: 'africa', nombre: 'Africa', numeroFotos: fotos['africa'].length, imagenPortada: './img/africa.jpg' },
	],

	
};