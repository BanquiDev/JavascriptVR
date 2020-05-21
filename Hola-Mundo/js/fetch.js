'use strict'

//fetch es un metodo que hace peticiones ajax
var div_usuarios = document.querySelector("#usuarios");
var div_erwin = document.querySelector("#erwin");
var div_profesor = document.querySelector("#profesor");

//ejecuto la funcion getUsuarios que hace el pedido ajax.
getUsuarios()
.then(data => data.json())
//guardo los usuarios en la variable usuarios
.then(users => {
    /*2 promesa = ejecuto la funcion listadoUsuarios y le paso el parametro data, 
    con la data de users */
    listadoUsuarios(users.data);

    return getInfo();
})//como la promesa devuelve otro fetch, puedo seguir encadenando promesas a continuacion
.then(data => {
    div_profesor.innerHTML = data;
    //sigo encadenando metodos
    return getErwin();
})
.then(data => data.json())
.then(user => {
    mostrarErwin(user.data);
})
.catch(error =>{
    alert("error en las peticiones")
    console.log(error);
});

//traigo los usuarios
function getUsuarios(){
    //hago la peticion ajax con el emtodo fetch
 return fetch('https://reqres.in/api/users');
}

function getErwin(){
    //hago la peticion ajax con el emtodo fetch
return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    
    var profesor ={
        nombre: 'Victor',
        apellido: 'Robles',
        url: 'https//victorroblesweb.es'
    };
    return new Promise((resolve, reject) => {
        var profesor_string = '';
        setTimeout(()=>{
            profesor_string = JSON.stringify(profesor);
        
            if(typeof profesor_string != "string") return reject('error');

            return resolve(profesor_string);
        }, 3000);
    });
}


function listadoUsuarios(usuarios){
    usuarios.map((user, i) =>{
        let nombre = document.createElement("h4");

        nombre.innerHTML = i +". Nombre: "+ user.first_name +" "+ user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    });
}

function mostrarErwin(user){
    
        let nombre = document.createElement("h4");
        let avatar = document.createElement("img");

        nombre.innerHTML =". Nombre: "+ user.first_name +"  "+ user.last_name;
        avatar.src = user.avatar;
        avatar.width = "100";

        div_erwin.appendChild(nombre);
        div_erwin.appendChild(avatar);

        document.querySelector(".loading2").style.display = "none";
    
}