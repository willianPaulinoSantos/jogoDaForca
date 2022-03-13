import removeClasses from './removeClasses.js';
import desenhaTracosLetras from './desenhaTracosLetras.js';
import desenhaForca from "./desenhaForca.js";
import checaAcertosErros from './checaAcertosErros.js'
import sorteiaPalavra from "./sorteiaPalavra.js";


export default function rodaJogo(pagina, areaJogo, mensagemFinalJogo) {
    const palavras = ["PEDRA", "JAZZ", "TONTO", "TELA", "COR", "TELA", "GELO",
        "AMOR", "CORPO", "ADVOGADO", "CAMISETA", "COMPRA", "SERVIDOR", "FUTEBOL", "JORNAL",
        "CORRIDA", "PARALELO", "VENCEDOR", "PERDEDOR", "CORAGEM", "EMPRESA", "JAVA", "CADEIRA",
        "PERNA", "CAIXA", "CARTEIRA", "AMARELO", "BLUSA", "PARCELA", "CREDITO", "ERVA", "CALULAR",
        "PAPEL", "CARREIRA"];

    let letraDigitada;
    let letrasDigitadas = [];
    let xLetrasI = [];
    let xLetrasF = [];
    let yLetra = 370;
    let tela = document.querySelector('.tela-jogo');
    let pincel = tela.getContext('2d');
    pincel.lineWidth = 5;
    pincel.strokeStyle = 'black';
    pincel.clearRect(0, 0, 1200, 400);

    removeClasses(areaJogo, mensagemFinalJogo);

    let palavraForca = palavras[sorteiaPalavra()];
    console.log(palavraForca);
    desenhaTracosLetras(palavraForca, pincel, xLetrasI, xLetrasF);
    desenhaForca(pincel);

    pagina.addEventListener('keydown', function (event) {
        letraDigitada = event.key.toUpperCase();
        checaAcertosErros(letraDigitada, letrasDigitadas, event.keyCode, palavraForca, xLetrasI, xLetrasF, yLetra, pincel);
    });
}