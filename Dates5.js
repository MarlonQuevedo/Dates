let fechaActual = new Date();

let horas = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
let miliSegundos = fechaActual.getMilliseconds();

console.log(`Hora actual: ${horas}:${minutos}:${segundos}:${miliSegundos}`);


//Tarea: Obtener la fecha actual utilizando el getDate dia, mes y año