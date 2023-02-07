// javascript practice 1.3 tasks

//*****task01****//
// 1. Create an array of numbers and write code to calculate the sum, average, and maximum
// value of the numbers in the array.

// const arr = [12, 234, 434, 123, 233, 43, 432, 334, 34, 34, 3, 45, 4, 5];
// arr.forEach((i) => {
//     console.log(i);
// })
//**** Done */


// task02
// Create an array of strings and write code to find the longest string in the array.
// const arr_str = ["str", "abc", "shsg", "nhshsg"];
// var rsIndex;

// for (var i = 0; i < arr_str.length-1; i++){
//     if (arr_str[i+1].length > arr_str[i].length) {
//         rsIndex = i + 1;
//     }
// }
// console.log(arr_str[rsIndex]);
//**** Done */

// task03
// Create an array of objects and write code to sort the objects based on a specific
// property (e.g., name, age, etc.).
const arr03 = [{ name: "kp", age: 23 }, { name: "jay", age: 21 }, { name: "manish", age: 23 }];
arr03.forEach((i) => {
    console.log(arr03[i].name);
});
