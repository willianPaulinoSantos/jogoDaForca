export default function desenhaLetra(letraDigitada, xLetra, yLetra, pincel) {
	pincel.font = "40px Arial";
	pincel.textBaseline = 'alphabetic';
	pincel.fillText(letraDigitada, xLetra, yLetra);
}