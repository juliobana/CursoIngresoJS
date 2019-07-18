function mostrar()
/* Bienvenidos (SWITCH). 
pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra). */
{
    var planeta;

    planeta = prompt("Ingrese un planeta: Tierra , Mercurio o Venus");
    var txt;
    switch (planeta) {
        case "tierra":
            txt = "acá vivimos"
            break;
        case "mercurio":
            txt = "acá hace más calor"
            break;
        case "venus":
             txt ="acá hace más frio";
             break;
    
        default:
             txt = "No es un planeta";
            break;
    }alert(txt);

}
