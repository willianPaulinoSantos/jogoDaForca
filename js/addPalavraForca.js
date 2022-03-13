
let botaoSalvaPalavra = document.querySelector(".botao-salvar");
botaoSalvaPalavra.addEventListener("click", function (){
	 palavraUsuario = salvaPalavra();
});



var erros = []




function salvaPalavra(){
	var campoUsuario = document.querySelector("#palavra-usuario");
	let palavraInserida = campoUsuario.value;
	limpaEntradaUsuario(campoUsuario);
	return validaPalavra(palavraInserida);
}

function validaPalavra(palavra){
	let palavraValida = true;
	erros = [];
	
	checaTamanhoDaPalavra(palavra);
	procuraLetrasMinusculas(palavra);
	procuraPorNumeros(palavra);
	procuraCaracteresEspeciais(palavra);

	if(erros.length > 0){
		mostraErros(erros);
	}else{
		var ul = document.querySelector(".erros");
		ul.innerHTML = "";
	}
	return palavra;
}




function limpaEntradaUsuario(campoUsuario){
	campoUsuario.value = "";	
}


function checaTamanhoDaPalavra (palavra) {
	if (palavra.length > 8){
		erros.push("Excedeu o número de letras");
		return;
	}

}


function procuraLetrasMinusculas(palavra){
	for (var i = 0; i < palavra.length; i++) {
		if (palavra[i] != palavra[i].toUpperCase()){
			erros.push("Por favor, insira somente letras maiúsculas");
			return;
		}
	}	
}


function procuraPorNumeros(palavra) {
	let procuraNum = /\d/g;
	let checaNum = palavra.match(procuraNum);
	if (checaNum){
		erros.push("Por favor, não utilize números!");
		return;
	}
}


function procuraCaracteresEspeciais(palavra){
	let procuraAscento = /Á|À|Â|Ã|É|È|Í|Ï|Ó|Ô|Õ|Ö|Ú|Ç|Ñ/g;
	let checaAscento = palavra.match(procuraAscento)
	let procuraCaract = /\W/g;
	let checaCaract = palavra.match(procuraCaract);


	if(checaAscento != null){
		if(checaAscento) {
			erros.push("Por favor, não insira palavras com acento");
			return;
		}
	}
	if(checaCaract != null){
		if (checaCaract){
			erros.push("Por favor, não insira caracteres especiais.");
			return;
		}	
	}
}


function mostraErros(erros){
	var ul = document.querySelector(".erros");
	ul.innerHTML = "";
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

