let alumnos = [
    {nombre: "Sol", nota: 10},
    {nombre: "Luis", nota: 15},
    {nombre: "Pedro", nota: 13},
    {nombre: "Thanos", nota: 20},
    {nombre: "Hugo", nota: 8},
    {nombre: "Eduardo", nota: 11},
    {nombre: "Maria", nota: 18},
    {nombre: "Ironman", nota: 22},
]

function getMinIndex(alumnos) {

    if (alumnos.length == 0) return -1

    let min = alumnos[0]
    let minIndex = 0

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i] < min) {
            min = alumnos[i]
            minIndex = i
        }
    }
    return minIndex
}

function getMaxIndex(alumnos) {

    if (alumnos.length == 0) return -1

    let max = alumnos[0]
    let maxIndex = 0

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i] > max) {
            max = alumnos[i]
            maxIndex = i
        }
    }
    return maxIndex
}

console.log("La minima nota fue: ", getMinIndex(alumnos), "y la obtuvo el alumno:", alumnos.nombre)
console.log("La maxima nota fue: ", getMaxIndex(alumnos), "y la obtuvo el alumno: ", alumnos.nombre)