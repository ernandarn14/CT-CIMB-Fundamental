let arr = [1,2,3,4,5]

arr.forEach((val, idx, arr) => {
    //iteration 1
    //val : 1
    //idx: 0
    //arr: [1,2,3,4,5]
    // console.log(val, idx, arr)
})

const forEachRep = (array, cb) => {
    for(let i = 0; i < array.length;i++){
        cb(array[i], i, array) //array[i] sebagai val karena mengambil masing2 nilai dari array
    }
}

forEachRep(arr, (param1, param2, param3) => { //cb mempunyai 3 parameter di function forEachRep
    //console.log(param1, param2, param3)
})

for(let item of arr){ //item menunjukkan nilai array tiap element
    let idx = arr.indexOf(item)
    if(item % 2 == 0){
        //console.log(idx)
    }
}

let a = {
    nama: 'Nanda',
    pekerjaan: 'IT',
    status: 'aktif'
}

for (let key in a){ //variable key merupakan property object
   // console.log(key, a[key])
}

//console.log(a['pekerjaan']) //bracet notation => hanya menerima string
let coba = 'nama'
//console.log(a[coba])

setTimeout(() => { //set waktu untuk menampilkan kapan execute program muncul
  //  console.log('coba')
}, 3000) // waktu dalam milisecond

const testInterval(() => {
    setInterval(() => { //execute function sebanyak mungkin dan berhenti saat waktu habis
        //console.log('halo')
    }, 1000)

    clearInterval()
})
