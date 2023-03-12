/*Se desea escribir un algoritmo que pida la altura de una persona, si la altura es menor
o igual a 150 cm envíe el mensaje: “Persona de altura baja”; si la altura está entre 151cm
y 170cm escriba el mensaje: “Persona de altura media” y si la altura es mayor al 171
escriba el mensaje: “Persona alta”.*/

var altura = parseInt(prompt("digite altura"))

if (altura<=150){
    console.log("Persona de estaura baja")
}else{
    if(altura<=170){
        console.log("Persona de altura media")
    }else{
        if(altura>171){
            console.log("Persona de altura alta")
        }
    }
}