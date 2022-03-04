
//Script da página homeForca.html

const palavras = ["PEDRA", "JAZZ", "TONTO", "TELA", "CORAÇÃO", "EXCEÇÃO", "FOGÃO",
"AMOR", "CORPO", "ADVOGADO", "CAMISETA", "COMPUTADOR", "SERVIDOR", "FUTEBOL", "JORNAL",
"CORRIDA", "PARALELO", "VENCEDOR", "PERDEDOR", "CORAGEM", "EMPRESA", "JAVA", "CADEIRA", 
"BRAÇO", "ABRAÇO", "CARTÃO", "AMARELO", "BLUSA", "PARCELA", "CREDITO", "ERVA", "CALULAR", 
"PAPEL"];

let tela = document.querySelector('.tela-jogo');
let pincel = tela.getContext('2d');
pincel.lineWidth = 5; 
pincel.strokeStyle = 'black'; 
const espaco = 35;
let contaErros = 0;
let letraDigitada; 


	

let botaoIniciar = document.querySelector(".novo-jogo");
botaoIniciar.addEventListener("click",function (){
	pincel.clearRect(0, 0, 1200, 400);
	let palavraForca = iniciaJogo(palavras);
	desenhaTracosLetras(palavraForca);
	desenhaForca();
	checaLetra(palavraForca);
	
//	desenhaLetra(palavraForca);
	console.log(palavraForca);
});

function iniciaJogo(palavras){
	return palavras[sorteiaPalavra()];
}

function sorteiaPalavra() {
	let i = Math.floor(Math.random()* 10 * 3);
	return i;
}
//fillRect(xi, yi, xf, yf)
function desenhaTracosLetras(palavraForca) {
	for (let i = 0; i < palavraForca.length; i++) {
		pincel.beginPath();
		pincel.moveTo(400 + i*100, 380);
		pincel.lineTo(500 + i*100-espaco, 380);
		pincel.stroke();
		console.log(palavraForca);
	}
}

function desenhaForca() {
		pincel.beginPath();
		pincel.moveTo(30, 380);
		pincel.lineTo(60, 300);
		pincel.lineTo(90, 380);
		pincel.lineTo(28.03, 380);
		pincel.stroke();
		pincel.beginPath();
		pincel.moveTo(60, 300);
		pincel.lineTo(60, 50);
		pincel.lineTo(270, 50);
		pincel.lineTo(270, 100);
		pincel.stroke();
}

function desenhaLetra(letraDigitada) {
	pincel.font = "40px Arial";
	pincel.textBaseline = 'alphabetic';
	let xLetra = 415;
	pincel.fillText(letraDigitada, xLetra, 370);
	xLetra += 100;
	
}

function checaLetra(palavraForca) {
	document.querySelector('body').addEventListener('keydown', function (event, palavraForca){
		if (event.keyCode >= 65 && event.keyCode <= 90) {
			letraDigitada = event.key;
			console.log(letraDigitada);
			console.log(`printei via checa letra: ${palavraForca}`);
			for (let i = 0; i < palavraForca.length; i++){
				if (letraDigitada == palavraForca[i]){
					desenhaLetra(letraDigitada);
				}
			}
		}
	});
}