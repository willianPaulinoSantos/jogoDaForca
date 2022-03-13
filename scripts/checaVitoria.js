import exibeMensagemFimDoJogo from "./exibeMensagemFimDoJogo.js";

export default function checaVitoria(contaAcertos, palavraForca) {
	if (contaAcertos == palavraForca.length) {
		exibeMensagemFimDoJogo("voce-venceu", "mensagem-vitoria", "Você Venceu! Parabéns");
		palavraForca = "";
	}
}