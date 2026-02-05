// What does % do??

// Write a function called `isEven` that returns true if a number is even,
// false otherwise
export function isEven(n) {
  if(n % 2 === 0){
    return true;
  }else{
    return false;
  }
}

// Call the isEven function and log the result to the console (try doing this 
// yourself!)
console.log(isEven(2));

// After you've tried your function with different inputs, comment out any
// lines that print to the console in this file and run the tests!