//database karyawan
// setiap orang ada nama, umur, pekerjaan
//jumlah orang = 5
//tampilkan nama, umur, pekerjaan setiap orang

// let arrNama = ["nanda", "iko", "ita", "ovi", "popo"];
// let arrUmur = [10, 19, 20, 26, 19];
// let arrPekerjaan = ["pelajar", "mahasiswa", "mahasiswa", "swasta", "mahasiswa"];
// let arrTelp = ["010", "022", ["099", "012"], "011", ["021", "024"]];
// let stringTelp = "";
// let multiArr = [["nanda", 10, "pelajar"], ['iko', 19, 'mahasiswa'], ["ita", 20 , "mahasiswa"]]
// let stringNama = ''

// console.log(arrTelp [2][0]) //akses multidimesional array

// for (let i = 0; i < arrNama.length; i++) {
//   stringTelp = " ";
//   for (let j = 0; j < arrTelp[i].length; j++) {
//     stringTelp += `${arrTelp[i][j]}`;
//   }
//   console.log(
//     `${i + 1}. ${arrNama[i]} ${arrUmur[i]} ${arrPekerjaan[i]} ${stringTelp}`
//   );
// }

// for (let i = 0; i < multiArr.length; i++) {
//  stringNama = ''
//   for (let j = 0; j < multiArr[i].length; j++) {
//     stringNama += multiArr[i][j] + ' '
//   }
//   console.log(`${i + 1}. ${stringNama}`)
// }

// let mobil = {
//     warna: 'Merah',
//     tahun: '2019',
//     merk: 'Honda'
// }

// mobil.tipe ='Sedan'
// mobil.warna ='silver'

// console.log(mobil)

// let karyawan = {
//     nama: 'Nanda',
//     umur: 19,
//     telp: ['021', '024']
// }

// console.log(karyawan.telp[1])

let arr = [{
    nama: 'Nanda',
    umur: 19,
    telp: ['021', '024']
}, {
    nama: 'Ovi',
    umur: 20,
    telp: '024'
}]

for (let i = 0; i < arr.length; i++){
    console.log(arr[i].nama)
}