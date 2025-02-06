/* <8 */
/* 8-10 */
/* >10 */

/* function name(params) {
    
} */

function contar() {
    let num = caract.textLength;
    if (num <= 7) {
        console.log("menor");
    } else if (num >= 11) {
        console.log("mayor");
    } else {
        console.log("entre");
    }
}
const caract = document.getElementById("passwd");
caract.addEventListener("input", contar);
