$(document).ready(function(){
	var video 	= document.getElementById('video');
	var pbar	= document.getElementById('progress-bar');
	
	var tempo_total = video.duration;
	var tempo;
	var atualiza;
	
	/*
	video.addEventListener('playing',function(){
		alert('Video em execução.');
	});
	video.addEventListener('pause',function(){
		alert('Video pausado.');
	});
	*/
	// --------------------- INICIO --------------------- //
	$('#control').click(function(e){
		e.preventDefault();
		if(video.paused){
			//Inicia video
			video.play();
			
			//Altera icone
			$('#control').children().attr('class','mdi mdi-pause-circle-outline mdi-36px');
			
			//Atualiza barra de progresso
			atualiza = setInterval(function(){
				if(!video.paused){
					tempo = (868*video.currentTime)/tempo_total;
					pbar.style.width = parseInt(tempo)+'px';
				}
			},500);
		} else{
			//Pausa video
			video.pause();
			
			//Altera icone
			$('#control').children().attr('class','mdi mdi-play-circle-outline mdi-36px');
			
			//Imepede atualização da barra
			clearInterval(atualiza);
		}
	});
	$('#stop').click(function(e){
		e.preventDefault();
		pbar.style.width = '0px';
		
		//Retorna video ao inicio
		video.load();
		
		//Imepede atualização da barra
		clearInterval(atualiza);
	});
	$('#rewind').click(function(e){
		e.preventDefault();
		//Recarrega video
		if(video.paused){
			video.load();
			pbar.style.width = '0px';
			
			//Imepede atualização da barra
			clearInterval(atualiza);
		} else{
			video.load();
			video.play();
			
			//Atualiza barra de progresso
			atualiza = setInterval(function(){
				if(!video.paused){
					tempo = (868*video.currentTime)/tempo_total;
					pbar.style.width = parseInt(tempo)+'px';
				}
			},500);
		}
	});
	// --------------------- FIM --------------------- //
});