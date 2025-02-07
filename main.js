function contar() {
    let num = caract.value.length; //Variable que detecta la longitud del contenido del input #passwd
    let txt = document.getElementById("passwd-txt");
    let boton = document.getElementById("boton");
    if (num <= 7) {
        txt.innerText = "La contraseña no es segura";
        txt.className = "menor";
        boton.disabled = true;
    } else if (num >= 11) {
        txt.innerText = "La contraseña es segura";
        txt.className = "mayor";

        boton.removeAttribute("disabled");
    } else {
        txt.innerText = "La contraseña es poco segura";
        txt.className = "entre";

        boton.disabled = true;
    }
}
const caract = document.getElementById("passwd");

caract.addEventListener("input", contar);
