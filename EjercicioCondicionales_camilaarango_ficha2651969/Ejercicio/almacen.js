/*Un almacén de escritorios hace los siguientes descuentos: Si el cliente compra menos
de 5 unidades se le da un descuento del 10% sobre la compra; si el número de unidades
es mayor o igual a cinco pero menos de 10 se le otorga un 20% y, si son 10 o más se
le da un 40%. Hacer un algoritmo para determinar cuánto debe pagar un cliente por el
escritorio y cuánto por el descuento.*/
var escritorio = 100000
var cantidad = parseInt(prompt("digite la cantidad de escritorios"))
var resultado = 0

if (cantidad < 5) {
    console.log("10% de descuento")
    resultado = (escritorio - (escritorio * 0.1)) * cantidad
    console.log("Total a Pagar" + resultado)
} else {
    if (cantidad >= 5) {
        if (cantidad < 10) {
            console.log("20% de descuento")
            resultado = (escritorio - (escritorio * 0.2)) * cantidad
            console.log("total a pagar" + resultado)
        } else {
            if (cantidad >= 10) {
                console.log("40% de descuento")
                resultado = (escritorio - (escritorio * 0.4)) * cantidad
                console.log("total a pagar" + resultado)
            }
        }
    }

}


