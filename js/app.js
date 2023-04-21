// Botones
let inputTarea = document.getElementById(`tareaTexto`);
let botonCrear = document.getElementById(`crear`);
// Actuador
botonCrear.addEventListener("click",agregar);
// Funciones

function agregar() {
    let contenedor = document.querySelector(`main`);
    let nuevoDiv = document.getElementById("tareas"); //Leo div de html
    let texto= document.createElement(`h5`); //Creo un h5
    let borrar = document.createElement(`button`); // Creo un boton
    // Estilo de Div
    nuevoDiv.style.display="flex";
    nuevoDiv.style.margin="10px";
    //Estilo de boton borrar
    borrar.style.backgroundColor=`red`;
    borrar.style.borderRadius=`8px`;
    borrar.style.marginLeft=`5px`
    texto.innerHTML= inputTarea.value; //Busco valores de el input
    borrar.innerHTML=`Borrar`; 
    contenedor.appendChild(nuevoDiv);
    //document.querySelector("main").appendChild(nuevoDiv);
    nuevoDiv.appendChild(texto); //Añade texto al div creado.
    nuevoDiv.appendChild(borrar);
    borrar.addEventListener ("click",function() {
    nuevoDiv.remove();
});
}
