/*Por medio de un alert ofrecer un listado de 6 frutas diferentes. Cada una tiene un valor
diferente. Dependiendo de la fruta y la cantidad se deberá imprimir:
Nombre de la fruta.
Valor por unidad.
Valor del total de los productos comprados.*/

var banano = parseInt(prompt("Precio banano = 1000, digite la cantidad de bananos"))
var totalbanano = 0
var pera = parseInt(prompt("precio pera = 2000, digite la cantidad de peras"))
var totalpera = 0
var manzana = parseInt(prompt("precio manzana = 1000, digite la cantidad de manzanas"))
var totalmanzana = 0
var mandarina = parseInt(prompt("precio mandarina = 2000, digite la cantidad de mandarina"))
var totalmandarina = 0
var kiwi = parseInt(prompt("precio kiwi = 1000, digite la cantidad de kiwi"))
var totalkiwi = 0
var fresa = parseInt(prompt("precio fresa = 3000, digite la cantidad de fresas"))
var totalfresa = 0
var total = 0
var cantidadcomprada = 0

if (banano >= 0) {
    totalbanano = banano * 1000
} if (pera >= 0) {
    totalpera = pera * 2000
} if (manzana >= 0) {
    totalmanzana = manzana * 1000
} if (mandarina >= 0) {
    totalmandarina = mandarina * 2000
} if (kiwi >= 0) {
    totalkiwi = kiwi * 1000
} if (fresa >= 0) {
    totalfresa = fresa * 3000
}
total = totalbanano + totalpera + totalmanzana + totalmandarina + totalkiwi + totalfresa
{alert(total + "precio del banano+precio de la pera+precio de la manzana+precio de la mandarina+precio del kiwi+precio de la fresa" + cantidadcomprada) 
}