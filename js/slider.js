
$(window).load(function(){
	 sliderActions();
});


var alt = $(window).height();
$('#servicos, #servicos .item').height(alt);


// slider
$(function() {
    $('.slideshow').cycle({
        fx:     'fade',
        speed:  '500',
        timeout: 5000,
        pager:  '#nav',
		slideExpr: '.item',
		 before : function(currSlideElement, nextSlideElement, options, forwardFlag) {
			 $(currSlideElement).find(".texto > *").addClass("prev-slide");
			 $(nextSlideElement).find(".texto > *").addClass("next-slide");
           //$('.slideshow .item .texto').animate({"right":"-500px"}, "50");
           /*$('.slideshow .item .texto h2, .slideshow .item .texto h3, .slideshow .item .texto p, .slideshow .item .texto figure').animate({opacity: 0}, 100);


             $('.slideshow .item-1').each(function(){
				var alturaTexto = $(this).find('.texto').height();   console.log('altura' + alturaTexto );

			});

             $('.slideshow .item-2').each(function(){
				var alturaTexto2 = $(this).find('.texto').height();   console.log('altura2' + alturaTexto2 );

			});
         */
        },
        after: function(currSlideElement, nextSlideElement, options, forwardFlag) {
					$(currSlideElement).find(".texto > *").removeClass("prev-slide");
					$(nextSlideElement).find(".texto > *").removeClass("next-slide");
           // $('.slideshow .item .texto').animate({"right":"80px"}, "400");
            /*$('.slideshow .item .texto h2, .slideshow .item .texto h3, .slideshow .item .texto p, .slideshow .item .texto figure').animate({opacity: 1}, 1000);


            $('.slideshow .item-1').each(function(){
				var alturaTexto = $(this).find('.texto').height();   console.log('altura' + alturaTexto );

			});
			$('.slideshow .item-2').each(function(){
				var alturaTexto2 = $(this).find('.texto').height();   console.log('altura2' + alturaTexto2 );

			});*/






        }
    });
    $('#nav a').text('');
});

function sliderActions(){
	$('.slideshow ').each(function(){
		//var imagem1 = $(this).find('.item-1 img').attr('src')
		///var imagem = $(this).find('img').attr('src');
		//var altImg = $(this).parent().find('.item-1 img').height();
		//var altImg = $(this).find('img').height(); alert(altImg)

		var altura = $(window).height();

		$(this).height(altura);
		$(this).find('.item').height(altura);
		$(this).find('.item .image').height(altura);
		/* $(this).find('.item .image').height(altura);
		$(this).find('.item .inner').height(altura);*/





	});






}
