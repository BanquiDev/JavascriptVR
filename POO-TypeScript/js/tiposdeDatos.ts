
type lestrasoNumeros = string | number;



//string
let cadena: lestrasoNumeros = "banquiDev";

cadena = 33;


//number
var numero: number = 12;

//boolean

let verdadero_falso: boolean = true;

//any
let cualquiera: any = 'hola';

//array

var lenguajes: Array<any> = ['PHP', 'JS', 'CSS', 12];

let years: number[]=[12, 12, 14, 15];

var numero1 = 10;
var numero2 = 24;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55; 

    console.log(numero1, numero2);
}

console.log(numero1, numero2);  

console.log(cadena, numero, verdadero_falso, cualquiera, years);