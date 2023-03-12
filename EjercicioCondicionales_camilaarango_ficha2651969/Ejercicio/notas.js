/*Realizar un programa que pida tres notas de un alumno en las áreas de: matemáticas,
español y sociales, calcule el promedio e imprima lo siguiente:
Si el promedio es iguala a 10 mostrar "Excelente".
Si el promedio es >7 y <=10 mostrar "Bueno".
Si el promedio es <7 mostrar "Insuficiente".*/

var matematicas = parseInt(prompt("digite matematicas"))
var espanol = parseInt(prompt("digite español"))
var sociales = parseInt(prompt("digite sociales"))

var promedio = 0
promedio = (matematicas+espanol+sociales)/3

if (promedio == 10) {
    console.log("Excelente")
} else {
    if (promedio >= 7) {
        if (promedio < 10) {
            console.log("Bueno")
        }
    } else {
        if (promedio < 7) {
            console.log("Insuficiente")
        }
    }
}