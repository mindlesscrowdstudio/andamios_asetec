// variables
//FUNCIONES



 $( document ).ready(function() {

  var anchoDiv = $('.galeria1').width();

 		//GALERIA
 	  $('.flexslider').flexslider({
    animation: "slide"
  });


    //TABS PROYECTOS
     $('.wrapperTabs .tab').on('click', function(event) {
     	//prevengo accion
        event.preventDefault();
        //REMUEVO CLASE POR SI YA FUE CLICKEADO
        $('.wrapperTabs .tab').removeClass('tabActive');
        //AGREGO CLASE A ESTE EN PARTICULAR
        $(this).addClass('tabActive');
        //RECUEPERO VALOR DE DATA
        var cual = $(this).data('tab');
        //REMUEVO CLASE POR SI YA SE MOSTRO
        $('.wrapperContentTab  .contentTab').removeClass('projectActive');
        //PASO MI DATA PARA SABER CUAL MOSTRAR
        $('.wrapperContentTab .atributo' + cual).addClass('projectActive');
    });

     //TAB VALORES NOSOTROS
     $('#valores-nav .titleValores').on('click',function(event){
     	$('#valores-nav .titleValores').removeClass('active');
     	$(this).addClass('active');
     	var queValor = $(this).data('rel');
     	console.log(queValor);
     	$('.wrapperValores .contenedorValores').removeClass('valorActive');
     	$('.wrapperValores .valor' + queValor).addClass('valorActive');
     });

     //lightbox
     $('.triggerLightbox').on('click',function(event){
     	var dataProyecto = $(this).data('proyecto');
     	//console.log("es proyecto "+ dataProyecto);
     	$('.lightboxContent').removeClass('noWeight').addClass('weight');
      /*funciona para cargarlo con otro html solo en firefox xq se ejecuta del lado del server
        firefox es el unico navegador que nos deja hacer este tipo de cosas sin tener un server :)
        con los includes si va funcionar ya cuando este en el ambiente de pruebas.
      */
      //$('#loader').load("galerias/galeria1.html #galeria1");
        $('.wrapperLight .galeria'+ dataProyecto).addClass('openGallery');


     });

    	$('.lightboxContent .wrapperBtn a').on('click',function(event){
    		$('.lightboxContent').removeClass('weight').addClass('noWeight');
    			$('.wrapperFlex').removeClass('openGallery');
    	  $('.lightboxContent').fadeOut();
     });



});//cierrra document ready
