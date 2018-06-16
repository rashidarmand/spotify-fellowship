// Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

// Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢


// ** SOLUTION **
// In this version we set up our combinations array to be size amount + 1, then set the first value in combinations to 1. 
// We then loop through each of the denominations given to us. 
// Inside of that loop, we loop through the combinations array, each time incrementing the current combinations array value by the difference between the value and the coin only if the value at that particular point in the iteration is greater than the value of the coin. 
// At the end of both loops, we return the last element in the combinations array which is our answer.

function changePossibilities(amount, denominations) {

  let combinations = [];
  let count = 1

  while(count <= amount){
    combinations[count] = 0;
    count++;
  }

  combinations[0] = 1;

  denominations.forEach(coin=>{
    for(let i = 1; i < combinations.length; i++){
      if(i >= coin){
        combinations[i] += combinations[i - coin];
      }
    }
  });
  
  return combinations[amount];
}


// console.log(changePossibilities(4,[1,2,3])) // -> 4
// console.log('==============================')
// console.log(changePossibilities(12, [1,2,5])) // -> 13
// console.log('==============================')
// console.log(changePossibilities(10, [2,3,4])) // -> 5