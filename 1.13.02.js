let a 
let b 
let c 
if (a == 0 || b == 0 || c == 0) {
alert('unsigned')
} else if (a < 0 || b < 0 || c < 0) {
alert('-')
} else if (a > 0 && b > 0 && c > 0) {
alert('+')
} else if (a < 0 && b < 0 && c > 0 || a < 0 && c < 0 && b > 0 || b < 0 && c < 0 && a > 0) {
alert('+')
}
