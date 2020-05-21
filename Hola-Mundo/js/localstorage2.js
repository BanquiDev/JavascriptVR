'use strict'
window.addEventListener('load', ()=>{
    
    var formulario = document.querySelector("#formpeliculas");

    formulario.addEventListener('submit', () =>{
        //console.log("entrar");
        var titulo = document.querySelector("#addpelicula").value;

        if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
        }
        //console.log(titulo);

    });

    var ul = document.querySelector("#peliculaslist");
    //console.log(ul);
    for(var i in localStorage){
        //console.log(localStorage[i]);
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement("p");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

    var formulariob = document.querySelector("#formBorrarPeliculas");

    formulario.addEventListener('submit', () =>{
        //console.log("entrar");
        var titulo = document.querySelector("#borrarpelicula").value;

        if(titulo.length >= 1){
        localStorage.removeItem(titulo, titulo);
        }
        //console.log(titulo);

    });

});