var inputString = "";
var button = document.getElementsByClassName(".btn");
 function  calculate  (e) {
    if (this.target.innerHTML == "+") {
        console.log("click")
    }
}
// btn.addEventListner('click', (e) => {
//     if (e.target.inneHtml = "=") {
//         string = eval(string);
//         document.querySelector(".inp").value = string;

//     } else
//         if (e.target.innerHTML = "c") {
            
//             string = "";
//             document.querySelector(".input").value = "string";

//         }
    
//         else {
//             string = string + e.target.innerHTML;
//             document.querySelector(".inp").value = string;

//         }
// });


// task02
// Create an application that calculate the BMI of user. Mass & height will be
// taken dynamically from the user input and output will be displayed on the
// label.
// BMI formula: mass / height ^ 2
// (Mass in kg and height in meter)

// var BMI = function () {
//     let height = document.getElementById("height");
//     let weight = document.getElementById("weight");
//     let BMI = weight / height * height;
//     document.querySelector("#result02").textContent = `your BMI is ${BMI}`;

// }

// task03
// Create a function that returns the array of each letter passed as string via
// argument.
// Example:
// Input: “abc”
// Output: [a,b,c]

// const arr = function () {
//     document.querySelector("#result03").textContent = `your Array is ${document.getElementById("arrInp").split}`;
// }

// task04
// Create a function that calculate age based on the date of birth. “Date of
// birth” will be passed via function argument.


// var userDate = document.getElementById("dob");
// var dob = new Dat(userDate);  
// var month_diff = Date.now() - dob.getTime();  
// var age_dt = new Date(month_diff);         
// var year = age_dt.getUTCFullYear();  
// var age = Math.abs(year - 1970);  
  
// document..quweySelector("#result04").textContent = "Age of the date entered: " + age + " years";
