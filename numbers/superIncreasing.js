/* Challenge: Superincreasing
@author: Marcos Rafael Gómez Gómez

Have the function Superincreasing(arr) take the array of numbers 
stored in arr and determine if the array forms a superincreasing 
sequence where each element in the array is greater than the sum 
of all previous elements. The array will only consist of positive 
integers. For example: if arr is [1, 3, 6, 13, 54] then your program 
should return the string "true" because it forms a superincreasing sequence. 
If a superincreasing sequence isn't formed, then your program should 
return the string "false".

Examples  Input: [1,2,3,4]   Output: false  --> Input: [1,2,5,10] Output: true */

function Superincreasing(arr) { 
    let sumArray = arr[0];
    let count = 0;
    let result;
  
    for (let i = 1; i < arr.length; i++) {    
      sumArray > arr[i] && count++;
      sumArray += arr[i];            
    }
    count > 0 ? result = false : result = true;  
    return result; 
  }
     
  // keep this function call here 
  console.log(Superincreasing(readline()));