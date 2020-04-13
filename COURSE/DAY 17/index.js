//map array
let arr = []
for (let i = 0; i < 5; i++) {
    arr.push(parseInt(Math.random() * 10))
}
//console.log(arr)

let newArr = arr.map((val, idx) => {
    return val + 1
})
//console.log(newArr)


//cara kerja map
const reMap = (array, cb) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(cb(array[i], i, array))
    }
    return result
}
// console.log(reMap([1,2,3,4,5], (val,idx,array) => {
//     return 3
// }))


//filter array
let newArray = arr.filter((val, idx, array) => {
    return val <= 5
})
//console.log(newArray)

const reFilter = (array, cb) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result
}

// console.log(reFilter([1, 2, 3, 4, 5], (val, idx, array) => {
//     return val < array.length
// }))

//let number = [5,4,2]

const digitalRoot = (n) => {
    // let str = n.toString()
    let jumlah = 0
    // let hasil = 0
    // for (let i = 0; i < str.length; i++) {
    //     jumlah += parseInt(str[i])
    // }
    // let str2 = jumlah.toString()
    // for (let i = 0; i < str2.length; i++) {
    //     hasil += parseInt(str2[i])
    // }
    // return hasil
    while (n > 9) {
        let splitNum = n.toString().split("")
        splitNum = splitNum.map(Number)// convert to integer automatically
        n = splitNum.reduce((a,b) => a+b)
    }
    return n
}

// console.log(digitalRoot(942))

const concatArr = (arr1, arr2) => {
    let arrCheck = arr2.filter(sameItem => !arr1.includes(sameItem))
    return arr1.concat(arrCheck)
}

console.log(concatArr([1,2,3,4,5,6], [1,5,6,9,13,7]))