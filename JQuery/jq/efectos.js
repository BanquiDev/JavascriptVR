$(document).ready(function(){
    var caja = $('#caja');
    $('#mostrar').hide();
    
    $('#mostrar').click(function(){
        $(this).hide();
        caja.fadeTo('slow', 1);
                //slideDown
        $('#ocultar').show();
                    
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        caja.fadeTo('slow', 0, function(){
            console.log("Cartel oculto");
        });
                    //slideUp
    });

    $('#todoEnUno').click(function(){
        caja.fadeToggle('fast', function(){
            console.log("cartel oculto");
        });
        //slideToggle
    })

    $('#animame').click(function(){
        caja.animate({
                      marginLeft: '500px',
                      fontSize: '40px',
                       height: '110px'}, 'slow')
                       .animate({
                           borderRadius: '900px',
                           marginTop: '80px'
                       }, 'slow')
                       .animate({
                           marginLeft: '0px',
                           borderRadius: '0px'
                       }, 'slow')
                       .animate({
                        marginTop: '0px',
                        borderRadius: '100px'
                    }, 'slow')
                    .animate({
                        marginLeft: '500px',
                        borderRadius: '100px'
                    }, 'slow');
    })
});