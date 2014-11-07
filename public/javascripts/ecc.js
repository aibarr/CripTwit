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

	// Inicialización de arreglos multidimensionales
	for(i = 0; i < p; i++){
		paso3[i] = [];
		paso4[i] = [];
	}

	//paso 1: buscar z=(x^3+ax+b)mod(p)
	for(i = 0; i < p; i++){
		paso1[i] = (Math.pow(i,3)+a*i+b)%p;
	}

	//paso 2: buscar z=(y^2)mod(p)
	for(i = 0; i < p; i++){
		paso2[i] = Math.pow(i,2)%p;
	}

	//paso 3: determinar dónde en el paso 2 se dan los valores del paso 1
	for(i = 0; i < p; i++){
		paso3[paso2[i]].push(i);
	}

	//paso 4: determinar qué valores hay en la posición del paso 3 que corresponde al valor del paso 1
	for(i = 0; i < p; i++){
		paso4[i] = paso3[paso1[i]];
	}

	//paso 5: los puntos validos son (posición paso 1, valores paso 4 para dicha posición)
	var contador = 0;
	for(i = 0; i < paso4.length; i++){
		for(j = 0; j < paso4[i].length; j++){
			paso5[contador] = []
			paso5[contador].push(i);
			paso5[contador].push(paso4[i][j]);
			contador++;
		}
	}

	//retorna arreglo de dimensiones (#e, 2), donde cada elemento contiene un par de valores.
	//El primer valor es el componente x del punto, el segundo es el componente y.
	return paso5;
}