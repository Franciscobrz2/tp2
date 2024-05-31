// • El nombre y apellido no pueden estar vacíos y deben ser de un máximo de 50 caracteres.
// • La edad no debe ser negativa pero también validar que no sea menor de edad.
// • La altura no puede ser negativa y no puede ser mayor a 230 (cm).
// • El correo electrónico no puede estar vacío y debe incluir el ‘@’.
// Mostrar en un elemento <p> un mensaje con el resultado de las validaciones. Si todas las
// validaciones son correctas mostrar el mensaje en verde, en caso contrario en rojo.


const formulario= $("formulario");
const nombre= $("nombre");
const apellido= $("apellido");
const edad= $("edad");
const altura= $("altura");
const correo= $("correo");
const resultado= $("resultado")

formulario.onsubmit= (e)=>{

  
    if (nombre.value !== "" && apellido.value !== "" && edad.value > 0 && edad.value > 18 && altura.value > 0 && altura.value < 230 && correo.value.includes("@")  ) {

        mensaje +=` Nombre: ${nombre.value}<br>`; 
        mensaje +=` Apellido: ${apellido.value}<br>`; 
        mensaje +=` Edad: ${edad.value}<br>`; 
        mensaje +=` Altura: ${altura.value}<br>`; 
        mensaje +=` Correo: ${correo.value}<br>`; 
     
        const resultadoElement = document.createElement("p"); 
        resultadoElement.style.color="red" = mensaje
        resultadoElement.innerHTML = mensaje; resultado.innerHTML = ""; 
        resultado.appendChild(resultadoElement);

    } else { 

        mensaje += "Hay errores en el formulario.<br>";
    }

 

 e.preventDefault(); 
};

function $(elemento){
    return document.getElementById(elemento);
};

