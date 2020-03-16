/* Challenge: Word Count
@author: Marcos Rafael Gómez Gómez 

Have the function VowelCount(str) take the str string parameter being passed 
and return the number of vowels the string contains (ie. "All cows eat grass and moo" 
would return 8). Do not count y as a vowel for this challenge.

Examples Input: "hello" Output: 2 Input: "coderbyte" Output: 3 */

function VowelCount(str) { 
    // Usando switch
    // let count = 0;
    // // const vowel = ['a', 'e', 'i', 'o', 'u'];
    // for(let i = 0; i < str.length; i++) {
    //   switch (str[i]) {
    //     case 'a':
    //       count++;
    //       break;
    //     case 'e':
    //       count++;
    //       break;
    //     case 'i':
    //       count++;
    //       break;
    //     case 'o':
    //       count++;
    //       break;
    //     case 'u':
    //       count++;
    //       break;
    //   }
    // } 
  
    const numberVowels = str.match(/[aeiou]/gi).length;
    return numberVowels;
  
  }
     
  // keep this function call here 
  console.log(VowelCount(readline()));