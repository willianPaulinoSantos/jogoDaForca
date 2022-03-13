import checaErro from "./checaErro.js";
import checaAcerto from "./checaAcerto.js";
import checaCodigoLetra from "./checaCodigoLetra.js";

export default function checaAcertosErros(letraDigitada, letrasDigitadas, codigoLetra, palavraForca, xLetrasI, xLetrasF, yLetra, pincel) {
	let xDesenhaLetra = 0;
    let contaErros = 0;
    let codigoValido = false;
    
	let desenhou = false;
	codigoValido = checaCodigoLetra(codigoLetra);

	if (codigoValido) {
		desenhou = checaAcerto(letraDigitada, letrasDigitadas, palavraForca, xLetrasI, xLetrasF, yLetra, xDesenhaLetra, desenhou, pincel);

		checaErro(palavraForca, letraDigitada, desenhou, contaErros, pincel);

		letrasDigitadas.push(letraDigitada);
	}
}