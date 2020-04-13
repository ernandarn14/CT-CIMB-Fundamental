let tampil = []
const triangleArray = (n) => {
    for (let i = 0; i < n; i++) {
        tampil[i] = []
        for (let j = 0; j <= i; j++) {
            tampil[i][j] = j + 1
        }
    }
    return tampil
}
//console.log(triangleArray(6))

//soal 2
const triangle = (n) => {
    let hasil = 1
    for (let i = 0; i < n; i++) {
        tampil[i] = []
        for (let j = 0; j <= i; j++) {
            tampil[i][j] = hasil
            hasil += 2
        }
    }
    return tampil
}
//console.log(triangle(6))

//soal 3
const fibonacciTriangle = (n) => {
    for (let i = 0; i < n; i++) {
        tampil[i] = []
        if (i === 0) {
            tampil[0] = [0]
        } else if (i === 1) {
            tampil[1] = [1, 1]
        } else {
            for (let j = 0; j <= i; j++) {
                if (j == 0) {
                    let k = tampil[i - 1].length
                    tampil[i][j] = tampil[i - 1][k - 1] + tampil[i - 1][k - 2]
                } else if (j == 1) {
                    tampil[i][j] = tampil[i][j - 1] + tampil[i - 1][j]
                } else {
                    tampil[i][j] = tampil[i][j - 1] + tampil[i][j - 2]
                }
            }
        }
    }
    return tampil
}
//console.log(fibonacciTriangle(6))

//soal 4
const pascalTriangle = (n) => {
    for (let i = 0; i <= n; i++) {
        tampil[i] = []
        for (let j = 0; j < i + 1; j++) {
            if (i == j || j == 0) {
                tampil[i][j] = 1
            } else {
                tampil[i][j] = tampil[i - 1][j - 1] + tampil[i - 1][j]
            }
        }
    }
    return tampil
}
console.log(pascalTriangle(5))

