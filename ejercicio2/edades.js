const prompt = require('prompt-sync')({ sigint: true });


let edades = [];
const totalPersonas = 10;

console.log(`Ingrese las edades de ${totalPersonas} personas:`);

// ciclo para pedir las 10 edades
for (let i = 0; i < totalPersonas; i++){
    let edadValida= false;
    let edadActual= 0;

    while (!edadValida) {
        let entrada = prompt(`Ingrese la edad de la persona ${i + 1} (entre 1 y 120):`);

        edadActual = parseInt(entrada);

        if (!isNaN(edadActual) && edadActual >= 1 && edadActual <=120) {
            edadValida = true;
        } else {
            console.log(`¡Error! La edad debe ser un número entero entre 1 y 120. Intente nuevamente. `)
        }
    } 
    //El push debe ir DENTRO del ciclo para guardar cada una de las edades
    edades.push(edadActual);
}

// Variables para procesar los datos
let menoresEdad = 0;
let mayoresEdad = 0;
let adultosMayores = 0;


let edadBaja = edades[0];
let edadAlta = edades[0];
let sumaEdades = 0;

//Ciclo para analizar el vector
for (let i = 0; i < edades.length; i++){
    let edad = edades [i];

    sumaEdades = sumaEdades + edad;

    if (edad < 18) {
        menoresEdad++;
    } else {
        mayoresEdad++;
    } if (edad >= 60) {
        adultosMayores++;
    }

    if (edad < edadBaja){
        edadBaja = edad;
    }
    if (edad > edadAlta){
        edadAlta = edad;
    }
}

let promedio = sumaEdades / totalPersonas;

//Mostrar resultados
console.log(`Cantidad de personas menores de edad: ${menoresEdad}`);
console.log(`Cantidad de personas mayores de edad: ${mayoresEdad}`);
console.log(`Cantidad de adultos mayores: ${adultosMayores}`);
console.log(`Edad más baja: ${edadBaja}`);
console.log(`Edad más alta: ${edadAlta}`);
console.log(`Promedio de edades: ${promedio.toFixed(2)}`);

// se llama la función para iniciar el programa
analizarEdades();