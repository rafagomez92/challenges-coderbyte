/* Challenge: Dash Insert
@author: Marcos Rafael Gómez Gómez

Have the function DashInsert(str) insert dashes ('-') 
between each two odd numbers in str. For example: 
if str is 454793 the output should be 4547-9-3. 
Don't count zero as an odd number.

Examples  Input: 99946  Output: 9-9-946  ---> Input: 56730 Output: 567-30 */

function DashInsert(str) {   
    const arrayNumber = str.toString();
    let count = 0;
    const result = [];
    const add = '-'
    for (let i = 0; i < arrayNumber.length; i++) {    
      let checkNumber = Number(arrayNumber[i]);  
      checkNumber % 2 === 1 ? (count++, 
      count > 1 && (result.push(add), count--), 
      result.push(checkNumber)) 
      : (result.push(checkNumber), count === 1 && count--);
    }
    return result.join(''); 
  }
     
  // keep this function call here 
  console.log(DashInsert(readline()));