// 1. Function utk hapus huruf vocal
// 2. Function utk sort array string (A-Z dan Z-A)
// 3. Function utk sort array integer (0-9 dan 9-0)
// 4. Function display angka terbesar dalam array. (Gak boleh pake Math.max())
// 5. Function ngefilter string (hanya bisa integer). (Output array isinya hanya bisa number)
// 6. Function untuk hapus huruf awal dan akhir saja

// 1
let nama = "Ernanda Rully Novrisanti";
function hapusVocal(kata) {
  return kata.replace(/[aiueo]/gi, " ");
}
console.log(hapusVocal(nama))

// 2
let contohArray = ["C", "B", "O", "K"];
let sortAsc = contohArray.sort(function(a, b) {
 // return a > b ? 1 : b > a ? -1 : 0
 return a.localeCompare(b)
})
console.log(sortAsc)

let sortDesc = contohArray.sort(function(a, b) {
  //return a < b ? 1 : b < a ? -1 : 0
  return b.localeCompare(a)
})
console.log(sortDesc)

// 3
let arrInt = [100, 10, 30, 28, 5]
let sortAscInt = arrInt.sort(function(a, b) {
  //return a > b ? 1 : b > a ? -1 : 0
  return a - b;
});
console.log(sortAscInt);

let sortDescInt = arrInt.sort(function(a, b) {
  //return a < b ? 1 : b < a ? -1 : 0
  return b - a;
});
console.log(sortDescInt)

// 4
let angka = [10, 20, 100, 90, 1000]
let max = angka[0]
for (let i = 0; i < angka.length; i++) {
  if (angka[i] > max) {
    max = angka[i]
  }
}
console.log(max)

// 5
let input = ["aku", 10, 20, "larva", 100, "Tom"]
var filterString = input.filter(function(str) {
  return !(typeof str == "string")
});
console.log(filterString);

// 6
let strNama = 'Tom and Jerry'
function removeChar(string) {
  return string.slice(1, string.length - 1)
}
console.log(removeChar(strNama))
