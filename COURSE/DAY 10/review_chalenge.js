function hitungKata (kata){
    let hasilObj = {}
    let splitKata = kata.split('')

    for (let word of splitKata){
        word = word.toLowerCase()

        if(hasilObj[word]){
            hasilObj[word] += 1
        } else{
            hasilObj[word] = 1
        }
    }

    let maxKey
    let max = 0

    for(const key in hasilObj){
        if(hasilObj[key] > max){
            max = hasilObj[key]
            maxKey = key
        }
    }
    return maxKey + ' ' + hasilObj[maxKey]
}
console.log(hitungKata( 'Saya suka jeruk karena saya dan jeruk suka jeruk dan saya'))