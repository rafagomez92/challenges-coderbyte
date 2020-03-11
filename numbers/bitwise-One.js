/* Challenge: Bitwise One
@author: Marcos Rafael Gómez Gómez

Have the function BitwiseOne(strArr) take the array of strings stored 
in strArr, which will only contain two strings of equal length that 
represent binary numbers, and return a final binary string that performed 
the bitwise OR operation on both strings. A bitwise OR operation places a 0 
in the new string where there are zeroes in both binary strings, otherwise it 
places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your 
program should return the string "1101"

Examples Input: ["100", "000"] Output: 100   ----> Input: ["00011", "01010"] Output: 01011 */

function BitwiseOne(strArr) { 
    const arr1 = strArr[0].toString();  
    const arr2 = strArr[1].toString();  
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] !== arr2[i] ? result.push(1) : result.push(Number(arr1[i]));    
    }
    return result.join('');
  }
  // keep this function call here 
  console.log(BitwiseOne(readline()));