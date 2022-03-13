export default function desenhaBoneco(contaErros, pincel) {
	let raio = 40;
	pincel.fillStyle = 'black';
	pincel.beginPath();
	pincel.arc(270, 100 + raio, raio, 0, 2 * Math.PI);
	pincel.stroke();
	if (contaErros == 2) {
		pincel.beginPath();
		pincel.moveTo(270, 100 + 2 * raio);
		pincel.lineTo(330, 160 + 2 * raio);
		pincel.stroke();
	}
	if (contaErros == 3) {
		pincel.beginPath();
		pincel.moveTo(270, 100 + 2 * raio);
		pincel.lineTo(210, 160 + 2 * raio);
		pincel.stroke();
	}
	if (contaErros == 4) {
		pincel.beginPath();
		pincel.moveTo(270, 100 + 2 * raio);
		pincel.lineTo(270, 220 + 2 * raio);
		pincel.stroke();
	}
	if (contaErros == 5) {
		pincel.beginPath();
		pincel.moveTo(270, 220 + 2 * raio);
		pincel.lineTo(200, 280 + 2 * raio);
		pincel.stroke();
	}
	if (contaErros == 6) {
		pincel.beginPath();
		pincel.moveTo(270, 220 + 2 * raio);
		pincel.lineTo(340, 280 + 2 * raio);
		pincel.stroke();
	}
}