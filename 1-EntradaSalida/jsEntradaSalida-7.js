/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var sumar;
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2); 
    sumar= numero1+numero2;
    alert(sumar);
}

function restar()
{
    var restar;
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2); 
    restar= numero1-numero2;
    alert(restar);
}

function multiplicar()
{ 
    var multiplicar;
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2); 
    multiplicar= numero1*numero2;
    alert(multiplicar);
}

function dividir()
{
    var dividir;
    var numero1;
    var numero2;
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2); 
    dividir= numero1/numero2;
    alert(dividir);
}

