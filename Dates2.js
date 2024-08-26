const fechaActual = new Date();
const diaSemana = fechaActual.getDay();

const diasSemanaCortos = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const diaCorto = diasSemanaCortos[diaSemana];

console.log(`Hoy es ${diaCorto}.`);
