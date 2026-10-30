const prompt = require ('prompt-sync')();

//función para leer un vector validando que sea de tamaño N y esté ordenado ascendentemente
function leerVectorOrdenado(nombreVector, tamaño){
    let vector =[];
    console.log (`Ingrese los elementos del vector ${nombreVector} de tamaño: ${tamaño}`);

    for (let i = 0; i < tamaño; i++) {
        let numeroValido = false;
        let numeroActual = 0;

        while (!numeroValido) {
            let entrada = prompt (`Ingrese el elemento ${i + 1}:`);
            numeroActual = parseInt(entrada);

            //Validar que sea un número entero
            if (isNaN(numeroActual)) {
                console.log(`Error: Debe ingresar un número entero válido. Intente de nuevo.`)
                continue;
            }
            
            //Validar que esté ordenado ascendentemente
            if (i>0 && numeroActual < vector [i-1]) {
                console.log (`Error: El número debe ser mayor o igual al anterior (${vector[i-1]}). Intente de nuevo.`);
            } else {
                numeroValido = true;
            }
        }

        //Guardar el número validado en el vector
        vector.push(numeroActual);
    }
    return vector;
}

// Funcion para mezclar dos vectores ya ordenados en uno solo ordenado
function mezclarVectores(vector1, vector2) {
    let resultado = [];
    let i = 0; // índice para vector1
    let j = 0; // índice para vector2

    // Comparamos elementos de ambos vectores y agregamos el menor
    while (i < vector1.length && j <vector2.length) {
        if (vector1 [i] <=vector2[j]){
            resultado.push(vector1[i]);
            i++;
        } else {
            resultado.push(vector2[j]);
            j++;
        }
    }

    // Si quedan elementos sobrantes en el vector 1, se agregan
    while (i < vector1.length) {
        resultado.push(vector1[i]);
        i++;
    }

    //Si quedan elementos sobrantes en el vector 2, se agregan
    while (j < vector2.length) {
        resultado.push(vector2[j]);
        j++;
    }
    return resultado;
}

// Programa principal
function iniciarPrograma() {
    const tamaño= 5;
    console.log(`===============================`);
    console.log (`Mezcla de vectores ascendentes`);
    console.log(`===============================`);

    // Leer y validar el vector 1
    let vector1= leerVectorOrdenado(`Vector 1`, tamaño);

    // Leer y validar el vector 2
    let vector2= leerVectorOrdenado(`Vector 2`, tamaño);

    // Mezclar los vectores
    let vectorMezclado= mezclarVectores(vector1, vector2);

    // Mostrar resultados
    console.log (`=================================`);
    console.log (`       Resultados finales:       `);
    console.log (`Vector 1:         `, vector1.join(`, `));
    console.log (`Vector 2:         `, vector2.join(`, `));
    console.log (`Lista mezclada:   `, vectorMezclado.join(`, `));
    console.log (`=================================`);
}

//Ejecutar el programa
iniciarPrograma();