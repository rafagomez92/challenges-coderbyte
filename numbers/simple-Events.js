/* Challenge: Simple Evens
@author: Marcos Rafael Gómez Gómez

Have the function SimpleEvens(num) check whether every 
single number in the passed in parameter is even. If so, 
return the string true, otherwise return the string false. 
For example: if num is 4602225 your program should return the 
string false because 5 is not an even number.

Examples   Input: 2222220222  Output: true ----> Input: 20864646452 Output: false */

function SimpleEvens(num) {   
    const arrayNumber = num.toString();  
    let count = 0;
    let result;
    for (let i = 0; i < arrayNumber.length; i++) {    
      number = Number(arrayNumber[i]);
      number % 2 === 1 && count++;    
    } 
    count > 0 ?  result = false : result = true;  
    return result;
  }
     
  // keep this function call here 
  console.log(SimpleEvens(readline()));