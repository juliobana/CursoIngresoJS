function mostrar()

/* Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id. */ 
{

    var precio;
    var porcentaje;
    var porcentajeTotal;

    precio = prompt("Ingrese precio"); 
    porcentaje = prompt("Ingrese porcentaje"); 
    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);
    porcentajeTotal = precio * porcentaje/100;
    precioFinal = precio - porcentajeTotal
    document.getElementById("elPrecioFinal").value=precioFinal;
}
