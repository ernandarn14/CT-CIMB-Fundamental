let count = 0;
function KaprekarsConstant(num) {
  let numStr = num.toString()
  if (numStr.length < 4) {
    let remain = 4 - numStr.length
    for (let i = 0; i < remain; i++){
      numStr += "0"
    } 
  }
  count += 1
  let sortAsc = parseInt(numStr.split("").sort(function(a, b) {return a - b}).join(""))
  let sortDesc = parseInt(numStr.split("").sort(function(a, b) {return b - a}).join(""))
  let result = sortDesc > sortAsc ? sortDesc - sortAsc : sortAsc - sortDesc;
  if (result === 6174) {
    return "Terdapat " + count + " iterasi untuk mencapai 6174"
  }
  return KaprekarsConstant(result)
}

console.log(KaprekarsConstant(8))
