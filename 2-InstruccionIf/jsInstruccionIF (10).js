function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/

	var nota;
	// Quiero obtener 10 de max (11 - 0) no icluido. + minimo
	nota = Math.floor(Math.random() * (11 - 0)) + 0;
	alert(nota);
	nota = parseInt(nota);

	if(nota >= 9){
		alert("EXCELENTE");
	}else{

		if(nota < 4){

			alert("Vamos, la proxima se puede");

		}else{

			alert("APROBÓ");
			
		}
	}




	

}//FIN DE LA FUNCIÓN