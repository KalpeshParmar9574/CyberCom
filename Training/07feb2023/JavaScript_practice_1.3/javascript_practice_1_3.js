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
// const arr03 = [{ name: "kp", age: 23 }, { name: "jay", age: 21 }, { name: "manish", age: 23 }];
// for (let i = 0; i < arr03.length - 1; i++){
//     if (arr03[i].age > arr03[i + 1].age) {
//         let temp = arr03[i].age;
//         arr03[i].age = arr03[i + 1].age;
//         arr03[i + 1].age = temp;
//     }
// }
// arr03.forEach((i) => {
//     console.log(i.age);
// })
//****   Done */


//*****task04*****//
// 4. Write a function that takes an array as an argument and returns a new array with
// duplicates removed.

// arr04 = [12., 12, 23, 3, 423, 2, 342232, 23, 32,];
// function duplicateRemove(arr04) {
//     let newarr = [];
//     arr04.forEach((i) => {
//         if (!newarr.includes(i)) {
//             newarr.push(i);
//         }
//     })
//     return newarr
// }
// console.log(duplicateRemove(arr04));
//**** Done */

//***** task05 *****//
// Write a function that takes two arrays as arguments and returns a new array that
// combines the elements of both arrays, removing any duplicates.

// arr05 = [12, 243, 54, 2323, 444, 4, 5, 55, 3];
// arr055 = ["dfd", "sfdfede", "wew", "dfd"];

// function add2arr(arr01, arr02) {
//     let arr3 = [];
//     arr3 = arr01.concat(arr02);
//     return [...new Set(arr3)];
// }
// console.log(add2arr(arr05, arr055));
//**** Done */

//***** task06*****//
// Create an array of strings and write code to sort the strings in alphabetical order.
 var arr06 = ["asdf", "sdf", "fd", "edf"]; //without using sort method

console.log(arr06.sort());// using sort method 