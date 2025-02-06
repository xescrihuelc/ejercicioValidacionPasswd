function contar() {
    let num = caract.textLength; //Variable que detecta la longitud del contenido del input #passwd
    let txt = document.getElementById("passwd-txt");
    if (num <= 7) {
        txt.innerText = "La contraseña no es segura";
        txt.className = "menor";
    } else if (num >= 11) {
        txt.innerText = "La contraseña es segura";
        txt.className = "mayor";
    } else {
        txt.innerText = "La contraseña es poco segura";
        txt.className = "entre";
    }
}
const caract = document.getElementById("passwd");
caract.addEventListener("input", contar);
