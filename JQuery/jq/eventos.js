
$(document).ready(function(){
    
    //mouse over mouse out

    var caja = $('#caja');
    /*
    caja.mouseover(function(){
        $(this).css("background", "red");
    })
    caja.mouseout(function(){
        $(this).css("background", "green");
    })
    */
    //hover

    function cambiaRojo(){
        $(this).css("background", "red");
    }

    function cambiaVerde(){
        $(this).css("background", "green");
    }
    caja.hover(cambiaRojo, cambiaVerde);

    //click, dobleclick
    caja.click(function(){
        $(this).css("background", "blue")
               .css("color", "white");
    })

    caja.dblclick(function(){
        $(this).css("background", "pink")
               .css("color", "orange");
    })

    // focus y blur
    var nombre = $("#nombre");
    var datos = $('#datos');

    nombre.focus(function(){
        $(this).css("border", "2px solid green");
    })

    nombre.blur(function(){
        $(this).css("border", "1px solid grey");
        datos.text($(this).val()).show();
    })

    //mousedown mouseup
    datos.mousedown(function(){
        $(this).css("border-color", "grey");
    });
    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    //mousemove
    var sigueme =  $("#sigueme");

    $(document).mousemove(function(){
        console.log("Coordenada en X: "+event.clientX);
        console.log("Coordenada en Y: "+event.clientY);
        sigueme.css('left', event.clientX)
                .css('top', event.clientY);
        $('body').css('cursor', 'none');
    })
});