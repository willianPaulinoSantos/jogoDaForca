const palavras = ["PEDRA", "JAZZ", "TONTO", "TELA", "COR", "TELA", "GELO",
"AMOR", "CORPO", "ADVOGADO", "CAMISETA", "COMPRA", "SERVIDOR", "FUTEBOL", "JORNAL",
"CORRIDA", "PARALELO", "VENCEDOR", "PERDEDOR", "CORAGEM", "EMPRESA", "JAVA", "CADEIRA", 
"PERNA", "CAIXA", "CARTEIRA", "AMARELO", "BLUSA", "PARCELA", "CREDITO", "ERVA", "CALULAR", 
"PAPEL", "CARREIRA"];


let tela = document.querySelector('.tela-jogo');
let pincel = tela.getContext('2d');
pincel.lineWidth = 5; 
pincel.strokeStyle = 'black'; 
let areaJogo = document.querySelector('.area-jogo');
let pagina = document.querySelector('body');
let cabecalho = document.querySelector('.cabecalho');
let mensagemFinalJogo = document.querySelector('.mensagem-vitoria');



const espaco = 35;
let contaErros;
let contaAcertos;
let letraDigitada;
let letrasDigitadas = [];
let codigoLetraDigitada;
let codigoValido = false;
let desenhou;
let fimDoJogo = false; 

let xLetrasI = [];
let xLetrasF = [];
let yLetra = 370; 

let xLetraErrada;
let yLetraErrada;

let botaoIniciar = document.querySelector(".novo-jogo");
botaoIniciar.addEventListener('click', function(){
	document.location.reload(true);
})


rodaJogo();


function rodaJogo (){
	removeClasses();
	xLetraErrada = 500;
	yLetraErrada = 170;
	contaAcertos = 0;
	contaErros = 0;
	desenhou = false;
	pincel.clearRect(0, 0, 1200, 400);

	let palavraForca = iniciaJogo(palavras);
	desenhaTracosLetras(palavraForca);
	desenhaForca();

	pagina.addEventListener('keydown', function (event){
		letraDigitada = event.key.toUpperCase();
		checaAcertosErros(letraDigitada, letrasDigitadas, event.keyCode, palavraForca, xLetrasI, xLetrasF, yLetra);
	});
}


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

function desenhaBoneco (contaErros) {
	raio = 40;
	pincel.fillStyle = 'black';
	pincel.beginPath();
	pincel.arc(270, 100+raio, raio, 0, 2 * Math.PI);
	pincel.stroke();
	if (contaErros == 2) {
		pincel.beginPath();
		pincel.moveTo(270, 100+2*raio);
		pincel.lineTo(330, 160+2*raio);
		pincel.stroke();
	}
	if (contaErros == 3) {
		pincel.beginPath();
		pincel.moveTo(270, 100+2*raio);
		pincel.lineTo(210, 160+2*raio);
		pincel.stroke();
	}
	if (contaErros == 4) {
		pincel.beginPath();
		pincel.moveTo(270, 100+2*raio);
		pincel.lineTo(270, 220+2*raio);
		pincel.stroke();
	}
	if (contaErros == 5) {
		pincel.beginPath();
		pincel.moveTo(270, 220+2*raio);
		pincel.lineTo(200, 280+2*raio);
		pincel.stroke();
	}
	if (contaErros == 6) {
		pincel.beginPath();
		pincel.moveTo(270, 220+2*raio);
		pincel.lineTo(340, 280+2*raio);
		pincel.stroke();
	}
}




function checaAcertosErros (letraDigitada, letrasDigitadas, codigoLetra, palavraForca, xLetrasI, xLetrasF, yLetra){
	let xDesenhaLetra = 0;
	desenhou = false;
	codigoValido = checaCodigoLetra(codigoLetra);

	if (codigoValido) {
		desenhou = checaAcerto(letraDigitada, letrasDigitadas, palavraForca, xLetrasI, xLetrasF, yLetra, xDesenhaLetra);
		
		checaErro(palavraForca, letraDigitada, desenhou);

		letrasDigitadas.push(letraDigitada);
	}
}

function checaCodigoLetra(codigoLetra){
	if (codigoLetra >= 65 && codigoLetra <= 90)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function checaAcerto(letraDigitada, letrasDigitadas, palavraForca, xLetrasI, xLetrasF, yLetra){
	for (let i = 0; i < palavraForca.length; i++){
		if (letraDigitada == palavraForca[i] && letraDigitada != letrasDigitadas[i])
		{	
			xDesenhaLetra = ((xLetrasI[i] + xLetrasF[i])/2)-12;
			desenhaLetra(letraDigitada, xDesenhaLetra, yLetra);
			contaAcertos++;
			checaVitoria(contaAcertos, palavraForca);
			desenhou = true;
			return desenhou;
		}
	}
	return desenhou;
}

function checaErro(palavraForca, letraDigitada, desenhou){
	if (desenhou == false && palavraForca.length != 0){
		desenhou = true;
		contaErros++;
		checaDerrota(contaErros, palavraForca);
		desenhaBoneco(contaErros);
		desenhaLetraErrada(letraDigitada);
	}
}

function desenhaLetra(letraDigitada, xLetra, yLetra) {
	pincel.font = "40px Arial";
	pincel.textBaseline = 'alphabetic';
	pincel.fillText(letraDigitada, xLetra, yLetra);
}

function desenhaLetraErrada(letraDigitada){
	pincel.font = "40px Arial";
	pincel.textBaseline = 'alphabetic';
	pincel.fillText(letraDigitada, xLetraErrada, yLetraErrada);
	xLetraErrada += 60;
}

function checaVitoria (contaAcertos, palavraForca) {
	if (contaAcertos == palavraForca.length){
		exibeMensagemFimDoJogo("voce-venceu", "mensagem-vitoria","Você Venceu! Parabéns");
		palavraForca = "";
	}
}

function checaDerrota (contaErros, palavraForca){
	if (contaErros == 6){
		exibeMensagemFimDoJogo("voce-perdeu", "mensagem-derrota", `Você Perdeu! A palavra era: \n${palavraForca}`);
	}
}

function exibeMensagemFimDoJogo(classeDesfecho, classeMensagem, mensagem){
	areaJogo.classList.add(classeDesfecho);
	mensagemFinalJogo.textContent = mensagem;
	mensagemFinalJogo.classList.remove("invisible");
	mensagemFinalJogo.classList.add(classeMensagem);
	fimDoJogo = true;
}

function removeClasses(){
	areaJogo.classList.remove('voce-venceu');
	areaJogo.classList.remove('voce-perdeu');
	mensagemFinalJogo.classList.add('invisible');
	mensagemFinalJogo.classList.remove('mensagem-vitoria');
	mensagemFinalJogo.classList.remove('mensagem-derrota');
	mensagemFinalJogo.innerHTML = "";
}