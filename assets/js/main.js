
const login = () => {
    let username = $("#username").val() // aqui con este comando sacas el texto que esta en el input con id = username
    let password = $("#password").val() // aqui lo mismo pero con id = password

    if(username == "ramon" && password == "1234") { // aqui estoy comprobando si el username = ramon y el password = 1234
        alert("Todo correcto")
    }
    else { // si no es asi entonces sale este cartel
        alert("Usuario o contraseña incorrectos")
    }
}