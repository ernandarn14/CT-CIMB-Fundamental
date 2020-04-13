//spread operator berfungsi membuka kurung dalam object maupun array
//jika property type number, cara akses dengan bracet notations (ex. contoh['123'])

let defaultVal = {
    username: '',
    email: '',
    pass: ''
}

const onChangeText = (key, value) => {
    defaultVal = {
        ...defaultVal,
        [key]: value
    } //key => property dalam object
}

onChangeText('username', 'Nanda')
//console.log(defaultVal)

let arr = []
const fibonacci = (n) => {
    let tampil = [1, 1]
    for (let i = 2; i < n + 1; i++) {
        tampil.push(tampil[i - 2] + tampil[i - 1])
    }
    return tampil
}

// console.log(fibonacci(4))

const fibonacciTriangle = (n) => {
    for (let i = 0; i < n; i++) {
        arr[i] = []
        for (let j = 0; j < i + 1; j++) {
            if (i == 0 && j == 0) {
                arr[i].push(0)
            } else if (j >= 0 && i == 1) {
                arr[i].push(1)
            } else if (j == 0 && i >= 2) {
                arr[i].push(arr[i - 1][i - 2] + arr[i - 1][i - 1])
            } else if (j == 1 && i >= 2) {
                arr[i].push(arr[i - 1][i - 1] + arr[i][j - 1])
            } else {
                arr[i].push(arr[i][j - 2] + arr[i][j - 1])
            }
        }
    }
    return arr
}
console.log(fibonacciTriangle(6)) 

function fiboTriangle(n) 
{ 
    let num = n * (n + 1) / 2; 
    let fib = [] 
    let fibo = fibonacci(fib, num); 
      
    let fiboNum = 1; 
  
    for (let i = 1; i <= n; i++) {  
        for (let j = 1;j <= i; j++){
            arr.push(fibo)
        }
    } 
    return arr
} 

// console.log(fiboTriangle(4))



