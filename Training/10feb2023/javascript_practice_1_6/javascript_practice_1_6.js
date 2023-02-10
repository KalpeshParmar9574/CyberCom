//***** case05 */

// Given an integer array nums that may contain duplicates, return all possible
// subsets
// (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// // Example 1:
// var nums = [1, 2, 2];
// // Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// // Example 2:
// // Input: nums = [0]
// // Output: [[],[0]]


// var jsprac1_6_1 = function(nums) {
//     var result = [];
//     nums.sort((a, b) => a - b);
//     var temp = [];
//     backtrack(nums, 0, result, temp);
//     return result;
//   };
  
//    function backtrack (nums, start, result, temp) {
//     result.push(Array.from(temp));
  
//     for (var i = start; i < nums.length; i++) {
//       if (i === start || nums[i] !== nums[i - 1]) {
//         temp.push(nums[i]);
//         backtrack(nums, i + 1, result, temp);
//         temp.pop();
//       }
//     }
//   };

// console.log(jsprac1_6_1(nums));


////
// A message containing letters from A-Z can be encoded into numbers using the following
// mapping:
// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters
// using the reverse of the mapping above (there may be multiple ways). For example, "11106"
// can be mapped into:
// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is
// different from "06".
// Given a string s containing only digits, return the number of ways to decode it.
// The test cases are generated so that the answer fits in a 32-bit integer.
/**
 *
 */
 var s = "22";

const case06 = (s) => {
  const decoder = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
  };

  let ways = new Array(s.length + 1).fill(0);
  ways[0] = 1; // [1, 0, 0, ...., 0]

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j <= i - 1; j++) {
      let substr = s.substring(j, i);
        // console.log(substr);
      if (substr in decoder) {
        ways[i] += ways[j];
        console.log(" inside the condition : " + ways);
      }
    }
  }

  return ways.at(-1);
};

console.log("possible number of ways :- " + case06(s));