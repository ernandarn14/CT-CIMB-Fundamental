// function alphaValue(param1, param2){
//     return param1 + param2
// }

//arrow function (tanpa kurung kurawal dan return)
// const alphaValue = (param1, param2) => param1 == param2


//jumlahkan index alfabet
const alphaValue = (str) => {
    //str = str.split('')
    let alpArr = 'abcdefghijklmn'.split('')
    let result = 0

    for (let i = 0; i < str.length; i++){
        result += (alpArr.indexOf(str.charAt(i)) + 1)
       //result += (alpArr.indexOf(str[i]) + 1)
    }
    return result
}

//console.log(alphaValue('abc'))

//tampilkan alfabet yang letaknya ganjil
const alphaGanjil = (alpha) => {
    let alphaArr = 'abcdefghijklmn'.split('')
    let hasil = 0

    for (let i = 0; i < alphaArr.length; i++){
        if (i % 2 !== 0){
            continue
        }
        // if (alphaArr.indexOf(alpha.charAt(i)) % 2 == 0){
            hasil += (alphaArr.indexOf(alpha.charAt(i)) + 1)
        // }
    }
    return hasil
}
//console.log(alphaGanjil('abc'))

const alphaStr = (str) => {
    let alpArr = 'abcdefghijklmn'.split('')
    let result = ''
    let sum = 0

    for (let i = 0; i < str.length; i++){
        result += (alpArr.indexOf(str.charAt(i))) 
        sum += (alpArr.indexOf(str.charAt(i)))
    }
    return result + ' Sum: ' + sum
}

console.log(alphaStr('lmn'))

class Product{
    constructor(nama, harga, stok){
        this.nama = nama
        this.harga = harga
        this.stok
    }
}

let arr = [
    new Product('apel', 10000),
    new Product('apple', 5000),
    new Product('bape', 7000),
    new Product('mangga', 20000)
]


const searchProduct = str => {
    return arr.filter(val => val.nama.toLowerCase().includes(str.toLowerCase()))
}
//console.log(searchProduct('app'))

const searchByPrice = (min, max) => {
    return arr.filter(val => val.harga >= min && val.harga <= max)
}
//console.log(searchByPrice(5000, 10000))

//object distructure

let a = {
    nama: 'larva',
    asal: 'korean',
    kontak: {
        rumah: 'abc',
        kota: 'bsd'
    }
}

let {nama, asal, kontak: {rumah, kota}} = a

const tampilNama = ({nama, asal}) => {
    return nama
}
//console.log(tampilNama(a))

let angka = [-7, 5, 2, -2, 7, -13]

const sumAngka = numb => {
    let sum = 0
    let neg = 0

    for (let i = 0; i < angka.length; i++){
        if(numb[i] <= 0){
            neg += numb[i]
        } else {
            sum += numb[i]
        }
    }
    return [neg, sum]
}

//console.log(sumAngka(angka))

