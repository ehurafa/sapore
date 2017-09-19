$('#segmentos .bloco-segmentos .eventos').on('click', function(){	
	segmentoToggle()
});
$('document').on('click', '#segmentos .clientes .slick-arrow',  function(){	
	segmentoToggle()
});


function segmentoToggle(){
	$('#segmentos .bloco-segmentos .titulo, #segmentos .bloco-segmentos .textos .texto').toggle();

}