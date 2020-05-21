// funciones anonimas
// es una funcion que no tiene nombre


var pelicula = function(nombre){
    return "La pelicula es "+ nombre;
}

function sumame(numero1, numero2, sumayMuestra, sumaxDos){
    var sumar = numero1 + numero2;
    
    sumayMuestra(sumar);
    sumaxDos(sumar);
    return sumar;
}

sumame(3, 20, 
     dato =>{
        console.log("La Suma es: "+dato);
    },
    dato =>{
        console.log("El doble es: "+(dato*2));
    });