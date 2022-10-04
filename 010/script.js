$(document).ready(function(){
	var video 	= document.getElementById('video');
	var pbar	= $('#progress-bar');
	var control = $('#control');
	var stop 	= $('#stop');
	var rewind  = $('#rewind');
	
	var tempo_total = video.duration;
	var tempo;
	
	/*
	video.addEventListener('playing',function(){
		alert('Video em execução.');
	});
	video.addEventListener('pause',function(){
		alert('Video pausado.');
	});
	*/
	// --------------------- INICIO --------------------- //
	setInterval(function(){
		if(!video.paused){
			tempo = (750*video.currentTime)/tempo_total;
			pbar.attr('width',parseInt(tempo));
		}
	},500);
	control.click(function(e){
		e.preventDefault();
		if(video.paused){
			//Inicia video
			video.play();
			control.children().attr('class','mdi mdi-pause-circle-outline mdi-36px');
		} else{
			//Pausa video
			video.pause();
			control.children().attr('class','mdi mdi-play-circle-outline mdi-36px');
		}
	});
	stop.click(function(e){
		e.preventDefault();
		//Retorna video ao inicio
		video.load();
	});
	rewind.click(function(e){
		e.preventDefault();
		//Recarrega video
		if(video.paused){
			video.load();
		} else{
			video.load();
			video.play();
		}
	});
	// --------------------- FIM --------------------- //
});