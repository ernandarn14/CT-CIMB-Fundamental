// function namaFunction(a, b){
    // console.log(a - b)
    // return a - b
//     let c = a - b
//     return c
// }
// let a = 3
// let b = 5
// namaFunction(b, a)

//console.log(namaFunction(1, 2) + 5)

// console.log(namaFunction(3,2))

// function namaFunction(a, b){
//     if(b && a){
//     let c = a - b
//     return c
//     }
// }
// console.log(namaFunction(1))

//jika ada default parameter saat memanggil function tanpa parameter akan mengembalikan nilai default parameter



function start(){
    return function (){
        return [1, 2, [
            {
                nama: 'Doraemon',
                pekerjaan: 'Manjain Orang'
            },
            {
                nama: 'Seto',
                kontak: {
                    rumah: 'BSD',
                    telfon: ['081234', '432108']
                }
            }
        ],4, 5]
    }
}

console.log(start()()[2][1].kontak.telfon[0])

