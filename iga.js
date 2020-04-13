// NOMOR 1
let result = []
const triangleArray = (len) => {
    for(let i = 0; i<len; i++){
        result[i] = []
        for(let j=0; j <= i; j++){
            result[i][j] = j+1
        }
    }
    return result
}

console.log(triangleArray(7))


// NOMOR 2
let result2 = []
let counter = 1
const triangleOdd = (len) => {
    for(let i = 0; i<len; i++){
        result2[i] = []
        for(let j=0; j <= i; j++){
            result2[i][j] = counter
            counter += 2
        }
    }
    return result2
}

console.log(triangleOdd(5))


// NOMOR 3
let result3 = []
const triangleFibo = (len) => {
    for(let i = 0; i<len; i++){
        result3[i] = []
        if(i==0){
            result3[0] = [0]
        } else if(i==1){
            result3[1] = [1,1]
        } else{
            for(let j=0; j <= i; j++){
                if(j==0){
                    let k = result3[i-1].length
                    result3[i][j] = result3[i-1][k-1] + result3[i-1][k-2]
                } else if(j==1){
                    result3[i][j] = result3[i][j-1] + result3[i-1][j]
                } else{
                    result3[i][j] = result3[i][j-1] + result3[i][j-2]
                }
            }
        }
    }
    return result3
}
console.log(triangleFibo(5))


// NOMOR 4
let result4 = []
const trianglePascal = (len) => {
    for(let i = 0; i<len; i++){
        result4[i] = []
        for(let j=0; j <= i; j++){
            if(j==0 || j==i){
                result4[i][j] = 1
            } else{
                result4[i][j] = result4[i-1][j-1] + result4[i-1][j]
            }
        }
    }
    return result4
}

console.log(trianglePascal(6))