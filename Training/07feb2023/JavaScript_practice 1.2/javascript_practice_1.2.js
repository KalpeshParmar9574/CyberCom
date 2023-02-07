// task01 object that store persons details extended task 
// function add() {
//     const obj = new Object();
//     var name = document.getElementById("name").value;
//     var age = document.getElementById("age").value;
//     var work = document.getElementById("work").value;
//     obj.name = name;
//     obj.age = age;
//     obj.work = work;
//     console.log(obj.name + "" + obj.age + "" + obj.work);

// }

// task 02
// const product = {
//     name: "pen",
//     price: 10,
//     Quality: "good",
//     stock: "yes",
//     Quantity: 7
// }
// let Quantity = 5;
// const billPrice = product.price * Quantity;
// console.log(billPrice);

//  document.getElementById("product").innerHTML = `"<h3>${product.name}</h3><br><P>${product.price}</p> &nsbp <p>${product.Quality}</p>"`;

// var buyQuantity = document.getElementById(buy).value;
// if (buyQuantity > product.Quantity) { }

// task03
// Create an array of objects to store information about multiple people or products. Write
// code to loop through the array and display the information for each object. 
   
// const arr = [
//     {name:"pen",price: 10,Quality: "good"},
//     { name: "cabel", price: 200, Quality: "average" },
//     { name: "moouse", price: 750, Quality: 'best' }
// ];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i].name + " " + arr[i].price + " " + arr[i].Quality);
// }

//task04 Write a function that takes an object as an argument and returns a new object with
// specific properties. For example, a function that takes an object with name, age, and
// address properties and returns an object with only the name and age properties.
// var OBJ = {
//     name: "kp",
//     age: "22",
//     id:"007"
// }
// function changeobj(OBJ) {
//     const obj2 = Object.assign(OBJ);
//     console.log(obj2);
// }
// task05 Write a function that takes two objects as arguments and returns a new object that
// combines the properties of both objects. For example, a function that takes two objects
// with name and age properties and returns an object with name, age, and address
// properties
var obj1 = {
    name: "kp",
    age: "22",
    id:"007"
}
var obj2 = {
    add:"anand"
}
function tsk05(obj1, obj2) {
    var a = Object.assign(obj1, obj2);
console.log(a.add);

}


