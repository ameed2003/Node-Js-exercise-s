// Ameed Halabi & Lotem Sharir

// EX #2 :

let flag = true;
// A loop to check all the numbers until the number 237 : 
for (let i = 1; i < 237; i++) 
  {
// Inner loop to check if the number can be devided by any number before reaching the current number :
  for (let j = 2; j < i && flag; j++) 
  {
    if (i % j == 0) flag = false; // If the number can be devided by previus number set flag on false and exit the loop using (&&flag) in the loop above .
  }
  if (flag == true) console.log(i);
  flag = true; // Reseting flag for the next number .
}

