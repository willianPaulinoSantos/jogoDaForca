export default function desenhaLetraErrada(letraDigitada, xLetraErrada, yLetraErrada, pincel) {
	pincel.font = "40px Arial";
	pincel.textBaseline = 'alphabetic';
	pincel.fillText(letraDigitada, xLetraErrada, yLetraErrada);
	return xLetraErrada += 60;
}