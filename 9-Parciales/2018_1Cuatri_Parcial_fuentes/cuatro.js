function mostrar()

/* Bienvenidos (IF). 
Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto,
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10". */
{

    var numero1;
    var numero2;
    var operacion;
    var suma;

    numero1 = prompt("Ingrese un numero");

    numero2 = prompt("Ingrese el segundo numero");

    if(numero1 == numero2){

        operacion = numero1+numero2;

    }else{

            if (numero1>numero2){

                operacion = numero1 - numero2;
                
            }else{

                    numero1 = parseInt(numero1);

                    numero2 = parseInt(numero2);

                    operacion = numero1 + numero2;

                  
                    if(operacion>10){

                        operacion = "La suma es " + operacion + " Y supero el 10";

                }
                
                //alert("la suma es "+ operacion + " y supero el 10");
            }
        }
    alert(operacion);

}    
 
    



