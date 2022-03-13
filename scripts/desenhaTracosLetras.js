export default function desenhaTracosLetras(palavraForca, pincel, xLetrasI, xLetrasF) {
	
    const espaco = 35;

    for (let i = 0; i < palavraForca.length; i++) {
		pincel.beginPath();
		xLetrasI[i] = 400 + i * 100;
		xLetrasF[i] = 500 + i * 100 - espaco;
		pincel.moveTo(xLetrasI[i], 380);
		pincel.lineTo(xLetrasF[i], 380);
		pincel.stroke();
	}
}