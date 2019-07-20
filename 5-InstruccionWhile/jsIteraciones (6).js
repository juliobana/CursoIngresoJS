function mostrar()
{

	var contador=0;
	var sumaAcumulada=0;
	var numero;
	var sumaAcumulada=0;
	var promedio;

	numero = prompt("ingrese numero");
	numero = parseInt(numero);

	while(contador < 4){
		sumaAcumulada = sumaAcumulada + numero;
		numero = parseInt(numero);
		contador++;
		numero = prompt("ingrese numero");
	}

	promedio = sumaAcumulada / 5;
	document.getElementById('suma').value=sumaAcumulada;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN