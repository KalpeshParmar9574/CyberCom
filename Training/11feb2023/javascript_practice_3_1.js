//***/ case01***//

// Create a web application that contains a form with following fields.
// First Name
// Last Name
// Email
// Mobile Number
// Keep all the required validation on the application.
// Once user click on the submit, use function name as "saveDetails", it
// should be arrow function and return promise with "resolve" state if
// all the validations are correct. return "reject" if any of the
// validation is not correct and display proper error message.
function display() {
    alert("your form is submitted with correct values ")
}
function validate() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    return new Promise((resolve, reject) => {
        if (fname == "" || lname == "") {
            alert("name is not valid");
        return reject;
        }
        // if (email.test(regx)) {
        //     alert("name is not valid");
        // return reject;
        // }
        return resolve(display)
    })
}
validate().then((display) => {
    display();  
})

/*** Code  */

// case02 //


// Create a web application that contains three async functions,
// one that contains setTimeout with 5s with return statement as "output
// from one"
// second that contains setTimeout with 10s with return statement as
// "output from second"
// third that contains setTimeout with 15s with return statement as
// "output from third"
// output should be display as following,
// output from one
// output from two
// output from third

//**01 */ code is done by promise

// function one() {
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("function one it is take 5sec for exe ");
//             return resolve;
//         },10000)
//     })
// }
// function two() {
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("function two it is take 10sec for exe ");
//             return resolve;
//         }, 15000);
//     });
// }

// function three() {
//     console.log("function three it is take 15sec for exe ");
    
// }
// // initial function which is call
// function callBack() {
//     setTimeout(() => {
//         one()
//     }, 5000);
    
// }
// // calling initial function
// callBack();
// // calling first function

// // calling thirdfunction
// two().then(() => {
//     three()
// })

//**02 */ code is done by callbacks
// function init(one) {
//     setTimeout((one, two, three) => {
//         one(two,three);
//     }5000,);
// }

// function one(two ) {
//     console.log(" this code is run after 5 sec ")
//     setTimeout((three) => {
//         two(three)
//     })
// }
// function two(three) {
//     console.log("this function is call after 10 sec")
//     setTimeout(() => {
//         three();
//     },1500)
// }
// function three() {
//     console.log("this function is call after 15 sec")
// }

//**03*/code is completed with async and awaitc



