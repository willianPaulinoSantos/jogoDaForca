export default function exibeMensagemFimDoJogo(classeDesfecho, classeMensagem, mensagem) {
	areaJogo.classList.add(classeDesfecho);
	mensagemFinalJogo.textContent = mensagem;
	mensagemFinalJogo.classList.remove("invisible");
	mensagemFinalJogo.classList.add(classeMensagem);
}