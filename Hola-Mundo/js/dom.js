

//DOM. Document Object Model
function cambiaColor(color){
    caja.style.background = color;
}
//var caja = document.getElementById('micaja');


 var caja = document.querySelector("#micaja");
// caja.innerHTML = "Texto en la caja de JSON";

caja.style.background = "green";
console.log(caja);

//conseguir elementos x etiqueta y x clase CSS

var todosLosDivs = document.getElementsByTagName('div');


// var contenidoTexto = todosLosDivs[2];
// contenidoTexto.innerHTML = "otro texto";


    var seccion = document.querySelector("#miseccion");
    var hr = document.createElement("hr");
    var valor;

for(valor in todosLosDivs){ 
    if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo =  document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    }
}
seccion.append(hr);

// conseguir elementos x clase CSS
var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');
divAmarillos[0].style.background = "yellow";
var div;
for(div in divRojos){
    if(divRojos[div].className == 'rojo'){
    divRojos[div].style.background = "red";
    }
}

//query selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);