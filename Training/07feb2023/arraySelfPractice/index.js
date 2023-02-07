// Array and objects self preactice
// def:- arrays are the collection of the items
// creating and initilatizing array
//***use any key word literals/directly/***constructor using new key word//

//**** method 01
// var arr = [1, 2, 3, 4];
//**** method 02
// var arr = new Array();
// arr[0] = "xyz";
// arr[2] = 122;
//*** method 03
// var arr = new Array("xyz", "abc", 234);
//**** array method  */
// 01 concatination it return object which is containe both of the array
var arr = ["abx", 12312,"asbab","hkjh","shgd"];
var arr2 = ["kla", 432];
// console.log(arr.concat(arr2));
//***02copywithin(target,str,end) return the copy of oringal array it is copy the elements from the given array
// console.log(arr.copyWithin(0, 1));// Q1
//***03entries()	It creates an iterator object and a loop that iterates over each key/value pair.
// console.log(arr.entries());
// var itr=arr.entries()
// for (var i of itr) {
//     console.log(i);
// }
//04 every() its check that all elements of arrays are satisfy the give condition or not return boolean
// var int = [11, 23, 42, 21, 46, 78]
// console.log(int.every((value) => {
//     return value > 25;
// }))
//05  flat()It creates a new array carrying sub-array elements concatenated recursively till the specified depth.
// var arr05 = [[1, 25, 3,], "abc", "xyz"]
// var newarr05 = arr05.flat(2);
// console.log(newarr05);
//06 flatMap() map all the elements and then flaten the items
//07fill() fill element into array
// console.log(arr.fill("kp"));
//08 from()create new array carring exact copy of another array element Array.from(object,map_fun,thisArg); should pass the string
// var ar = Array.from("124874");
// console.log(ar);
//09 It returns the new array containing the elements that pass the provided function conditions.array.filter(callback(currentvalue,index,arr),thisArg)
// var arr9 = [12, 234, 56, 7654, 322];
// console.log(arr9.filter((value) => {
//     return value > 100;
// }))
//10 slice extract the part of the array
// console.log(arr.slice(1, 4));
//11 splice add/remove element form the given array array.splice(start,deleteNO,element1)
// pop remove element and return the lastn element of the array
// console.log(arr.pop());
// push it is add the element at the end of the array
// arr.push("kp");
// console.log(arr[5])
// reverse it is reverse the array
// console.log(arr.reverse());
 // sort it is sort the array in acceding formate 
// var a = [1, 23, 4, 5, 3, 4];
// var rs = a.sort();
// console.log(rs);

///////********** Object Methods  ************///////

