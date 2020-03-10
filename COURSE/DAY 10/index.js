let mobil = {
    tahun: 2000,
    merk: 'Toyota',
    harga: 10000
}

let arr = [1,2,3]
let arr2 = [4,5,6]

// console.log(...arr, ...arr2) //menggabung array tanpa merubah value array yg ada

let mobil2 = {...mobil, merk: 'Mercy'} //menambah atau mengganti property dalam object

console.log(mobil2)
