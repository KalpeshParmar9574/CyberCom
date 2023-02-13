// case0 example from the ppt


// function _addTeaLeave() {
//     console.log("tea leaves are added " + "this function is running after 2sec");
// }
// function _addMilk() {
//     console.log("milk is added..." + "this functon is running after 5 sec");
// }
// function _boilWater(addMilk, addTeaLeave) {
//     console.log("water is boiling now..");
//     setTimeout(() => {
//         setTimeout(() => {
//             addMilk();
//         }, 3000);
//         addTeaLeave();
//     }, 2000)


// }

// _boilWater(_addMilk,_addTeaLeave);
//*** Done  */


// Case 1:
// Create a web application that contains three callbacks' functions.
// One function that contains delay of 10s, once this is executed, second
// function will start executing (with 10s delay).
// Once second function will be executed, third function will start
// executing (with 8s delay).
// Each function will have console statement stated as "X function is
// start executing

// function _one(){
//     console.log("function one is strat execution at 8sec ");

// }
// function _two(){
//     console.log("function two is start after  execution after 10sec  ");

// }
// function _three(){
//     console.log("function three is start  execution after 10sec");

// }
// debugger
// function callBack ( one , two,three){
//     // setTimeout(()=>{
//     //         one()
//     // },8000);

//     // setTimeout(()=>{
//     //     two();
//     // },10000)
//     // setTimeout(()=>{
//     //     three()
//     // },10000)

//     setTimeout(()=>{
//         three();
//         setTimeout(()=>{
//             two()
//             setTimeout(()=>{
//                 one();
//             })
//         },10000)
//     },8000)
// }
// callBack(_one, _two,_three)

// case02 form validation

function validate() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var mn = document.getElementById("mn");
    
    


}