const fecha = new Date();
const año = fecha.getFullYear();
const mes = fecha.getMonth('long');
const dia = fecha.getDay();

console.log(`La fecha de hoy es: año ${año}, mes ${mes} y dia ${dia}`)