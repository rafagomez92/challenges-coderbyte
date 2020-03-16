/* Challenge: Swap Case
@author: Marcos Rafael Gómez Gómez 

Have the function SwapCase(str) take the str parameter and swap the case 
of each character. For example: if str is "Hello World" the output should 
be hELLO wORLD. Let numbers and symbols stay the way they are.

Examples Input: "Hello-LOL" Output: hELLO-lol  ---> Input: "Sup DUDE!!?" Output: sUP dude!!? */

function SwapCase(str) {   
    const result = [];
    let lowerString = str.toLowerCase();  
    for (let i = 0; i < str.length; i++) {
      lowerString[i] === str[i] ? result.push(str[i].toUpperCase()) :
      result.push(str[i].toLowerCase());    
    }
    return result.join(''); 
  }
     
  // keep this function call here 
  console.log(SwapCase(readline()));

