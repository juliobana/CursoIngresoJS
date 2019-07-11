function mostrar()
{
    //tomo la edad  
    /* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
    o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

    
    var edad;
    edad = document.getElementById("edad").value
    edad = parseInt(edad);
    /*
    if (edad >17){

        alert("La persona es mayor");
    }
    else if (edad < 13){

        alert("La persona es niño");
                                        
    } else {

        alert("La persona es adolecente");

    }
    */

    
    if(edad > 17) {
        // Mayor
        alert("Mayor");
    }
    else {        
        // Niño o adolescente
        if(edad<13) {
            alert("Niño");
          //niño   
        }
        else{
            //adolescente
            alert("Adolecente");
        }
    
}//FIN DE LA FUNCIÓN