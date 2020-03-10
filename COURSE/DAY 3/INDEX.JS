// let input = 'halo'

// while(input)
// console.log('loop')

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// let len = 50
// let counter = 0

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
//    // hasil += '\n'
//    console.log(hasil)
// }

// segitiga siku kiri
let hasil = ''
for (let i = 0; i < 5; i++){
    hasil += '*'
    for (let j = 0; j < 5; j++){
        if (j == i){
            break
        }
        hasil += '*'
    }
    hasil += '\n'
}
console.log(hasil)

