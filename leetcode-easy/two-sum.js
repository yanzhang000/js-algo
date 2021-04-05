/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

const arr = [2,7,11,15];
const target = 9;

const twoSum = (arr, target) => {
  if (arr === null || arr.length === 1) {
    return [];
  }

  let twoSumSolution = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j === i || typeof arr[i] !== 'number' || typeof arr[j] !== 'number') {
        continue;
      }
      else if (arr[i] + arr[j] === target) {
        twoSumSolution = [arr[i], arr[j]];
      }
    }
  }

  return twoSumSolution;
};



// hashtable solution o(N)
const twoSumHashTable = (arr, target) => {
  if (arr === null || arr.length === 1) {
    return [];
  }
  
  const twoSumSolution = [];
  
  const arrHash = {};
  for (let i = 0; i < arr.length; i++) {
    arrHash[arr[i]] = i;
  }
  
  let compliment; 
  for (let j = 0; j < arr.length; j++) {
    compliment = target - arr[j];
    if (arrHash[compliment] && arrHash[compliment] !== j) {
      twoSumSolution[0] = compliment;
      twoSumSolution[1] = arr[j];
      return twoSumSolution;
    }
  }
  
  return twoSumSolution;
  
}








