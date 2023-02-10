// const checkString = function (s) {

//     var left =0;
//     var right= s.length-1;
//     var status = false;
//     while(left>=s.length){
//         if(s.charAt(left)!==s.charAt(right)){
//             return status;
//         }
//         left++;
//         right--;
//     }
//         status= true;
//         return status;

// }
// var s = "abcab";
// console.log(checkString(s));

// case02

// Write a JavaScript function that returns array elements larger
// than a number, Array input should be dynamic.
function test() {
    var userInp = document.getElementById("arr").value;
    var target = parseInt(document.getElementById("target").value);
    var dynamicArray = [];
    // convert user input into array elements
    for ( let i = 0; i < userInp.length; i++ ) {
        dynamicArray[i] = userInp.charAt(i);
    }
    //
    // function that check thatb user input arrays elements are greater than target elements or not 
    const case02 = function (arr, target) {
            var result = []
            arr.map((element) => {
                if (element > target) {
                    result.push(element);
                }
            })
            return result;
        }
        // var arr = [21, 232, 1, 2, 32, 212,];
        // var target = 23;
    document.getElementById("result").textContent = ` your result is here => ${case02(dynamicArray, target)}`;
        // console.log();
   
 }

//  
//*** note currently the case02 is static  */

// case03 
// var case03 = function (obj, target) {
//     var count = 0
//     obj.map((elements) => {
//         if (elements.age > target) {
//             count++;
//         }
//     })
//     return count;

// }
// var arr = [
//     {
//         id:1,
//     name: "John",
//     age:10
//     },
// {
//     id:2,
//     name: "doe",
//     age:40
// },
// {
//     id:3,
//     name: "Kathy",
//     age:29
// }
// ]
// var target = 20;
// console.log(case03(arr,target))