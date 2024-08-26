const fecha = new Date();
const mesActual = fecha.toLocaleString('es-ES', { month: 'long' });

console.log(`El mes actual es: ${mesActual}`);
