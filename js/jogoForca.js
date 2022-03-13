import rodaJogo from "../scripts/rodaJogo.js";


<<<<<<< HEAD



let tela = document.querySelector('.tela-jogo');
let pincel = tela.getContext('2d');
pincel.lineWidth = 5; 
pincel.strokeStyle = 'black'; 
let areaJogo = document.querySelector('.area-jogo');
=======
>>>>>>> 2a3b5cb6fbcb8595c1332de5933c2a4e89e59e47
let pagina = document.querySelector('body');
let areaJogo = document.querySelector('.area-jogo');
let mensagemFinalJogo = document.querySelector('.mensagem-vitoria');



let botaoIniciar = document.querySelector(".novo-jogo");
botaoIniciar.addEventListener('click', function () {
	document.location.reload(true);
})


rodaJogo(pagina, areaJogo, mensagemFinalJogo);
