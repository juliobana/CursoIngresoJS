function mostrar()

/*mostrar por alert el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".*/

{
    var nombre;
    var localidad;
  
    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    alert("Usted es " + nombre + " Y vive en la localidad de " + localidad);

}
