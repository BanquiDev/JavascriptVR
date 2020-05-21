'use strict'

window.addEventListener('load', () =>{

    var boton = document.querySelector("#boton");
    console.log(boton);
    function cambiarColor(){
        let bg = boton.style.background;
        console.log("click");
        if(bg == "green"){
            boton.style.background = "red";
            boton.style.padding = "10px";
            
        }else{
            boton.style.background = "green";
        }
        return true;
    }
    //evento Click
    boton.addEventListener('click', function(){
        cambiarColor();
    });

    // mouseOver

    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc";
    });

    // mouseOut

    boton.addEventListener('mouseout', function(){
        boton.style.background = 'blue';
    });

    // focus
    var input = document.querySelector("#campo_nombre");
    input.addEventListener('focus', function(){
        console.log("FOCUS estas dentro del input");
    });

    //blur

    input.addEventListener('blur', function(){
        console.log("BLUR estas fuera del input");
    });
    //keydown
    input.addEventListener('keydown', function(event){
        console.log("Pulsando tecla", String.fromCharCode(event.keyCode));
    });
    //keypress
    input.addEventListener('keypress', function(event){
        console.log("[keypress] TEcla presionada", String.fromCharCode(event.keyCode));
    });
    //keyup
    input.addEventListener('keyup', function(event){
        console.log("[keyup] TEcla soltada", String.fromCharCode(event.keyCode));
    });

});