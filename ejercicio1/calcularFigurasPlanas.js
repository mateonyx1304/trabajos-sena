// Función para calular el triángulo
function calcularTriangulo(a, b, c, h) {
    let perimetro = a + b + c;
    let area = (b * h) / 2;
    return `El perímetro del triángulo es: ${perimetro}, y el área es: ${area}`;
}
console.log(calcularTriangulo(3, 4, 5, 2));

// Función para calcular el rectángulo
function calcularRectangulo(base, altura) {
    let perimetro = 2 * (base + altura);
    let area = base * altura;
    return `El perímetro del rectángulo es: ${perimetro}, y el área es: ${area}`;
}
console.log(calcularRectangulo(3, 4));

// Función para calcular el cuadrado
function calcularCuadrado(lado){
    let perimetro = 4 * lado;
    let area = lado * lado;
    return `El perímetro del cuadrado es: ${perimetro}, y el área es: ${area}`;
}
console.log(calcularCuadrado(5));

// Funcion para calcular el círculo
function calcularCirculo (radio){
    let perimetro = 2 * Math.PI * radio;
    let area = Math.PI * (radio * radio);
    return `El perímetro del círculo es: ${perimetro}, y el área es: ${area}`;
}
console.log(calcularCirculo(5));