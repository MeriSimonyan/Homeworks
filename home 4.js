//1 ???
function Fib (n)
{
const arr = [1,1]
for (let i = 2; i <= n; i++) {
arr[i] = arr[i - 2] + arr[i - 1]
}  
return arr
}




//3
let array = []
let max
let min
function MaxValue(array){
    let max = array[0]; 
    for (let i = 0; i < array.length; i++) { 
        if (max < array[i]) max = array[i]; 
    }
    return max;
}
 function MinValue(array){
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}
if (array.indexOf(max - min)) {
alert(true)
    } else {
alert(false)
}


//4
let myArray = []
let max = myArray[0];
let secondMax = myArray[0];
for(let i = 0; i < myArray.length; i++){
if(myArray[i] > max){
secondMax = max;
max = myArray[i];
        }
else if(myArray[i] > secondMax && myArray[i] != max)
secondMax = myArray[i];
    }

console.log(secondMax)


//6
function rectangle (number) {
let res = ''
for (let i = 0; i < number; i++) {
let row = ''
for (let j =0; j < number; j++) {
row += ' * '
}
res+= row
res+= '\n'
}
return res 
}



//7 chstacvac
let number = 5
let res = ''
debugger
for (let i = 0; i < number; i++) {
let row1 = ''
let row2 = ''
let row3 = ''
let row4 = ''
let row5 = ''
for (let j = 0; j < number; j++) {
row1 += ' * '
row2 += ' * ' + ' ' + ' ' + ' ' + ' * '
row3 += ' * ' + ' ' + ' ' + ' ' + ' * '
row4 += ' * ' + ' ' + ' ' + ' ' + ' * '
row5 += ' * '
}
res+= row1
res+= '\n'
res+= row2
res+= '\n'
res+= row3
res+= '\n'
res+= row4
res+= '\n'
res+= row5
res+= '\n'
}
console.log(res)


//8
function pattern (number) {
res = ''
for (i = 0; i <= number; i++) {
let row = ''
for (j = 0; j  < i+1; j++) {
row += j 
}
res += row 
res += '\n'
}
return res
}





