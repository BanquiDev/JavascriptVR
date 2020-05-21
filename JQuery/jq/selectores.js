/*el selector document refiere a toda la pagina, 
1- el signo $, es una abreviacion de la palabra JQuery, que es un objeto, con metodos y propiedades.

2- lo que va entre parentesis es el selector. 
3- ready es el metodo.

*/
$(document).ready(function(){
   
    //selector de ID
     $("#rojo").css("background", "red")
                          .css("color", "white");
    $("#amarillo").css("background", "yellow")
            .css("color", "blue");
    $("#verde").css("background", "green");


    // Selector de Clase

    var mi_clase = $(".zebra").css("border", "5px dashed black");

    $('.sin_borde').click(function(){
        $(this).addClass('zebra');
    });

    //selectores de etiqueta

    var parrafos = $('p').css('cursor', 'pointer');

    parrafos.click(function(){
        var that = $(this);
       if( !that.hasClass('grande')){
           that.addClass('grande');
       }else{
        that.removeClass('grande');
       }
    });

    //Selectores de atributo

    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');

    //
    $('p, a').addClass('margen_superior');

    //
    var busqueda = $('#caja').find('.resaltado');
    var busqueda2 = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
    var busqueda3 = $('#elemento2').parent().parent().find('.resaltado');

    console.log(busqueda3);

});