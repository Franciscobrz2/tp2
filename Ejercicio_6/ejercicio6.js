const formulario = $("formulario");
const mensaje = $("mensaje");
const nombre = $("nombre");
const apllido=$("apellido")
const edad = $("edad");
const altura = $("altura");
const correo = $("correo");

formulario.addEventListener("submit", (e) => {
  //Enviar formulario
  e.preventDefault();
});

formulario.addEventListener("focusout", () => {
    mensaje.style.color = "red";
    // Verificar campos


    if (formulario[nombre].value !=="") {
        mensaje.textContent = "Nombre vacio";
    }
    else if (formulario[apllido].value!=="") {
        mensaje.textContent = "Apellido vacio";
    }
    else if (formulario[edad]< 0) {
        mensaje.textContent = "La edad es negativa";
    } else if (formulario[edad]<18) {
        mensaje.textContent = "No se puede enviar menor de edad";
    }
    else if (formulario[altura] < 0 || formulario[altura] > 230) {
        mensaje.textContent = "La altura no puede ser negativa ni pasar los 230cm";
    }
    else if (formulario[correo].includes('@')) {
        mensaje.textContent = "El correo debe incluir el @";
    }
    else if(formulario[correo]!==""){
        mensaje.textContent = "El correo no puede estar vacio";
    } else {
        mensaje.textContent = "Todas las validaciones son correctas.";
        mensaje.style.color = "green";
    }
});

function $(elemento) {
  return document.getElementById(elemento);
}
