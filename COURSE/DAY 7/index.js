//contoh function yang tidak return nilai tapi bisa mengembalikan nilai karena diexecute
// let c 

// function ubahC(){
//     c = 3
// }

// ubahC() // di execute
//console.log(1 + 2 + c) //panggil nama variable bukan function karena di function tidak ada return nilai


//contoh function dalam objek dan cara aksesnya

// function testing(){
//     return {
//         tahun: 1000,
//         kontak: {
//             rumah: 'BSD',
//             telpon: ['024', '081']
//         }
//     }
// }

// console.log(testing().kontak.telpon.forEach())

// let orang = {
//     nama: 'Larva',
//     tahunLahir: '2019',
//     asal: 'Korea',

// }

// let arrKaryawan = []

class Person {
    constructor(nama, tahunLahir, asal) { //sama seperti function
        this.nama = nama //this menunjukkan property, bagian kanan adl constructor
        this.tahunLahir = tahunLahir
        this.asal = asal

    }
}

class Developer extends Person { // extends --> turunan (mempunyai property yamg sama)
    constructor(nama, tahunLahir, asal, specialty, pengalaman) {
        super(nama, tahunLahir, asal)
        this.specialty = specialty
        this.pengalaman = pengalaman
    }
}

class Product {
    constructor(name, price, stock) {
        this.name = name
        this.price = price
        this.stock = stock
        this.qty = 0
    }
}

class Clothing extends Product {
    constructor(name, price, stock, size) {
        super(name, price, stock)
        this.size = size
    }
}

// let a = new Person('Larva', '2019', 'Korea') //mengubah class menjadi objek
// let b = new Person('Minion', '2016', 'US')
// console.log(b)

//2 jam pertama: 2000/jam
//2 jam berikutnya : 500/jam

function hitungBiayaParkir(jam) {
    let harga = 0
    // if (jam <= 2){
    //     harga = 2000 * jam
    // } else if (jam > 2){
    //     harga = (2000 * 2 ) + (jam - 2) * 500
    // }
    // return harga

    while (jam > 0) {
        if (jam <= 2) {
            harga += 2000
        } else {
            harga += 500
        }
        jam--
    }
    return harga
}

//console.log(hitungBiayaParkir(3))

let nama = 'larva'
function balikString() {
    return nama.split('').reverse().join('')
}
//console.log(balikString())

let arrAngka = [10, 100, 60, 25]

function sorting() {
    return Math.max(...arrAngka) - Math.min(...arrAngka)
    // arrAngka.sort(function (a, b){
    // return    a - b
    //  })

    //  return (arrAngka.length - 1) - arrAngka[0]
}
console.log(sorting())

function median() {
    arrAngka.sort(function (a, b) {
        return a - b
    })

    let med = Math.floor(arrAngka.length / 2)

    if (arrAngka.length % 2)
        return arrAngka[med]

    return (arrAngka[med - 1] + arrAngka[med]) / 2.0
}

console.log(median())

let str = 'abcde'
function sumIndex(){
    let total = 0
    let idx = str.split('')
    for (let i = 0; i < idx.length; i++){
        total += i
    }
   return total 
}
console.log(sumIndex())

console.log(Date.now())

