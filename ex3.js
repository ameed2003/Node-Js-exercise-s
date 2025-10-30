//EX #3 :

let arr = [10, 0, 2, 0];
let count = 0; // Counter for the number zero .
for (
  let i = 0;
  i < arr.length;
  i++ // A loop for passing the array .
) {
  count += Number(arr[i] == 0); // If using boolean terms to check if the number is zero if true add one to the count else add zero .
}
console.log(count);
