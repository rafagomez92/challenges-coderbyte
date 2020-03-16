// Remove Brackets
// Have the function RemoveBrackets(str) take the str string parameter being passed, which will contain only the characters "(" and ")", and determine the minimum number of brackets that need to be removed to create a string of correctly matched brackets. For example: if str is "(()))" then your program should return the number 1. The answer could potentially be 0, and there will always be at least one set of matching brackets in the string.
// Examples
// Input: "(())()((("
// Output: 3
// Input: "(()("
// Output: 2

function RemoveBrackets(str) {       
    count = 0;   
    value = '('
    for (let i = 0; i < str.length; i++){
      str[i] === value ? count++ :
      count--;
    }   
    return Math.abs(count); 
  }
     
  // keep this function call here 
  console.log(RemoveBrackets(readline()));