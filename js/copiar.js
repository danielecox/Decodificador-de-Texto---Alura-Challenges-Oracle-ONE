function copiarTexto() {
    copiar.addEventListener("click", function () {
        navigator.clipboard.writeText(".texto-criptografado p");
        alert("Texto copiado");
        location.reload();
    })
}
