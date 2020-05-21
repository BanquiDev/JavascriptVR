$(document).ready(function(){
    console.log("hola");
    var elemento = $('.elemento');
    elemento.draggable();

    //redimensionar
    elemento.resizable();

    //seleccionar

    //$('.lista').selectable();
    $('.lista').sortable({
        update: function(event, ui){
            console.log("ha cambiado la vista");
        }
    });

    // drop
    $('#elemento-movido').draggable();
    $('#area').droppable({
        drop: function(){
            console.log("has soltado algo adentro");
        }
    });

    // EFectos
//fold, slide, blind, puff, scale, shake, 
    $('#mostrar').click(function(){
        $('.caja-efectos').toggle('slide');
    })

    //tooltip
    $(document).tooltip();

    //
    $('#lanza-dialogo').click(function(){
        $('#pop-up').dialog();
    })

    $('#calendario').datepicker();


    $('#pestanas').tabs();
});