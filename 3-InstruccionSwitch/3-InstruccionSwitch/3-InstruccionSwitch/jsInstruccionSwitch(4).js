function mostrar()
{
/*al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días. */ 

var mesDelAnio = document.getElementById('mes').value;
var txt;

switch(mesDelAnio){
    case "Febrero":
        txt = "El mes tiene 28 dias";
        break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        txt = "El mes tiene 30 dias";
        break;

    default:
        txt = "El mes tiene 31 dias";
        break;
}

alert (txt);
	

}//FIN DE LA FUNCIÓN