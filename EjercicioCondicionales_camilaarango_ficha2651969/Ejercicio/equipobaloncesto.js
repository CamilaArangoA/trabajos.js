/*Una institución deportiva necesita seleccionar un jugador para participar en el equipo
de baloncesto. Los requisitos son:
Estatura, velocidad y edad
-Si el usuario cumple con la estatura y la velocidad puede ingresar al equipo, de lo
contrario no.
-Si cumple con la condición anterior, dependiendo de la edad el usuario pasara a las
divisiones menores o al equipo profesional de mayores.*/

var estatura = parseInt(prompt("digite estatura"))
var velocidad = parseInt(prompt("digite velocidad"))
var edad = parseInt(prompt("digite edad"))

if (estatura >= 175) {
    if (velocidad >= 100)
        if (edad > 18) {
            console.log("division de mayores")
        } else {
            if (estatura >= 175)
                if (velocidad >= 100)
                    if (edad < 18) {
                        console.log("división de menores")
                    }
        }
} else {
    if (estatura < 175)
        if (velocidad < 100)
            if (edad >= 18) {
                console.log("No pasa a la división")
}
}


