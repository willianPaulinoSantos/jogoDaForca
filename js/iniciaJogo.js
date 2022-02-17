
//Script da página homeForca.html

const palavras = ["INTRIGANTE", "JAZZ", "TONTO", "AMPULHETA", "CORAÇÃO", "EXCEÇÃO", "GELADEIRA",
"AMOR", "CONSTITUCIONAL", "ADVOGADO", "CAMISETA", "COMPUTADOR", "SERVIDOR", "FUTEBOL", "JORNAL",
"TELEVISÃO", "PARALELO", "VENCEDOR", "PERDEDOR", "CORAGEM", "EMPRESA", "JAVASCRIPT", "CADEIRA", 
"BRAÇO", "ABRAÇO", "CARTÃO", "AMARELO", "BLUSA", "PARCELA", "CREDIÁRIO"];


var botaoIniciar = document.querySelector(".inicia-jogo");
botaoIniciar.addEventListener("click",function (){

	var palavraForca = iniciaJogo(palavras);
	console.log(palavraForca);
});


function iniciaJogo(palavras){
	return palavras[sorteiaPalavra()];
}

function sorteiaPalavra() {
	var i = Math.floor(Math.random()* 10 * 3);
	return i
}







