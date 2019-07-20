function mostrar()
{	

	var numeroDos;
	var suma;

	// alert(Numero);
	numeroDos=33;//false
	numeroDos="33";//false
	numeroDos="lalala";//true

	suma=isNaN(numeroDos);

	while(isNaN(numeroDos) || numeroDos > 10){
		numeroDos = prompt("error");
		numeroDos = parseInt(numero);
	}

	/*var numero=0;
	while (numero < 10) {
		numero ++;
		console.log(numero);
		
	}
	// bucle con contador////////////////////////////////
	var contador=0;

	while(contador < 5){

		console.log("Hola");
		contador++;

	}
		console.log("Chau");
	

	// bucle con respuesta///////////////////////////////
	var respuesta = "s";

	while(respuesta == "s"){

			console.log(respuesta);

			respuesta = prompt("S, para continuar");

		}
			console.log("Chau");
	
	
	// bucle definido////////////////////////////////
	var nota;
	nota = prompt("Ingrese nota");
	nota = parseInt(nota);

	while(nota > 10){

		nota = prompt("ERROR, Reingrese Nota");
		nota = parseInt(nota);

	}
	console.log("Chau");
*/

}//FIN DE LA FUNCIÓN