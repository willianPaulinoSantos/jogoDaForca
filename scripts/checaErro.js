import checaDerrota from "./checaDerrota.js";
import desenhaBoneco from './desenhaBoneco.js'
import desenhaLetraErrada from "./desenhaLetraErrada.js";

export default function checaErro(palavraForca, letraDigitada, desenhou, contaErros, pincel) {
	let xLetraErrada = 500;
	let yLetraErrada = 170;
	
	if (desenhou == false && palavraForca.length != 0) {
		desenhou = true;
		contaErros++;
		checaDerrota(contaErros, palavraForca);
		desenhaBoneco(contaErros, pincel);
		desenhaLetraErrada(letraDigitada, xLetraErrada, yLetraErrada, pincel);
		xLetraErrada+=60;
	}
}