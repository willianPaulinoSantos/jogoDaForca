import sorteiaPalavra from "./sorteiaPalavra.js";

export default function iniciaJogo(palavras) {
	return palavras[sorteiaPalavra()];
}