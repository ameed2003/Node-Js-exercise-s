// Ameed Halabi & Lotem Sharir

// EX #1 :

const num = 30; // creating a number .

// Checking in what number the num above devided by :
const a = num % 2 == 0;
const b = num % 3 == 0;
const c = num % 5 == 0;

const A = a || b || c; // checking if the number devided by one number only
const B = (a && b) || (b && c) || (a && c); // checking if the number devided by two numbers . 
//  checking if the number devided by three numbers
const C = a && b && c;

console.log("The number can be devided by " + Number(A + B + C) + " number/s"); // printing the answer .




//EX #3 :

let arr = [10 , 0 , 2 , 0] ;
let count = 0 ;
for (let i=0 ; i<arr.length ; i++)
{
  count += Number(arr[i] == 0) ;  
}
console.log(count) ;




