
// timeline
	var inicialW = 200;
	var newW = 600;
	var contPrev = 0;
	var contNext = 0;
	
	function newItem(){
		$('#timeline .content').each(function(){
			var primeiro = $(this).find('.item').eq(0).addClass('primeiro');
			var primeiroC = $(this).find('.item').eq(0).html();
			$(this).find('.primeiro').before("<div class='item novo' ></div>");
			$(this).find('.novo').html(primeiroC);
		});
	}
	newItem();
	function removeNewItem(){
		$('#timeline .content').each(function(){
			$(this).find('.novo').hide();
			$(this).find('.primeiro').show();
			
		});
	}
	
	 
$('.start span').on('click', function(){	alert('ok');
	$('.start').stop(true, true).css( 'width','0');
	$('#timeline').stop(true, true).css( 'width','80%');
	$('.slick-arrow').css('opacity',1);
	$('#timeline .item').stop(true, true).css( 'width', inicialW + 'px' );
	$('#timeline .item').eq(0).stop(true, true).css( 'width', newW + 'px').addClass('maior');	

			
});
	
$('#timeline .content').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  centerMode: false,
  useTransform:true,
  variableWidth: true,
  lazyLoad: 'ondemand'
}).on('init', function(event, slick){})
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){ })
        .on('afterChange', function(event, slick, currentSlide, nextSlide){  });

$('#timeline .slick-next').on('click', function(){

	$('.slick-prev').removeClass('slick-arrow-none');

	var qtd =  $('#timeline .slick-slide').length;
	var ultimo = qtd - 1;
	if( contNext !== ultimo ){
		contNext += 1;
	console.log('contNext' + contNext);
	}
	if( contPrev !== ultimo ){
		contPrev += 1;
	console.log('contPrev' + contPrev);
	}
	if( contNext == 1){
		$('.carrossel .item.novo').show();
	}
	if( ! $('#timeline .item ').eq(ultimo).hasClass('slick-current') ){
		$('.slick-slide').removeClass('maior');				
		$('.slick-current ').next().addClass('maior');		
	}		
	$('#timeline .item ').stop(true, true).css( 'width', inicialW + 'px' );			
	$('.maior ').stop(true, true).css( 'width',newW + 'px');
	
});


$('#timeline .slick-prev').on('click', function(){

	removeNewItem();

	if( contPrev > 1 ){
		$('.slick-slide').removeClass('maior');	
		$('.slick-current ').addClass('maior');
	}	

	$('#timeline .item ').stop(true, true).css( 'width', inicialW + 'px' );			
	$('.maior ').stop(true, true).css( 'width',newW + 'px');
	if( contPrev > 0 ){
		contNext -= 1;
	}
	if( contPrev > 0 ){
		contPrev -= 1;
	}	
	
});


