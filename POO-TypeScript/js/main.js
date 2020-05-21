"use strict";
exports.__esModule = true;
var camiseta_1 = require("./camiseta");
var Main = /** @class */ (function () {
    function Main() {
        console.log('aplicacion JS cargada!!');
    }
    Main.prototype.getCamiseta = function () {
        return new camiseta_1.Camiseta('verde', 'corta', 'S', 'adidas', 25);
    };
    return Main;
}());
var main = new Main();
console.log(main.getCamiseta());
