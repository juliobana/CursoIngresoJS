function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var contadorTemperaturaPar=0;
    var respuesta;
    var marcaMasPesado;  
    var productosBajoCero=0;
    var pesoAcumulado=0;
    var contadorDePesos=0; //Este contador se puede usar para calcular los maximos y minimos
    var respuesta;
    var promedio;
    var maximo;
    var minimo;

    do
    {
        marca = prompt("Ingrese marca");
        peso = prompt("Ingrese peso de 1 al 100");
        peso = parseInt(peso);
        while(peso <=0 || peso >100){
            peso = prompt("Incorrecto Ingrese peso de 1 al 100");
            peso = parseInt(peso);
        }
    
        temperatura = prompt("Ingrese temperatura de -30 a 30");
        temperatura = parseInt(temperatura);
        while(temperatura < - 30 || temperatura >30){
            temperatura = prompt("Incorrecto temperatura de -30 a 30");
            temperatura = parseInt(temperatura);
        }
        //a) La cantidad de temperaturas pares. 

        if(temperatura % 2 ==0){

            contadorTemperaturaPar++;
        }

        //c) La cantidad de productos que se conservan a menos de 0 grados.
        if(temperatura < 0){
            productosBajoCero++;
        }

        if (contadorDePesos==0){
            maximo = peso;
            minimo=maximo;
            marcaMasPesado = marca;
        }//La marca del producto más pesado
        else if(peso > maximo){
            maximo = peso;
            marcaMasPesado = marca;
        }else if(peso < minimo){
            minimo=peso;
            
        }
        
        //d) El promedio del peso de todos los productos

        pesoAcumulado = pesoAcumulado + peso;
        contadorDePesos++;

        respuesta = confirm("Desea continuar?");

    }while(respuesta);
    promedio = pesoAcumulado/contadorDePesos;

    document.write("Temperaturas Pares " + contadorTemperaturaPar + "<br/> Cant. productos Bajo cero "+productosBajoCero+ "<br/> Marca Producto mas pesado " + marcaMasPesado +  "<br/> Peso Maximo " + maximo+ "<br/> Peso Minimo "+ minimo + "<br/> El promedio es " +promedio);

}
