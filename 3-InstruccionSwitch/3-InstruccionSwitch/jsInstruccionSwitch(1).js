function mostrar()
{
//tomo la edad 
/*
al seleccionar un mes informar. 
si es Enero: "que comiences bien el año!!!." 
si es Marzo: "a clases!!!." 
si es Julio: "se vienen las vacaciones!!!." 
si es Diciembre: "Felices fiesta!!!."
*/ 
    var mesDelanio;

    mesDelanio = document.getElementById("mes").value;
    // Siempre en el Switch va una variable en la condición
    switch(mesDelanio){

        case "Enero" : 
        alert("que comiences bien el año!!!.");
        break;

        case "Marzo" :
        alert("a clases!!!.");
        break;

        case "Julio" : 
        alert("se vienen las vacaciones!!!");
        break;

        case "Diciembre" :
        alert("Felices fiesta!!!");
        break;

        default :
        alert("Es un mes sin novedades");
        break;

    }

}//FIN DE LA FUNCIÓN