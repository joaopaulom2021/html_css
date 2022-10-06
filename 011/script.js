setTimeout(function(){
	var canvas = document.getElementById('tela');
	var desenha = canvas.getContext('2d');
	
	desenha.fillStyle = '#FFFF00';
	desenha.fillRect(20,20,300,100);
},1000);