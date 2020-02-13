let min 
let max
let middle
let a = 45
let b = 26
let c = 78
if(a < b && a < c) {
min = a 
} else if(b < a && b < c) {
min = b 
} else {
min = c
}
if(a > b && a > c) {
max = a 
} else if(b > a && b > c) {
max = b 
} else {
max = c
}
if((a > b || a > c) && (a < b || a < c)) {
middle = a 
} else if((b > a || b > c) && (b < a || b < c)) {
middle = b 
} else {
middle = c
}
alert (min + ',' + ' ' + middle + ',' + ' '  + max)
