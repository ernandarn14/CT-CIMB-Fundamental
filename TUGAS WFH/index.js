let matrix = [[1,2,3], [4,5,6], [7,8,9]]

const hitungDiagonal = (arr) => {
    let sum = 0
    for(let i=0; i <= arr.length - 1;i++){
        sum += arr[i][i] - arr[i].reverse()[i]
       console.log(arr[i][i])
       console.log(arr[i].reverse()[i])
    }
    return Math.abs(sum)
}
console.log(hitungDiagonal(matrix))

// let bil = [-4, 3, -9, 0, 4, 1]

// const posNeg = (arr) => {
//     let positive = arr.filter(number => number > 0).length / arr.length;
//     let negative = arr.filter(number => number < 0).length / arr.length;;
//     let zeronums = arr.filter(number => number == 0).length / arr.length;;
//     return positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6)
// }

// console.log(posNeg(bil))

// const stairCase = (n) => {
//     let hasil = ''
//     for (let i = 0; i < n; i++){
//         hasil += '*'
//         for (let j = 0; j < n; j++){
//             if (j == i){
//                 break
//             }
//             hasil += '*'
//         }
//         hasil += '\n'
//         return hasil
// }
// }

// console.log(stairCase(6))

// const miniMinMax = (arr) => {
//     // arr = arr.sort()
//     const sum = arr.reduce((a, total) => a + total, 0)
//     console.log(sum - arr[arr.length - 1], sum - arr[0]);
// }

// miniMinMax([1, 2, 3, 4, 5])

// const maxValue = (ar) => {
//     let max = Math.max(...ar)
//     let countMax = ar.filter(val => val == max)
//     console.log(countMax)
//     return countMax.length
// }

// console.log(maxValue([3, 2, 1, 3]))


// function formatAMPM(s) {
//     let hour = s.substring(0, 2) * 1 //ambil jam dari time format lalu *1 untuk convert to number
//     let timeFormat = s.substring(2, 8) //ambil format menit dan detik
//     if (hour < 12 && s.indexOf("PM") !== -1) {
//         return (12 + hour + timeFormat)
//     } else { // if hour is from 1 to 11 AM
//         if (hour < 10 ) { // if number is less than 10, add a zero in front
//             return ("0" + hour + timeFormat);
//         } else if (hour == 12 && s.indexOf("AM") !== -1){
//             return ("00" + timeFormat)
//         }
//          else { // if number is greater than 9, just add rest of string
//             return (hour + timeFormat)
//         }
//     }
// }

// console.log(formatAMPM('07:05:45PM'))

// const gradeStd = (grades) => {
//     // if (grades > 40 && grades <=100){
//         return grades.map(function(grade)  {
//             return (grade >= 38 && grade % 5 >= 3) ? grade + 5 - (grade % 5) : grade;
//         });
    
//     // } else {
//     //     return 'Failed'
//     // }
// }
// console.log(gradeStd(73))

// function createPhoneNumber(numbers){
//     var number = numbers.join('')
//     return '(' + number.slice(0, 3) + ') ' + number.slice(3, 6)  + '-' + number.slice(6, 10); 
//   }

//   console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// const idxAlpha = (text) => {
//     var result = "";
//   for (var i = 0; i < text.length; i++) {
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " "
//   }

//   return result.slice(0, result.length - 1)
// return text.toLowerCase().split('')
// .filter( c => c >= 'a' & c <= 'z' )
// .map( c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
// .join(' ');
// }

// console.log(idxAlpha('The sunset sets at twelve o"clock.'))

// function sortArray(array) {
//     let odd = []
//     array
//     .filter((v, i) => v % 2 && odd.push(i))//filter odd number
//     .sort((a, b) => a - b)//sort odd number
//     .forEach((v, i) => array[odd[i]] = v)//push array odd ke dalam array utama
//     return array
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]))

// function friend(friends){
//     return friends.filter(number => number.length == 4)
//   }
//   console.log(friend(["Ryan", "Kieran", "Mark"]))

function printerError(s){
    //return s.match(/[^a-m]/g).length + "/" + s.length
    return s.filter(number => number == (/[^a-m]/g).length)
  }

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))

class Product {
  constructor(id, nama, harga, category, stock) {
      this.id = id
      this.nama = nama
      this.harga = harga
      this.category = category
      //categories: Buah, Elektronik, Baju
      this.stock = stock
  }
}


let productData = [
  new Product(date.getTime(), 'H&M', 12000, 'Baju', 10),
  new Product('1583981075685', 'Apel', 5000, 'Buah', 10),
  new Product('1583981090582', 'Vivo', 50000, 'Elektronik', 10)
]

let arrCat = []

let 


    