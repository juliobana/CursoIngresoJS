function mostrar()
{
/*tomo la edad
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita". */ 

    var edad;

    edad = document.getElementById("edad").value;

    edad = parseInt(edad);

    if(edad == 15){

        alert("Niña bonita");

    }

    

}//FIN DE LA FUNCIÓN