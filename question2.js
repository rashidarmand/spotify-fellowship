// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. 
// Note: k is guaranteed to be a positive integer. 

// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"


// ** SOLUTION 1 **
// In this version, we create a regular expression to check for the pattern 'digit, open bracket, character, close bracket'. 
// We then use the built in .replace() method and pass in the regex and an anonymous function to replace the matching value in the string with the character repeated by the number of times of its digit. 
// However, this only does the replacement on one match. 
// To to account for that, we create a conditional statement to recursively call decodeString on the newString until it meets the base case in which the pattern is no longer present in the string.

function decodeString(s) {
  
  let pattern = /(\d+)\[(\w+)]/;
  let newString = s.replace(pattern, (match, digit, character)=>{
    return character.repeat(digit);
  });
  
  if(!pattern.test(newString)){
    return newString;
  } else{
    return decodeString(newString);
  }

}


// ** SOLUTION 2 **
// In this version , we create an array of characters meeting the regEx pattern. 
// We then loop through the array from the back looking for digits. 
// We have a conditional to see if the array item at the current iteration and the item two before it are numbers or if its just a number (begining of list). 
// If it's not the beginning of the list, we alter the array in place using splice to repeat the string in front of the digit as many times as the digit's value and also concatenate the string behind it with the new string we just created. 
// If it is the beginning of the list, we only repeat the string in front of the digit as many times as the digit's value

function decodeString(s) {
  
  let sArray = s.match(/\b[a-z]+|\d/gi);
  
  for(let i = sArray.length - 1; i >= 0; i--){

    if( parseInt(sArray[i]) && parseInt(sArray[i - 2]) ){
      sArray.splice( i, 2, sArray[i + 1].repeat(+sArray[i]) );
      sArray.splice( i - 1, 2, sArray[i - 1] + sArray[i] );
    }else if( parseInt(sArray[i]) ){
      sArray.splice(i, 2, sArray[i + 1].repeat(+sArray[i]) );
    }
  }
  return sArray.join('')
 
}

// ** TESTS **
// console.log(decodeString('4[ab]')); // -> abababab
// console.log('=========================')
// console.log(decodeString('2[b3[a]]')); // -> baaabaaa
// console.log('=========================')
// console.log(decodeString("2[k4[Rj]]")); // -> kRjRjRjRjkRjRjRjRj