let number = '152'
for(let i = 0; i <number.length; i++){
console.log(number[i])
}
number.length
let max = Infinity
let min = -Infinity
if (number[0] > number[1] && number[0] > number[2]) {
max = number[0]
} else if (number[1] > number[0] && number[1] > number[2]) {
max = number[1]
} else {
max = number[2]
}
if (number[0] < number[1] && number[0] < number[2]) {
min = number[0]
} else if (number[1] < number[0] && number[1] < number[2]) {
min = number[1]
} else {
min = number[2]
}
alert (max - min)