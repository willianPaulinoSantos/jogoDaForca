export default function desenhaForca(pincel) {
    pincel.beginPath();
    pincel.moveTo(30, 380);
    pincel.lineTo(60, 300);
    pincel.lineTo(90, 380);
    pincel.lineTo(28.03, 380);
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(60, 300);
    pincel.lineTo(60, 50);
    pincel.lineTo(270, 50);
    pincel.lineTo(270, 100);
    pincel.stroke();
}