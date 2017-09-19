$(document).ready(function(){
  
});
$(window).load(function(){  
 sections();

 $('.loader').hide();
 $('.general').fadeIn(500);
diferenciais();

//var alt = $(window).height();
 //$('#servicos, #servicos .item').height(alt);alert(alt);


});
$(window).resize(function(){ 
  sections();

});


$(window).scroll(function(){

});



function sections(){
	var altura = $(window).height();
	
	if( $(window).height() > 500){
		//$('aside, aside .bloco, .alturaa, .slideshow , .slideshow  .item').height(altura);
		///$('aside, aside .bloco, .alturaa, .slideshow , .slideshow  .item').height(altura);
		$('aside, aside .bloco').height(altura);
		//$('.section').css('min-height',  altura);
	}
	
}



/*
$(function() {
	$.scrollify({
		section : ".section",
	});
});
*/

$('#segmentos .clientes .inner').slick({

  infinite: true,
  speed: 300,
  slidesToShow: 1

});

// diferenciais


function diferenciais(){



	$('#diferenciais .inner').slick({

	  infinite: false,
	  speed: 300,
	  slidesToShow: 1,
	    variableWidth: true
	});

/*
	var largura = $('#diferenciais').width();
	var col1 =  largura * 0.3;
	var col2 =  largura * 0.7;

	$('#diferenciais .item:odd').width(col2);
	$('#diferenciais .item:even').width(col1);
	

*/
	
		
		
}

$('aside .menu .sub').on('click', function(){
	if( $(this).hasClass('active') ){
		$('aside .menu li.sub ul').hide(100);
		$(this).removeClass('active');
	}else{
		$('aside .menu li.sub ul').slideDown(300);
		$(this).addClass('active');
	}
	
	
});


