let name = ['ernanda', 'rully']
let [fname, lname] = name
const capLetter = () => {
    // for (var i = 0; i < name.length; i++) {
    //     name[i] = name[i].charAt(0).toUpperCase() + name[i].substring(1)    
    // }
    // return name.join(' ')
    return name.map(val=> val.charAt(0).toUpperCase() + val.substr(1).toLowerCase()).join(' ')
}
console.log(capLetter())
