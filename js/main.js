// validador de contraseñas
let nombre = prompt ( "ingrese su nombre")
let verificarPassword = prompt ( " ingrese el password")

let User = [nombre , verificarPassword]


//constructor
class crearUsuario {
    constructor( nombre, password ){
    this.nombre= nombre
    this.password=password
    }
    
//verifica pass
    verificarPass (pass){
    if (pass === this.password){
    alert ("bienvenido")}
    else{
        alert ("Acceso Denegado")
    }
    }
    }
    //crea usuario
    let newUser = new crearUsuario ( nombre, "1234")
    newUser.verificarPass(verificarPassword)
    

