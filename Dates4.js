// Dos cadenas de fecha
const Fecha1 = '01/17/2005';
const Fecha2 = 'January 27, 2005';

// Crea dos objetos Date con las fechas para comparar
const x = new Date(Fecha1);
const y = new Date(Fecha2);

// Obtiene la diferencia en milisegundos
const diff = x.getTime() - y.getTime();

// Convierte la diferencia a días
const dias = Math.abs (diff / (1000 * 60 * 60 * 24));

console.log(`${dias} dias`);

