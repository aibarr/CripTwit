//ECC: Encriptado curva elíptica
//Y²=x³+ax+b

function encECC(tPlano){
	//Cambiar el textoplano a entero
	var tCifrado;
	return tCifrado;
}

function sumaEliptica(a, b){
	var resultado;
	return resultado;
}

function multiEpliptica(veces, multiplicando){
	var resultado;
	return resultado;
}

// Validación: comprueba si 'numero' es primo.
function esPrimo(numero){
	if(numero == 1 || numero == 2){
		return true;
	} else{
		for (i = 2; i < numero; i++){
			if(numero % i == 0){
				return false;
			}
		return true;
		}
	}
}

// Validación: comprueba si (a,b) es válido
function sonCtesValidas(a, b, p){
	if ((4*Math.pow(a,3)+27*Math.pow(b,2))%p != 0){
		return true;
	}else {
		return false;
	}
}

// Construcción: crea tablas de puntos para constantes ECC dadas
function puntosECC(a, b, p, ga, gb){
	var paso1 = [];
	var paso2 = [];
	var paso3 = [];
	var paso4 = [];
	var paso5 = [];

	for(i = 0; i < p; i++){
		paso3[i] = [];
		paso4[i] = [];
	}

	for(i = 0; i < p; i++){
		paso1[i] = (Math.pow(i,3)+a*i+b)%p;
	}
	//return paso1;

	for(i = 0; i < p; i++){
		paso2[i] = Math.pow(i,2)%p;
	}
	//return paso2;

	for(i = 0; i < p; i++){
		paso3[paso2[i]].push(i);
	}
	//return paso3;

	for(i = 0; i < p; i++){
		paso4[i] = paso3[paso1[i]];
	}
	//return paso4[0].length;

	var contador = 0;
	for(i = 0; i < p; i++){
		if(paso4[i].length > 0){
			var aux = [];
			for(j = 0; j < paso4[i].length; j++){
				paso5[contador] = []
				paso5[contador].push(i);
				paso5[contador].push(paso4[i][j]);
				contador++;
			}
		}
	}
	return paso5;
}