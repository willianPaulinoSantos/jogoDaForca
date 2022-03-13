import rodaJogo from "../scripts/rodaJogo.js";






let tela = document.querySelector('.tela-jogo');
let pincel = tela.getContext('2d');
pincel.lineWidth = 5; 
pincel.strokeStyle = 'black'; 



let pagina = document.querySelector('body');
let areaJogo = document.querySelector('.area-jogo');
let mensagemFinalJogo = document.querySelector('.mensagem-vitoria');



let botaoIniciar = document.querySelector(".novo-jogo");
botaoIniciar.addEventListener('click', function () {
	document.location.reload(true);
})


rodaJogo(pagina, areaJogo, mensagemFinalJogo);
