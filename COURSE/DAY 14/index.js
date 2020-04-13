const mumble = (str) => {
    let splitWord = str.split('')
    let tampil = []

    for(let i = 0; i < str.length; i++){
       let upperWord = splitWord[i].toUpperCase()
        tampil.push(upperWord)
       for (let j = 0; j < i; j++){
           tampil.push(splitWord[i].toLowerCase())
       }
       if(i == str.length - 1){ //agar tidak ada dash di huruf terakhir
           break
       }
       tampil.push('-')
    }
    return tampil.join('')
}

console.log(mumble('hello'))