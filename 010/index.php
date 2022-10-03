<?php 
$p = 'Introduzindo videos com a tag \'video\'';
include_once '../cima.php'; 
?>
<div class="container">
	<div class="box">
		<video id="video" width="1000">
			<source src="../../videos/001.mp4" />
		</video>
		<div class="media-controls">
			<a href="#" id="control"><i class="mdi mdi-play-circle-outline mdi-36px"></i></a>
			<a href="#" id="stop"><i class="mdi mdi-square-outline mdi-36px"></i></a>
			<a href="#" id="rewind"><i class="mdi mdi-rewind-outline mdi-36px"></i></a>
		</div>
	</div>
</div>
<?php include_once '../baixo.php' ?>