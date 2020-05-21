console.log('hola');

var bicicleta = {
    color: 'rojo',
    modelo: 'bmx',
    frenos: 'De Disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        this.color = nuevo_color;
    }
};

bicicleta.cambiaColor("azul");

console.log(bicicleta)