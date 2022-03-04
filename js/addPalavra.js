
var botaoSalvaPalavra = document.querySelector(".salva-palavra");
botaoSalvaPalavra.addEventListener("click", function (){
	var palavraUsuario = salvaPalavra();
	console.log(palavraUsuario);
	console.log(erros);
});


var erros = []


function salvaPalavra(){
	var campoUsuario = document.querySelector("#palavra-usuario");
	var palavraUsuario = campoUsuario.value;
	limpaEntradaUsuario(campoUsuario);
	return validaPalavra(palavraUsuario);
}

function validaPalavra(palavra){
	var palavraValida = true;
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
		console.log(palavra.toUpperCase());
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
	var procuraNum = /\d/g;
	var checaNum = palavra.match(procuraNum);
	if (checaNum){
		console.log("palavra sem números");
		erros.push("Por favor, não utilize números!");
		return;
	}
}


function procuraCaracteresEspeciais(palavra){
	var procuraAscento = /Á|À|Â|Ã|É|È|Í|Ï|Ó|Ô|Õ|Ö|Ú|Ç|Ñ/g;
	var checaAscento = palavra.match(procuraAscento)
	var procuraCaract = /\W/g;
	var checaCaract = palavra.match(procuraCaract);
	console.log("checaCaract = " + checaCaract + " " + typeof(checaCaract));
	console.log("checaAscento = " + checaAscento + " " + typeof(checaAscento));


	if(checaAscento) {
		if (checaCaract){
			if (checaAscento.length != checaCaract.length){
				erros.push("Por favor, não insira caracteres especiais.");
				return;
			}
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

