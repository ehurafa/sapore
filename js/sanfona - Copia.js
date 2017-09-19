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
	 $('.carrossel-1 .item').mouseenter(function(){
	  	aumentaLargura(this);
	 });

	 $('.carrossel-1 ').mouseleave(function(){		
	 	diminuiLargura(this);
	  });

	 $('.carrossel-1 #item1').click(function(){ 
	 	abreSanfona(this);
	 	$('.comum').fadeOut(1300, function(){
	 		$('.travado').addClass('gatilho');
	 		sanfonaText();
	 	});

	 	$(this).removeClass('item-transition');



	 
	 });

	 $(document).on('click','.gatilho', function(){ 	
	 	sanfonaInterna();
	 	$('.travado').addClass('gatilho-voltar');
	 	$(this).removeClass('gatilho');
	 	$('.gatilho-voltar').append("<div class='masck' />");

	 });

	 $(document).on('click','.gatilho-voltar', function(){
	 	sanfonaVoltar();
	 	$(this).removeClass('gatilho-voltar');
	 });

	 
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
			$('.carrossel-1 .item').addClass('item-transition');
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

 	function sanfonaInterna(){	 console.log('sanfonaInterna');


 			if( ! $('.travado').hasClass('gatilho-voltar')){				

 				$('#servicos .internas').show();
			    $('#servicos .internas .capa-2').fadeIn();

			  //	$('#servicos .item').css('height', 'auto');
			    $('#servicos .carrossel').css('height', 'auto');
			  	$('#servicos .item.travado').css('display', 'block');
			  	
			  	
			    $(' #servicos .item').animate({height:528},1500);
			    $('#servicos ').css('height', 'auto');
			   
			    $('#servicos').removeClass('travado');
			   
	 		} 			
		 
 		}

 	function sanfonaVoltar(){	 console.log('sanfonaVoltar');
 			
 				$('#servicos .internas, #servicos .capa-1, #servicos .capa-2').hide();			
			  	$('#servicos .item.travado').css('display', 'block');
			  	$(' #servicos .item').animate({height:740},1000);
			  	$('#servicos .internas').hide();	
		
			    $('#servicos ').animate({height:740},1000);			   
			  
			    $('#servicos .travado').removeClass('gatilho');
			    $('#servicos .travado').addClass('gatilho-voltar');			
 			
		 
 		}
	 
	 
}



$('#servicos .internas .capa .barra .left img').on('click', function(){
	alert('left');
});

$('#servicos .internas .capa .barra .center img').on('click', function(){
	alert('center');
});

$('#servicos .internas .capa .barra .right img').on('click', function(){
	alert('right');
});