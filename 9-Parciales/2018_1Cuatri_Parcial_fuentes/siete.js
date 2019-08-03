function mostrar()
{
    /*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas
 (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */

    var nota;
    var notaNotaMasBaja;
    var notaMayorSeis;
    var promedio;
    var sexo;
    var promedio;
    var sumaDeNotas;
    var alumnos;

    for(alumnos = 5; alumnos <= 5; alumnos++){

        nota = prompt("ingrese nota");
        nota = parseint(nota);

        while(isNaN(nota) || nota < 0 || nota > 10){
            nota = prompt("ingrese nota valida");
            nota = parseint(nota);
        } 
    
        
        sexo = prompt("ingrese sexo");
        

        while(!isNaN(sexo) || sexo != "f" || sexo != "m" ){
            nota = prompt("ingrese nota valida");
        
        }










        alumnos++;
    }


alert(Chau);


}
