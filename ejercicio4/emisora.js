const prompt = require('prompt-sync')();

//Vector para almacenar las 6 personas
let personas = [];
const MAX_PERSONAS = 6;

// Función para agregar una persona al vector
function agregarPersona(){
    
    // Validar si ya se llegó al límite de personas
    if (personas.length >= MAX_PERSONAS) {
        console.log(`Ya se alcanzó el límite máximo de personas: ${MAX_PERSONAS}`);
        return;
    }

    console.log(`--- Registrando persona ${personas.length +1} de ${MAX_PERSONAS} ---`);

    let nombre = prompt (`Ingrese nombre completo: `);
    let cedula = prompt (`Ingrese cédula: `);
    let fechaNacimiento = prompt (`Ingrese fecha de nacimiento (ej: DD/MM/AAAA): `);
    let correo = prompt (`Correo electrónico: `);
    let ciudadResidencia = prompt (`Ciudad de residencia: `);
    let ciudadOrigen = prompt (`Ciudad de origen: `);

    //Almacenar hasta 3 canciones favoritas (artista y título
    let cancionesFav = [];
    for (let i = 0; i < 3; i++) {
        console.log (`Canción ${i+1}: `);
        let artista = prompt (`Ingrese artista: `);
        let titulo = prompt (`Título de la canción: `);

        // Se guarda cada canción como un objeto dentro de un vector
        cancionesFav.push({artista: artista, titulo: titulo});
    }

    //Se crea un objeto con toda la información de la persona
    let nuevaPersona= {
        nombre: nombre,
        cedula: cedula,
        fechaNacimiento: fechaNacimiento,
        correo: correo,
        ciudadResidencia: ciudadResidencia,
        ciudadOrigen: ciudadOrigen,
        cancionesFav: cancionesFav
    };

    //Se agrega la persona al vector principal
    personas.push(nuevaPersona);
    console.log(`Persona agregada exitosamente. Total de personas registradas: ${personas.length}.`);
}

// Mostrar información personal por medio de su posicion en el vector
function mostrarPersonaPosicion(){
    if (personas.length === 0) {
        console.log (`No hay personas registradas.`);
        return;
    }

    console.log (`--- Consultar persona por posición (Índice de 0 a ${personas.length -1}) ---)`);
    let entrada = prompt (`Ingrese la posición (número) de la persona que desea consultar: `);
    let posicion = parseInt(entrada);

    //Validar que la posición sea un número válido y exista en el vector
    if (isNaN(posicion) || posicion < 0 || posicion >= personas.length) {
        console.log (`Error: Posición inválida o fuera del rango de personas registradas.`)
        return;
    }

    let p = personas[posicion];

    //Mostrar los datos en pantalla de forma ordenada.
    console.log(`==========================`);
    console.log(` Información de la persona en la posición: ${posicion}.`);
    console.log(`Nombre:        ${p.nombre}`);
    console.log(`Cédula:        ${p.cedula}`);
    console.log(`Fecha Nac.:    ${p.fechaNacimiento}`);
    console.log(`Correo:        ${p.correo}`);
    console.log(`Ciudad Res.:   ${p.ciudadResidencia}`);
    console.log(`Ciudad Orig.:  ${p.ciudadOrigen}`);
    console.log(`Canciones Favoritas:`);

    //Se recorre el vector de cancioens de esta persona
    for (let i = 0; i < p.cancionesFav.length; i++) {
        let c = p.cancionesFav[i];
        console.log(`${i+1}. "${c.titulo}" - Artista: ${c.artista}`);
    }
    console.log(`==========================`);
}

//Menú principal del programa
function iniciarEmisora(){
    let salir = false;
    while (!salir) {
        console.log(`==========================`);
        console.log(`Bienvenido a la emisora de radio`);
        console.log(`==========================`);
        console.log(`1. Agregar una persona ${personas.length}/${MAX_PERSONAS} [Opción A]`);
        console.log(`2. Mostrar información por posición [Opción B]`);
        console.log(`3. Salir del programa.`);
        console.log(`==========================`)
        
        let opcion = prompt (`Seleccione una opción: `);

        switch (opcion) {
            case '1':
                agregarPersona();
                break;
            case '2':
                mostrarPersonaPosicion();
                break;
            case '3':
                salir = true;
                console.log(`¡Gracias por usar el sistema de la emisora!`);
                break;
            default:
                console.log(`Opción no válida. Por favor, elija 1, 2, o 3`);
        }
    }
}
//Ejecutar aplicación
iniciarEmisora();