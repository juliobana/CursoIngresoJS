function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);
	while(numero < 0 || numero > 9 ){

        console.log("Ingrese un numero entre 0 y 9")

    	numero = prompt("ingrese el número clave.");
        numero = parseInt(numero);

    }
    document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN