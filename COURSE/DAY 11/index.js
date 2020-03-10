// const validator = (arr, cb) => {
//     let arrResult = []
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             arrResult[i] = 1
//         } else {
//             arrResult[i] = 0
//         }
//     }
//     return arrResult
// }

// let arrParam = [3, 7, 4, 7, 1, 2]


// console.log(validator(arrParam, (val) => {
//     if(val % 2 !== 0){
//         return 1
//     } else {
//         return 0
//     }
// }))

const validator = (arr, cb) => {
    let arrResult = []
    for (let i = 0; i < arr.length; i++) {
       // arrResult[i] = cb(arr[i])
       arrResult.push(cb(arr[i]))
    }
    return arrResult
}

let arrParam = [1, 2, 3, 4]

console.log(validator(arrParam, (val) => {
    return val * 2
}))