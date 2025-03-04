/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var precioUnitario = 35;
    var precioXcantidad;
    var precioFinal;
    var marca;
    var cantidad;
    var descuento;

 
    cantidad = document.getElementById("Cantidad").value;

    cantidad = parseInt(cantidad);
    
    marca = document.getElementById("Marca").value;

    precioXcantidad = cantidad * precioUnitario;
    
    switch (cantidad){
        case 5:
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = precioXcantidad * 40 / 100;
                    break;
                default:
                descuento = precioXcantidad * 30 / 100;
                    break;
            }
        break;
        case 4:
            switch (marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = precioXcantidad * 25 / 100;
                    break;

        default:
                descuento = precioXcantidad * 20 / 100;
                break;    
        }break;    
    
    default:
        break;
    }


    precioFinal = precioXcantidad - descuento;

    alert(precioFinal);

}

