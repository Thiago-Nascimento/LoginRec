function exibirDados(event) {
    event.preventDefault()

    let email = document.getElementById("campo-email").value;
    let senha = document.getElementById("campo-senha").value;

    console.log("Email capturado:", email);
    console.log("Senha capturada:", senha);
}