'use strict'

window.addEventListener('load', function(){
    console.log("dom cargado!");
    //capturo el formulario
   var formulario = document.querySelector("#formulario");
    console.log(formulario);
    //capturo el otro div, y lo oculto
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    //evento submit del formulario
    formulario.addEventListener('submit', ()=>{
        console.log("submit capturado");
        //capturo el contenido de los inputs.
        var nombre = document.querySelector('#nombre').value;
        var apellido = document.querySelector('#apellido').value;
        var edad = parseInt(document.querySelector('#edad').value);

        if(nombre.trim() == null || nombre.trim().length == 0 ){
            var span = document.querySelector("#error_nombre");
            span.innerHTML = "El nombre no es valido";
            alert("El nombre no es valido");
            return false;
        }else{
            span.style.display = "none";
        }
        if(apellido.trim() == null || apellido.trim().length == 0 ){
            
            alert("El apellido no es valido");
            return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad) ){
            
            alert("La edad no es valido");
            return false;
        }



        //muestro el div que estaba oculto, cuando hago click en submit.
        box_dashed.style.display = "block";
        //guardo los datos del usuario en un array
        var datos_usuario = [nombre, apellido, edad];
        //para cada iteracion
        var indice;
        for(indice in datos_usuario){
            // creo un elemento p
            var parrafo = document.createElement("p");
            // le agrego la data que tengo del usuario en cada indice
            parrafo.append(datos_usuario[indice]);
            // y agrego ese parrafo al div box_dashed
            box_dashed.append(parrafo);
        }
        ///////otra forma de mostrar en el div
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span ");
        var p_edad = document.querySelector("#p_edad span");
        
        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
    });
});