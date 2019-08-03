function mostrar()
{
/*  iterar el ingreso de dos datos, una letra y un número entre
 -100 y 100 (validar) hasta que el usuario quiera*/
    var respuesta;
    var letra;
    var numero;
    var contador=0;
    var contadorDePares=0;
    var contadorDeImpares=0;
    var contadorDeCeros=0;
    var numerosPositivos=0;
    var numerosNegativos=0;
    var maximo;
    var minimo;
    var letraMaximo;
    var letraMinimo;
    var promedio;

    do{
        numero = prompt("Ingrese un numero entre -100 y 100 ");
        numero = parseInt(numero);

        while(isNaN(numero) || numero < -100 || numero > 100){
            numero = prompt("Ingrese un numero entre -100 y 100 ");
            numero = parseInt(numero);
        }

        letra = prompt("Ingrese una letra");

       // Caso 1 - while(!isNaN(letra))
       // Caso 2 - while(isNaN(letra)==false)
        while(!isNaN(letra)){
            letra = prompt("Ingrese una letra ");
        }

        //a) La cantidad de números pares.
        //b) La cantidad de números impares. 
        // si no quiero contar al cero como PAR
        if (numero % 2 == 0 && numero!=0) {
            contadorDePares++;
        }else{
            if(numero==0)
            {
                contadorDeCeros++;
            }else{
                contadorDeImpares++;
            }
          
        }
        
        //c) La cantidad de ceros.

        //d) El promedio de todos los números positivos ingresados. 
        if(numero > 0){
            numerosPositivos = numerosPositivos + numero;
        }
        //e) La suma de todos los números negativos. 
        else if(numero < 0){ 
            numerosNegativos = numerosNegativos + numero;
        }
        
        if (contador==0) {
            maximo = numero;
            minimo = maximo;
            letraMaximo = letra;
            letraMinimo = letra;
        }
        else if (numero > maximo) {
                maximo = numero;
                letraMaximo = letra;
        }
        else if(numero < minimo){
                minimo = numero;
                letraMinimo = letra;
        }
        contador++;

        respuesta = confirm("Desea continuar?");
    }while(respuesta);
    promedio = numerosPositivos / contador;

    document.write("Cantidad Numeros pares "+contadorDeCeros+"<br/>Cantidad de impares "+contadorDeImpares+"<br/>Cantidad de ceros "+contadorDeCeros+"<br/>Promedio positivos "+promedio+"<br/>Suma de negativos "+numerosNegativos+"<br/>Numero y letra Maximo "+maximo+letraMaximo+"<br/>Numero y letra Minimo "+minimo+letraMinimo);
    










}
