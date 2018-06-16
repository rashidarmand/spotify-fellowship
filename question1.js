// Question 1 -- sortByStrings(s,t): 
// Sort the letters in the string s by the order they occur in the string t. 
// You can assume t will not have repetitive characters. 
// For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". 
// For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".


// ** SOLUTION 1 **
// In this version, we are using the built in .sort() feature in JS which takes the string conversion of each character in an array (if not already a string), and sorts those characters of the array in place based on its Unicode point value. 
// We are passing in a comparison function with two parameters (a,b) that will sort the characters in ascending order based off their corresponding index in t. 
// This means characters with a higher index in t will be moved towards the end of the array until the array is sorted. 
// At the end of the sort, we join the characters array back together as a string to show our solution.

function sortByStrings(s,t){
  characters = s.split('')
  return characters.sort( (a, b) => t.indexOf(a) > t.indexOf(b) ).join('');
}


// ** SOLUTION 2 **
// In this version, we are looping through the array of characters in t and inside of that loop, we are looping through the array of characters in s. 
// Each iteration of the outer loop, we are checking for all occurences where s is equivalent to t and pushing those occurences into the output array. 
// At the end of the outer loop we are returning the output array joined together as a string.

function sortByStrings(s,t){
  let sArray = s.split('');
  let tArray = t.split('');
  let output = [];
 
  for(let i = 0; i < tArray.length; i++){
    for(let j = 0; j < sArray.length; j++){
      if(sArray[j] === tArray[i]){
        output.push(sArray[j]);
      }
    }
  }
  return output.join('')
}

// ** TESTS **
// console.log(sortByStrings('weather','therapyw')) // -> theeraw
// console.log('=================================')
// console.log(sortByStrings('good','odg')) // -> oodg
// console.log('=================================')
// console.log(sortByStrings('cooler','rceol')) // -> rceool