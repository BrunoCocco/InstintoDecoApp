//TODO: agregar toastify. 
const confirmModalLogin = document.getElementById("Boton__id--confirm");
confirmModalLogin.addEventListener("click", ()=>{
    Toastify({

        text: "This is a toast",
        
        duration: 3000
        
        }).showToast();
})

const botonEnviarEncuesta = document.getElementById("Boton__enviar--encuesta");
botonEnviarEncuesta.addEventListener("click", ()=>{
//FIXME: tomar los valores de los imputs
    //let formNameUser = document.getElementById("form--name__user").value
    //console.log(formNameUser)
    // let formNameHambiente = document.getElementById("form--name__hambiente").value
    // let formNameColor = document.getElementById("form--name__color").value
    // let formNameDistribuciones = document.getElementById("form--name__distribuciones").value
    // let formNameAperturas = document.getElementById("form--name__aperturas").value
    // console.log(botonEnviarEncuesta)
//FIXME: modificar el toastify    
    Toastify({
        text: "✔️ El Formulario se envio Correctamente!",
        duration: 2000
        }).showToast();
    
})