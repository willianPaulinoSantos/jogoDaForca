export default function removeClasses(areaJogo, mensagemFinalJogo) {
	areaJogo.classList.remove('voce-venceu');
	areaJogo.classList.remove('voce-perdeu');
	mensagemFinalJogo.classList.add('invisible');
	mensagemFinalJogo.classList.remove('mensagem-vitoria');
	mensagemFinalJogo.classList.remove('mensagem-derrota');
	mensagemFinalJogo.innerHTML = "";
}