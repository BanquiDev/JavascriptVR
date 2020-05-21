$(document).ready(function(){
    // slider
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    }
    // post
    if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia '+ moment().format("dddd")+" "+moment().format("Do")+ " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Aspernatur vitae voluptate quam. Cupiditate aut non asperiores temporibus ipsa, velit, laudantium maxime nulla impedit pariatur architecto facere obcaecati quod illo commodi!'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia '+ moment().format("dddd")+" "+moment().format("Do")+ " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Aspernatur vitae voluptate quam. Cupiditate aut non asperiores temporibus ipsa, velit, laudantium maxime nulla impedit pariatur architecto facere obcaecati quod illo commodi!'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia '+ moment().format("dddd")+" "+moment().format("Do")+ " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Aspernatur vitae voluptate quam. Cupiditate aut non asperiores temporibus ipsa, velit, laudantium maxime nulla impedit pariatur architecto facere obcaecati quod illo commodi!'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia '+ moment().format("dddd")+" "+moment().format("Do")+ " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Aspernatur vitae voluptate quam. Cupiditate aut non asperiores temporibus ipsa, velit, laudantium maxime nulla impedit pariatur architecto facere obcaecati quod illo commodi!'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia '+ moment().format("dddd")+" "+moment().format("Do")+ " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit Aspernatur vitae voluptate quam. Cupiditate aut non asperiores temporibus ipsa, velit, laudantium maxime nulla impedit pariatur architecto facere obcaecati quod illo commodi!'
        },
        
    ];
    
    posts.forEach((item, index) =>{
        var post = `
        <article id="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                        <a href="#" class="boton">Leer Mas</a>
                </article>
        `
        $('#posts').append(post);
    });
}
    // THEMES FONDOS DE PANTALLA

    var theme = $('#theme');
  $('#green').click(function(){
      theme.attr("href", "./css/green.css");
  });
  $('#blue').click(function(){
    theme.attr("href", "./css/blue.css");
    });
    $('#red').click(function(){
        theme.attr("href", "./css/red.css");
    });

    //SCROLL UP
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    
    //login falso
    $('#login form').submit(function(){
        var form_name = $('#form_name').val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem('form_name');
    if(form_name != null && form_name != 'undefined'){
        var about = $('#about p');

    about.html('<br><strong> Bienvenido '+ form_name+'</strong><hr>');
    $('#login').hide();
    about.append("<br><a href='#' id='logout'>Cerrar Sesion</a>");

    $('#logout').click(function(){
        localStorage.clear();
        location.reload();
    })
    }

    //Acordeon
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }

    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        

        setInterval(() => {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
        
    }

    //Validacion de Contacto
    if(window.location.href.indexOf('contact') > -1){

        $('form input[name="date"]').datepicker({
            dateFormat: "dd-mm-yy"
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
          });
    }
});