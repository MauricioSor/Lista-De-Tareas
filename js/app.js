// Botones
let inputTarea = document.getElementById(`tareaTexto`);
let botonCrear = document.getElementById(`crear`);
// Actuador
botonCrear.addEventListener("click",agregar);
// Funciones

function agregar() {
    let nuevoDiv = document.createElement("div");
    let texto= document.createElement("p");
    let borrar = document.createElement(`button`);
    borrar.innerHTML=`Borrar`;
    texto.innerHTML=inputTarea.value;
    nuevoDiv.appendChild(borrar);
    nuevoDiv.appendChild(texto); //añade texto al div creado.
    document.body.appendChild(nuevoDiv);

    borrar.addEventListener ("click",function() {
    nuevoDiv.remove();
});
}
/*botonBorrar = addEventListener("click", borrar);
function borrar() {
    botonBorrar.style.display = `none`;
    tareaNueva.style.display = `none`;
}*/