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
	if ((4*a^3+27*b^2)%p != 0){
		return true;
	}else {
		return false;
	}
}