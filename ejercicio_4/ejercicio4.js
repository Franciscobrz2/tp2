//4- El índice de masa corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su
//estatura en metros.

//IMC=peso/Math.po2(estatura,2)

//Realice una página con un formulario que reciba como entrada la estatura y el peso de una persona,
//y muestre su IMC como alerta al presionar un botón llamado ‘calcular’

const formulario = $("formulario");
const peso = $("peso");
const estatura=$("estatura");
const resultado=$("resultado")


formulario.onsubmit = (e) => {
    e.preventDefault();

    
    if (estatura.value.includes(",")) { 
        const NC=estatura.value;
        const NP=parseFloat(NC.replace(",","."))
        estatura.value=NP;
    }
    
    if ((estatura.value > 1,20 && estatura.value<2,30) && (peso.value > 30 && peso.value < 640)) {
    const imc = (peso.value / Math.pow(estatura.value, 2));
    alert(`Su IMC es: ${imc}`);
    //alert("Su IMC es: "+imc);
    } else {
    alert("Valores no validos.");
    }
};

function $(elemento) {
    return document.getElementById(elemento);
}