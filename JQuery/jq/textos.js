$(document).ready(function(){
    reloadLink();

    $('#addbutton').removeAttr('disabled')
        .click(function(){
        $('#menu').append('<li><a href="'+$('#addlink').val()+'"></a></li>');
        $('#addlink').val('');
        reloadLink();
    })
/// con el metodo html() sacas todos los li que haya y agregas este
/// prepend() agrega al principio de la lista
/// before() lo agrega antes del elemento #menu
/// after() lo agrega despues del elemento #menu
   

});

function reloadLink(){
    $('a').each(function(index){
        var that = $(this);
       var enlace = that.attr("href");
       //agrego atributo y abre en una pestana nueva
        that.attr('target', '_blank');

       that.text(enlace);
       
    });
}