//Hallar el minimo de los cuadrados

let a = [4, 8, 1, 5, 10, 3]
console.log(getMin(a))
console.log(getMax(a))

function getMin(a) {
    if (a.length == 0) return -1

    let min = a[0]

    for (let i = 0; i < a.length; i++) {
        if (square(a[i]) < min) min = square(a[i])
    }
    return min
}

function getMax(a) {

    if (a.length == 0) return -1

    let max = a[0]

    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) max = a[i]
    }
    return max
}