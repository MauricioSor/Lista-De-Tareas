// Botones
let inputTarea = document.getElementById(`tareaTexto`);
let botonCrear = document.getElementById(`crear`);
// Actuador
botonCrear.addEventListener("click",agregar);
// Funciones

function agregar() {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style.display="flex";
    nuevoDiv.style.margin="10px";
    let texto= document.createElement("h5");
    let borrar = document.createElement(`button`);
    borrar.style.backgroundColor=`blue`;
    borrar.style.borderRadius=`8px`;
    borrar.innerHTML=`Borrar`;
    texto.innerHTML=inputTarea.value;
    nuevoDiv.appendChild(borrar);
    nuevoDiv.appendChild(texto); //añade texto al div creado.
    document.body.appendChild(nuevoDiv);
    borrar.addEventListener ("click",function() {
    nuevoDiv.remove();
});
}
