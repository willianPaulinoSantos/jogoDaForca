import rodaJogo from "../scripts/rodaJogo.js";


let pagina = document.querySelector('body');
let areaJogo = document.querySelector('.area-jogo');
let mensagemFinalJogo = document.querySelector('.mensagem-vitoria');



let botaoIniciar = document.querySelector(".novo-jogo");
botaoIniciar.addEventListener('click', function () {
	document.location.reload(true);
})


rodaJogo(pagina, areaJogo, mensagemFinalJogo);
