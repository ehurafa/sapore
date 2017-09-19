<!DOCTYPE html>
  <html class="no-js" lang="pt-br">
  
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
		<meta name="description" content="" />
		<meta name="author" content="Urban Summer" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes">
		<link rel="stylesheet" href="css/slick.css" />
		<link rel="stylesheet" href="css/style.css" />
		<link rel="stylesheet" href="css/diferenciais.css" />

		
		<link rel="stylesheet" href="css/timeline.css" />
		<link rel="stylesheet" href="css/responsive.css" />
		<script src="jquery.1.11.1.min.js"></script>
		<title>Sapore</title>
    </head>
    
	<body >

	<div class="loader">
		<img src="img/logo.png" />
	</div>
		<div class="general">
		
			
			<main>
				<?php include('slider.php'); ?>

				 <?php include('servicos.php'); ?>	

				<?php include('segmentos.php'); ?>	

				<?php include('timeline.php'); ?>	

				<?php include('diferenciais.php'); ?>


				<?php include('legado-olimpico.php'); ?>   

				<footer>
					<!-- <div class="line"></div>  -->
					<img src="img/footer.jpg">
				</footer>
				
			</main>
			<aside>
				<div class="bloco">

					<div class="interno">
						<!-- <img src="img/bg-menu.jpg" />  -->
						<div class="logo">
							<a href="#slider" data-scroll data-options='{ "easing": "easeInQuad" }'><img src="img/logo.png"></a>							
						</div>
						<div class="menu">

							<ul>
									<li><a href="#servicos" data-scroll data-options='{ "easing": "easeInQuad" }'>SERVIÇOS</a></li>
									<li><a href="#segmentos" data-scroll data-options='{ "easing": "easeInQuad" }'>SEGMENTOS</a></li>
									<li><a href="#timeline" data-scroll data-options='{ "easing": "easeInQuad" }'>HISTÓRIA</a></li>
									<li><a href="#diferenciais" data-scroll data-options='{ "easing": "easeInQuad" }'>DIFERENCIAIS</a></li>
									<li><a href="#legado-olimpico" data-scroll data-options='{ "easing": "easeInQuad" }'>LEGADO OLÍMPICO</a></li>
									
									<li class="sub">

										<a href="#" >QUEM SOMOS</a>
										<ul>
											<li><a href="quem-somos.html" >SOBRE A SAPORE</a></li>
											<li><a href="">25 ANOS DE HISTÓRIA</a></li>
											<li><a href="">TERRITÓRIO DE ATUAÇÃO</a></li>
											<li><a href="">RESPONSABILIDADE SOCIAL</a></li>
											<li><a href="">QUALIDADE E MEIO AMBIENTE</a></li>
											<li><a href="">SEJA SAPORE</a></li>
	
	
	
										</ul>

									</li>
									<li><a href="#">IMPRENSA</a></li>

									<li><a href="#">CONTATO</a></li>
									
							</ul>


						


						</div>
						<div class="busca">
							<img src="img/busca.png">
						</div>
					</div>
			
				</div>				
			</aside>
			
		
		</div>
		
		<script type="text/javascript" src="http://malsup.github.com/jquery.cycle.all.js"></script>
		<script type="text/javascript" src="js/slick.min.js"></script>
		<script type="text/javascript" src="http://malsup.github.com/jquery.cycle.all.js"></script>
		<script type="text/javascript" src="js/timeline.js"></script>
		<script type="text/javascript" src="js/sanfona.js"></script>		
		<script type="text/javascript" src="js/segmentos.js"></script>
		<script type="text/javascript" src="js/slider.js"></script>
		<script src="js/smooth-scroll.js"></script>
		<script type="text/javascript" src="js/scripts.js"></script>

		<script>
			smoothScroll.init();
		</script>
		
		
		
	
	</body>
</html>