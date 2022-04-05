//Codigo del cuadrado
console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado+"cm");

function perimetroCuadrado (lado) {
    return lado * 4;
} 

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado +" cm");


function areaCuadrado(lado) {
    return lado * lado; 
} 

// console.log("El area del cuadrado es: " + areaCuadrado +" cm cuadrados");

console.groupEnd();

//codigo del triangulo

// console.group("triangulos")
// const ladoTriangulo = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log(
//     "Los lados del triangulo miden: "
//     + ladoTriangulo
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: "
// + alturaTriangulo
// + "cm");

function perimetroTriangulo(lado1 , lado2 , base) {
    return lado1 + lado2 + base;
}

// console.log("El perimetro del triangulo es: "
// + perimetroTriangulo
// +"cm");

 function areaTriangulo (base, altura) {
    return (base * altura) / 2;
 } 


 


// console.log("El area del triangulo es de: "
// + areaTriangulo 
// + "cm cuadrados");

console.groupEnd();

//codigo del circulo
console.group("circulo");

// const radioCirculo = 4;
function radioCirculo(radio) {
    return radio;
}
// console.log("El radio del circulo es: "
// + radioCirculo
// +"cm");

// const diametroCirculo = radioCirculo * 2;

function diametroCirculo(radio) {
    return radio * 2;
}

// console.log("El diametro del circulo es: "
// + diametroCirculo
// +"cm");

const PI = Math.PI;
console.log("Pi es: "
 + PI
 +"cm");

// const perimetroCirculo = diametroCirculo * PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perimetro del circulo es: "
// + perimetroCirculo
// +"cm");

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El area del circulo es: "
// + areaCirculo
// +"cm cuadrados");

console.groupEnd();

//Aqui interactuamos con el html
function CalcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo (){
    const inputLado1 = document.getElementById("inputTriangulo1");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("inputTriangulo2");
    const valueLado2 = Number(inputLado2.value);

    const inputBaseT = document.getElementById("inputTriangulo3");
    const valueBase = Number(inputBaseT.value);

    const perimetroT = perimetroTriangulo( valueLado1, valueLado2, valueBase);
    alert(perimetroT);

}
    






function calcularAreaTriangulo() {
    const inputBaseT = document.getElementById("inputTriangulo3");
    const valueBase = Number(inputBaseT.value);

    const inputAlturaT = document.getElementById("inputAltura");
    const valueAltura = Number(inputAlturaT.value);

    const areaT = areaTriangulo(valueBase,valueAltura);
    alert(areaT);
}

function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = Number(inputRadio.value);

    const diametroC = diametroCirculo(valueRadio);
    alert(diametroC)
}

function CalcularPerimetroCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = Number(inputRadio.value);

    const perimetroC = perimetroCirculo(valueRadio);
    alert(perimetroC);
}

function CalcularAreaCirculo() {
    const inputRadio = document.getElementById("inputCirculo");
    const valueRadio = Number(inputRadio.value);

    const areaCirculo1 = areaCirculo(valueRadio);
    alert(areaCirculo1);

}

function alturaIsoceles (lado1,lado2,lado3){

    const inputLado1 = document.getElementById("inputTriangulo1");
    const valueLado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("inputTriangulo2");
    const valueLado2 = Number(inputLado2.value);

    const inputBaseT = document.getElementById("inputTriangulo3");
    const valueBase = Number(inputBaseT.value);

    

}