//interface
interface CamisetaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log('camiseta estampada con el logo de: '+logo)
        }
    }
}

//Clase (molde del objeto)
@estampar('Gucci')
class Camiseta implements CamisetaBase{
    
    //Propiedades(caracteristicas)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    //constructor
    constructor(color, modelo, talla, marca, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //Metodos (Acciones)
    public setColor(color){
        this.color = color
    }
    public getColor(){
        return this.color 
    }

}

//Clase HIja

class Sudadera extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;

    }
    getCapucha():boolean{
        return this.capucha;
    }
}

 var camiseta = new Camiseta('rojo', 'manga larga', 'nike', 'L', 14);

 var sudadera = new Sudadera('blanca', 'sin mangas', 'm', 'rebook', 30);
 sudadera.setColor('gris')
 sudadera.setCapucha(true)
 sudadera.estampacion();
// camiseta.setColor("rojo")

 console.log(camiseta);
 console.log(sudadera);


// var playera = new Camiseta('verde', 'manga corta', 'adidas', 'm', 20);

// playera.setColor('azul')

// console.log(playera);
