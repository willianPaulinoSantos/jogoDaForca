
const palavras = ["PEDRA", "JAZZ", "TONTO", "TELA", "CORAÇÃO", "EXCEÇÃO", "FOGÃO",
"AMOR", "CORPO", "ADVOGADO", "CAMISETA", "COMPRA", "SERVIDOR", "FUTEBOL", "JORNAL",
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
let codigoLetraDigitada;

let xLetrasI = [];
let xLetrasF = [];
let yLetra = 370; 

	

let botaoIniciar = document.querySelector(".novo-jogo");
botaoIniciar.addEventListener("click",function (){
	pincel.clearRect(0, 0, 1200, 400);
	let palavraForca = iniciaJogo(palavras);
	desenhaTracosLetras(palavraForca);
	desenhaForca();
	desenhaLetra(palavraForca);
});

function iniciaJogo(palavras){
	return palavras[sorteiaPalavra()];
}

function sorteiaPalavra() {
	let i = Math.floor(Math.random()* 10 * 3);
	return i;
}

function desenhaTracosLetras(palavraForca) {
	for (let i = 0; i < palavraForca.length; i++) {
		pincel.beginPath();
		xLetrasI[i] = 400 + i*100;
		xLetrasF[i] = 500 + i*100-espaco;
		pincel.moveTo(xLetrasI[i], 380);
		pincel.lineTo(xLetrasF[i], 380);
		pincel.stroke();
		console.log(palavraForca);
		console.log(`
		X inicial da ${i}a letra: ${xLetrasI[i]}
		X final da ${i}a letra: ${xLetrasF[i]}
		`);
	}
	console.log(xLetrasI);
	console.log(xLetrasF);
	checaLetra(palavraForca, xLetrasI, xLetrasF, yLetra);
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

function desenhaLetra(letraDigitada, xLetra, yLetra) {
	pincel.font = "40px Arial";
	pincel.textBaseline = 'alphabetic';
	pincel.fillText(letraDigitada, xLetra, yLetra);
	console.log(xLetra);
}


function checaLetra (palavraForca, xLetrasI, xLetrasF, yLetra){
	let xDesenhaLetra = 0;
	letraDigitada = recebeLetraDigitada();
	codigoLetraDigitada = recebeCodigoLetraDigitada();
	document.querySelector('body').addEventListener('keydown', function (event){
		if (codigoLetraDigitada >= 65 && codigoLetraDigitada <= 90) {
			for (let i = 0; i < palavraForca.length; i++){
				if (letraDigitada == palavraForca[i])
				{
					xDesenhaLetra = (xLetrasI[i] + xLetrasF[i])/2
					desenhaLetra(letraDigitada, xDesenhaLetra, yLetra);
				}
				else
				{
					continue;
				}
			}
		}
	})
}

function recebeLetraDigitada() {
	document.querySelector('body').addEventListener('keydown', function (event){
		letraDigitada = event.key;
		return letraDigitada;
	});
}

function recebeCodigoLetraDigitada (){
	document.querySelector('body').addEventListener('keydown', function (event){
		codigoLetraDigitada = event.keyCode;
		return codigoLetraDigitada;
	});
}

