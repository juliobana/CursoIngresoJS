function mostrar()
{
//tomo la edad  
/*Al ingresar una edad debemos informar solo si la persona es mayor de edad*/

var edad;

edad = document.getElementById("edad").value;

edad = parseInt(edad);

if(edad > 18){

    alert("Es mayor de edad");
}

}//FIN DE LA FUNCIÓN