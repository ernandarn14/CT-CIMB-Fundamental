var letters = 'abcdefghijklmnopqrstuvsxyz'

const caesarCipher = (word, num) => {
  if (num < 0) {
    return caesarCipher(word, num + 26)
  }
  let hasil = ''
  for (let i = 0; i < word.length; i++) {
    let getStr = word[i]

    if (getStr.match(/[a-z]/i)) {
      let index = word.charCodeAt(i)
      if ((index >= 65) && (index <= 90)) {
        getStr = String.fromCharCode(((index - 65 + num) % 26) + 65)
      }
      else if ((index >= 97) && (index <= 122)) {
        getStr = String.fromCharCode(((index - 97 + num) % 26) + 97)
      }
    }
    hasil += getStr
  }
  return hasil
}
console.log(caesarCipher('abc', 28))

const plusMinus = (numArr) => {
  let result = 0
  let idx = numArr.indexOf(1)
  for (let i = 0; i < numArr.length; i++) {
    if (i == idx) {
      result += numArr[i]
    }
    else if (i % 2 != 0) {
      result += numArr[i]
    } else {
      result -= numArr[i]
    }
  }
  return result
}
console.log(plusMinus([1, 2, 3, 4]))


const isPalindrome = (input) => {
  input = input.replace(/[\W_]/g, '').toLowerCase()

  return input == input.split('').reverse().join('')
}

console.log(isPalindrome('NuRsES ruN'))