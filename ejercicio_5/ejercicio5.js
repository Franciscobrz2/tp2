const formulario= $("formulario");
const ladoA= $("ladoA");
const ladoB= $("ladoB");
const ladoC= $("ladoC");
const resultado= $("resultado")

formulario.onsubmit = (e) => { 

    if (ladoA.value>0 && ladoB.value>0 && ladoC.value>0  ) {
        
        let area_triangulo=0
        if(ladoA.value!==ladoC.value){
            const altura_triangulo = ladoA.value - ladoC.value; 
            area_triangulo = (altura_triangulo*ladoB.value) / 2;
        }
        
        const area = (ladoB.value * ladoC.value) + area_triangulo; 
        resultado.innerText = `El área del terreno es ${area} `;
        
    } else {
        alert("los valores ingresados no son validos")
    }

 e.preventDefault();
};


function $(elemento){
    return document.getElementById(elemento);
};

