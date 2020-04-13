// let input = 'halo'

// while(input)
// console.log('loop')

// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

let len = 50
let counter = 0

// for(let i = 1; i <= len; i++){
//     if (i % 3 == 0 && i % 5 == 0){ 
//         console.log('FizzBuzz') 
//         counter++
//         if(counter == 2){
//             break
//         }
//     }
//     else if(i % 5 == 0){
//         console.log('Buzz')
//     }
//     else if(i % 3 == 0){
//         console.log('Fizz')
//     }
//     else{
//         console.log(i)
//     }
// }

// let hasil = ''

// for (let i = 0; i < 5; i++){
//     for (let j = 1; j < 2; j++){
//         hasil += '*'
//     }
//    console.log(hasil)
// }

// for (let i = 0; i < 5; i++) { // i = 1  hasil = '*****\n'
  
//   for (let j = 0; j < 5; j++) { // j = 4  hasil = '*****\n*****'
//     hasil += '*'
//   }

//   console.log(hasil)
// }

// console.log(hasil)

// segitiga siku kiri
// let hasil = ''
// for (let i = 0; i < 5; i++){
//     hasil += '*'
//     for (let j = 0; j < 5; j++){
//         if (j == i){
//             break
//         }
//         hasil += '*'
//     }
//     hasil += '\n'
// }
// console.log(hasil)

// let nums = [2,3,6,5,6]
// let max = nums[0]
// let max2 = -1
// console.log(max2=max)

let str = "";

for(let i = 1; i < 6; i++ ){
    for(let j = 1; j < 6; j++){
        if(i + j >= 6){
            str += "*"
        }else{
            str += "-"
        }
    }
    str += "\n"
}

console.log(str)

// let result = ''

// for (let i = 0; i < 5; i++) {
//   result += '*'
//   for (let j = 4; j > i; j--) {
//     result += '*'
//   }
//   result+='\n'
// }

// console.log(result)

// ========= Segitiga siku kanan =========
let results = ''

for (let i = 0; i < 5; i++) {
  for (let k = 5; k > i; k--) {
    results += '-'
  }

  results += '*'

  for (let j = 0; j < i; j++) {
    results += '*'
  }
  results+='\n'
}

console.log(results)



