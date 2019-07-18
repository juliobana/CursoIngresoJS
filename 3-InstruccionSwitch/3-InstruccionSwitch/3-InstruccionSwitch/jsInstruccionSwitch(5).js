function mostrar()
{
/* Al ingresar una hora, informar: 
si está entre las 7 y las 11 : "Es de mañana.". */
var laHora;
laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);

//alert (laHora);
	
	switch (laHora) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");
            break;
    
        default:
            break;
    }



}//FIN DE LA FUNCIÓN