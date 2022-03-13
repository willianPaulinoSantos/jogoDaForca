export default function checaDerrota(contaErros, palavraForca) {
	if (contaErros == 6) {
		exibeMensagemFimDoJogo("voce-perdeu", "mensagem-derrota", `Você Perdeu! A palavra era: \n${palavraForca}`);
	}
}