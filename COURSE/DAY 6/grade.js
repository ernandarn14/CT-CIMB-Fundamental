const arr = [80, 80, 50];

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(arr))

function calculateGrade(marks) {
  // write your code here
  let mark = calculateAverage(marks)
  if (mark >= 90) {
    return "A"
  } else if (mark >= 80) {
    return "B"
  } else if (mark >= 70) {
    return "C"
  } else if (mark >= 60) {
    return "D"
  } else if (mark <= 59) {
    return "F"
  } else {
    alert("Error")
  }
}

function calculateAverage(arr) {
  // write your code here
  let sum = arr.reduce((a,b) => a+b)
  // for (let i = 0; i < arr.length; i++) {
  //   sum += parseInt(arr[i])
  // }
  return sum / arr.length
}

/*
Instructions:
Create 2 functions, A and G.
A receives an array of integers as an argument,
calculates the average value of the array, and returns
a grade based on that average value/score.
G receives an integer and returns a grade based on that integer.

Hint:
Call G inside of A

Input: [80, 80, 50]
Output: C

Input: [90, 90, 85, 72]
Output: B
*/
