const fechaPersonalizada = new Date(2012, 1, 20, 3, 12);
const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const fechaFormateada = fechaPersonalizada.toLocaleString('es-ES', opciones);

console.log(fechaFormateada);
