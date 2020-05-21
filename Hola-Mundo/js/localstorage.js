'use strict'

//Localstorage
window.addEventListener('load', () =>{
    //comprobar disponibilidad de localstorage segun antiguedad del navegador
    if(typeof(Storage) !== 'undefined'){
        console.log("Localstorage disponible");
    }else{
        console.log("incompatible Localstorage ");
    }

     //guardar datos en el localstorage
     localStorage.setItem("titulo", "Curso de JS con Victor Robles");

     //recuperar elemento
     document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

     //guardar objetos

     var usuario = {
         nombre: "Esteban",
         email: "esteban@mail.com", 
         web:"estebangulias.com"
     };

     localStorage.setItem("usuario", JSON.stringify(usuario));

     // Recuperar el objeto

     var user = JSON.parse(localStorage.getItem("usuario"));

     console.log(user);
     document.querySelector("#datos").append(user.nombre +" "+ user.email);

     // borro datos del localstorage
     
     localStorage.removeItem("usuario");
     localStorage.clear();
});