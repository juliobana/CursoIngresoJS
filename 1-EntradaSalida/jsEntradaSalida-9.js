/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldo;
    var sueldoTotal;
    var importe;
    sueldo = document.getElementById("sueldo").value;
    sueldo = parseInt(sueldo);
    aumento = sueldo * 10 / 100;
    sueldoTotal = sueldo + aumento;
    document.getElementById("resultado").value = sueldoTotal;
    
}
