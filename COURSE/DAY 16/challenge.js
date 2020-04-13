let arr = []

//soal 1
const triangleArray = (n) => {
    let tampil = []
    let hasil = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            hasil = j + 1
            tampil.push(hasil)
        }
        arr.push(tampil)
        tampil = []
    }
    return arr
}
console.log(triangleArray(6))

//soal 2
const triangle = (n) => {
    let tampil = []
    let hasil = 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            tampil.push(hasil)
            hasil += 2
        }
        arr.push(tampil)
        tampil = []
    }
    return arr
}
//console.log(triangle(6))

//soal 3
const fibonacciTriangle = (n) => {
    for (let i = 0; i < n; i++) {
        arr[i] = []
        for (let j = 0; j < i + 1; j++) {
            if (i == 0 && j == 0) {
                arr[i].push(0)
            } else if (j >= 0 && i == 1) {
                arr[i].push(1)
            } else if (j == 0 && i >= 2) {
                arr[i].push(arr[i - 1][i - 2] + arr[i - 1][i - 1])
            } else if (j == 1 && i >= 2) {
                arr[i].push(arr[i - 1][i - 1] + arr[i][j - 1])
            } else {
                arr[i].push(arr[i][j - 2] + arr[i][j - 1])
            }
        }
    }
    return arr
}
//console.log(fibonacciTriangle(6))

//soal 4
const pascalTriangle = (n) => {
    for (let i = 0; i <= n; i++) {
        arr[i] = []
        for (let j = 0; j < i + 1; j++) {
            if (i == j || j == 0) {
                arr[i][j] = 1
            } else {
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
            }
        }
    }
    return arr
}
//console.log(pascalTriangle(5))





