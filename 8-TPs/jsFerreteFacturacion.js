/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var producto1;
    var producto2;
    var producto3;
    var suma;
    producto1 = document.getElementById("PrecioUno").value;
    producto2 = document.getElementById("PrecioDos").value;
    producto3 = document.getElementById("PrecioTres").value;
    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);
    suma = producto1 + producto2 + producto3;
    alert("La suma es " + suma);

}
function Promedio () 
{
	var producto1;
    var producto2;
    var producto3;
    var suma;
    var promedio;
    producto1 = document.getElementById("PrecioUno").value;
    producto2 = document.getElementById("PrecioDos").value;
    producto3 = document.getElementById("PrecioTres").value;
    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);
    suma = producto1 + producto2 + producto3;
    promedio = suma / 3
    alert("El promedio es: " + promedio);
}
function PrecioFinal () 
{
    var producto1;
    var producto2;
    var producto3;
    var suma;
    var iva;
    var precioFinal;
    producto1 = document.getElementById("PrecioUno").value;
    producto2 = document.getElementById("PrecioDos").value;
    producto3 = document.getElementById("PrecioTres").value;
    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);
    suma = producto1 + producto2 + producto3;
    iva = suma * 21 / 100;
    precioFinal = suma + iva;
    alert("El precio final es " + precioFinal);

}