/* if(pregunta=="tiene pareja?"){
    lo manda la pareja
}else{
    lo manda la mamá
}

Karla = No
brandon = No
Erickson n= Sí 

> Mayor que
< Menor que
>= Mayor o igual que
<= Menor o igual que
== Igual*/

var valor1 = parseInt(prompt("digite valor 1"))
var valor2 = parseInt(prompt("digite valor 2"))
var valor3 = parseInt(prompt("digite valor3"))

var valor1 = 29
var valor2 = 30
var valor3 = 28

if (valor1 > valor2) {
    if (valor1 > valor3) {
        console.log(" valor1 es mayor valor2 y valor3")
    }else{
        console.log("valor3 es mayor que valor1 y valor2")
    }
} else { 
    if(valor2>valor3){
        console.log("valor2 es mayor que valor1 y valor3")
    }else{
        console.log("valor 3 es mayor que valor1 y valor2")
    }
}
