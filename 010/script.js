$(document).ready(function(){
	var video 	= document.getElementById('video');
	var control = $('#control');
	var stop 	= $('#stop');
	var rewind  = $('#rewind'); 
	
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
});