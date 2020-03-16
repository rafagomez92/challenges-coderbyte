// Find Intersection
// Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

function FindIntersection(strArr) { 
    
    let first = strArr[0].split(",");
    let second = strArr[1].split(",");  
    const result  = [];
  
    for (let i = 0; i < first.length; i++) {
      const value = second.find(e => e === first[i]);
      value && result.push(value.split(" "));    
    }
    return result.join('');
  }
     
  console.log(FindIntersection(readline()));