$(document).ready(function(){

});
$(window).load(function(){
	carrossel();
});
$(window).resize(function(){


});


$(window).scroll(function(){

});


function carrossel(){
	var medida = 0;
	var contCarrossel = 0;
	idxCarrossel = 0;
	carrosselItens = $('.carrossel-1 .item').length;
	carrosselItensPrev = carrosselItens  - 1;

	console.log('carrosselItens' + carrosselItens);

	console.log('idxCarrossel' + idxCarrossel);

	$('.carrossel-1 .item').mouseenter(function(){
		//aumentaLargura(this);
	});

	$('.carrossel-1 ').mouseleave(function(){
		//diminuiLargura(this);
	});

	$('.carrossel-1 #item1').click(function(){
		smoothScroll.animateScroll(
      document.getElementById('servicos') // Node to scroll to. ex. document.querySelector( '#bazinga' )
      //toggle, // Node that toggles the animation, OR an integer. ex. document.querySelector( '#toggle' )
      //options // Classes and callbacks. Same options as those passed into the init() function.
    );
		abreSanfona(this);

		setTimeout(function(){
      $('.comum').fadeOut(0).css({opacity:1});
      // GAMBIARRA: Adicionei ao css o opacity 0, assim usando transicoes o elemente some
      // mas para continuar tudo funcionando o elemento precisa estar visível
      // então aqui tiramos a opacidade na força ;D

			$('.travado').addClass('gatilho');
      mostraConteudoInterno();
		}, 500);

		$(this).removeClass('item-transition');
		idxCarrossel = $('#servicos .item').index(this);

			console.log('idxCarrossel' + idxCarrossel);


	});


	function mostraConteudoInterno(){
		//sanfonaInterna();
    $('#servicos .internas').show();
    $('#servicos .internas .capa-2').show();
    //	$('#servicos .item').css('height', 'auto');
    $('#servicos .carrossel').css('height', 'auto');
    $('#servicos .item.travado').css('display', 'block');

    $(' #servicos .item').animate({height:528}, 1000, function(){
      $('main > :not(#servicos)').css({ 'display':'none'});
    });
    sanfonaText();
    $('#servicos ').css('height', 'auto');

    $('#servicos').removeClass('travado');
    //--

    $('.travado').addClass('gatilho-voltar');
		$('.gatilho').removeClass('gatilho');

		$('.gatilho-voltar').append("<div class='masck' />");

		//por enquanto ira rodar apenas 3imagens
		$('#servicos #item2, #servicos #item3, #servicos #item6, #servicos #item7').remove();

		carrosselItens = $('.carrossel-1 .item').length;
		carrosselItensPrev = carrosselItens  - 1;
		$('#servicos .internas .capa .content').hide();
 		$('#servicos .internas .capa .content').eq(0).show();
	};

	/*$(document).on('click','.gatilho-voltar', function(){
		sanfonaVoltar();
		$(this).removeClass('gatilho-voltar');
	});*/


	// funções

	// efeito no hover
	function aumentaLargura( el ){
		if( !$('#servicos').find('.item').hasClass('travado')){ console.log('aumentaLargura');
		 	 medida = $(el).width();
			 $('.carrossel-1 .item').stop(true, true).css( 'width','10%').removeClass('active');
			 $(el).stop(true, true).css( 'width','30%').addClass('active');
			 newMedida = $( el ).width();
		}
	}

	// efeito reverso
	function diminuiLargura( el ){
	 	if( !$('#servicos').find('.item').hasClass('travado')){ console.log('diminuiLargura');
			$('.carrossel-1 .item').stop(true, true).css( 'width','14.285%').removeClass('active');
	   }
	 }

 	function abreSanfona( el ){

 		if(  ! $('#servicos .item').hasClass('travado') ){ console.log('abreSanfona');

			medida = $(el).width();

			$('.carrossel-1 .item').addClass('comum');
			//$('.carrossel-1 .item').addClass('item-transition');
			$('.carrossel-1 .item').css('overflow', 'hidden');
			$('.carrossel-1 .item').stop(true, true).css( 'width',0).removeClass('active');

			//$(el).addClass('item-transition');
			//$(el).stop(true, true).css( 'width','100%').addClass('active travado');
			//$(el).stop(true, true).css( 'display','block');
			//$(el).stop(true, true).animate({  width:'100%'},2000).addClass('active travado');
			$(el).stop(true, true).css( 'width','100%').addClass('active travado');



			newMedida = $(el).width();
			$(el).removeClass('comum');
			//$(el).stop(true, true).css( 'display','block');


		}

 	}

 	function sanfonaText(){ console.log('sanfonaText');
 		if(  ! $('#servicos .item').hasClass('gatilho-voltar') ){
 			$('.carrossel .item article p').fadeIn(800);
 		}

 	}

  function sanfonaInterna(){
    console.log('sanfonaInterna');
    if( ! $('.travado').hasClass('gatilho-voltar')){

      $('#servicos .internas').show();
      $('#servicos .internas .capa-2').show();
      //	$('#servicos .item').css('height', 'auto');
      $('#servicos .carrossel').css('height', 'auto');
      $('#servicos .item.travado').css('display', 'block');


      $(' #servicos .item').animate({height:528},1500);
      $('#servicos ').css('height', 'auto');

      $('#servicos').removeClass('travado');
    }
}

 	// esconder interna
 	function sanfonaVoltar(){	 console.log('sanfonaVoltar');
		$('#servicos .internas, #servicos .capa-1, #servicos .capa-2').hide();
		$('#servicos .item.travado').css('display', 'block');
		$(' #servicos .item').animate({height:740},1000);
		$('#servicos .internas').hide();

		$('#servicos ').animate({height:740},1000);

		$('#servicos .travado').removeClass('gatilho');
		$('#servicos .travado').addClass('gatilho-voltar');
 	}

 	// passar para o proximo item da sanfona pela seta next
 	function sanfonaNext(){	 console.log('sanfonaNext');

 		if( idxCarrossel < carrosselItensPrev  ){
 			var ativo = $('#servicos  .travado').addClass('aux');
			$('#servicos .aux').next().addClass('travado gatilho-voltar active');
			$('#servicos .aux').removeClass('travado gatilho-voltar active aux').addClass('prev');
			$('#servicos .prev').fadeOut(0);
			$('#servicos .travado').fadeIn(200);

			idxCarrossel += 1;

			console.log('idxCarrossel ' + idxCarrossel )
 		}

 	}

 	// passar para o item anterior da sanfona pela seta prev
 	function sanfonaPrev(){	 console.log('sanfonaPrev');

 		if( idxCarrossel > 0  ){
 			var ativo = $('#servicos  .travado').addClass('aux');
			$('#servicos .aux').prev().addClass('travado gatilho-voltar active');
			$('#servicos .aux').removeClass('travado gatilho-voltar active aux').addClass('next');
			$('#servicos .next').fadeOut(0);
			$('#servicos .travado').fadeIn(200);

			idxCarrossel -= 1;

			console.log('idxCarrossel ' + idxCarrossel )
 		}

 	}






	$('#servicos .internas .capa .barra .left img').on('click', function(){
		sanfonaPrev();


 		$(this).attr('data-idx', idxCarrossel);

 		if( $(this).attr('data-idx') == 0){
			$('#servicos .internas .capa .content').hide();
 			$('#servicos .internas .capa .content').eq(0).show();
 		}

 		if( $(this).attr('data-idx') == 1){
 			$('#servicos .internas .capa .content').hide();
 			$('#servicos .internas .capa .content').eq(1).show();
 		}

 		if( $(this).attr('data-idx') == 2){
 			$('#servicos .internas .capa .content').hide();
 			$('#servicos .internas .capa .content').eq(2).show();
 		}


	});

	$('#servicos .internas .capa .barra .center img').on('click', function(){
		location.reload();
	});

	$('#servicos .internas .capa .barra .right img').on('click', function(){
		sanfonaNext();


 		$(this).attr('data-idx', idxCarrossel);

 		if( $(this).attr('data-idx') == 0){
			$('#servicos .internas .capa .content').hide();
 			$('#servicos .internas .capa .content').eq(0).show();
 		}

 		if( $(this).attr('data-idx') == 1){
 			$('#servicos .internas .capa .content').hide();
 			$('#servicos .internas .capa .content').eq(1).show();
 		}

 		if( $(this).attr('data-idx') == 2){
 			$('#servicos .internas .capa .content').hide();
 			$('#servicos .internas .capa .content').eq(2).show();
 		}


	});


}
