import desenhaLetra from './desenhaLetra.js';
import checaVitoria from './checaVitoria.js'

export default function checaAcerto(letraDigitada, letrasDigitadas, palavraForca, xLetrasI, xLetrasF, yLetra, xDesenhaLetra, desenhou, pincel) {
	let contaAcertos = 0;
	for (let i = 0; i < palavraForca.length; i++) {
		if (letraDigitada == palavraForca[i] && letraDigitada != letrasDigitadas[i]) {
			xDesenhaLetra = ((xLetrasI[i] + xLetrasF[i]) / 2) - 12;
			desenhaLetra(letraDigitada, xDesenhaLetra, yLetra, pincel);
			contaAcertos++;
			checaVitoria(contaAcertos, palavraForca);
			desenhou = true;
			return desenhou;
		}
	}
	return desenhou;
}