const tripleTrouble = (one, two, three) => {
  // Buatlah sebuah function yang menerima 3 string 
  // dan setiap string memiliki panjang yang sama
  // Input: "aa", "bb", "cc"
  // Output: "abcabc"

  // Input: "ab", "cd", "ef"
  // Output: "acebdf"

  // write your code here
  let result = ''
  if(one.length == two.length && two.length == three.length && three.length == two.length){
    for (let i=0; i<one.length || i < two.length || i < three.length; i++){
    result = result.concat(one[i], two[i], three[i])}
  } else {
    result = 'Panjang ketiga string harus sama'
  }
   return result
  }
 
console.log(tripleTrouble("ab", "cd", "ef"))

const altCaps = (string) => {
  // Buatlah sebuah function yang menerima sebuah string
  // Outputnya sebuah array yang index pertama adalah semua 
  // huruf yg posisinya ganjil menjadi kapital, index kedua
  // semua huruf yg posisinya genap jadi kapital

  // Input: "abcdef"
  // Output: ["AbCdEf", "aBcDeF"]

  // write your code here
  let tampil = ""
  let tampil2 = ""
  for(let i = 0; i < string.length; i++){
    if (i % 2 == 0){
      tampil += string[i].toUpperCase()
      tampil2 += tampil[i].toLowerCase()
    } else {
      tampil += string[i].toLowerCase()
      tampil2 += tampil[i].toUpperCase()
    }
}
  return [tampil, tampil2]
}
console.log(altCaps("abcdef"))