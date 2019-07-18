function mostrar()
{
/*al seleccionar un mes informar. 
si es Febrero: " Este mes no tiene más de 29 días." 
si NO es Febrero: "Este mes tiene 30 o más días"*/
var mesDelAnio = document.getElementById('mes').value;
var txt;

switch (mesDelAnio) {
    case "Febrero":
        txt = "Este mes no tiene mas de 29 dias";
        break;

    default:
    txt = "Este mes tiene 30 o más días"
        break;
}

alert (txt);

}//FIN DE LA FUNCIÓN