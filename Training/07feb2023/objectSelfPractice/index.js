///Object Methods ///
// def objects is an entity having state and behavior(prop&methods)
// creating objects
// three methods for crearting the objects
// By object literal
// By creating instance of Object directly (using new keyword)
// By using an object constructor (using new keyword)
//01 object {prop:value}
//02 var obj = newObject();
//03 func xyz() {this.id,this.name,this.work} a= new xyz(01,kp,eng) this refer current object


//*** methods of the objects ***//
var obj = {
    name: "kp",
    id: 23,
    work: "SE",
    place:"ccc"
}
var obj2 = {
    no: 945474354,
    gender:"male"
}
//01 Object.assign() it is copy the prop of one or more object into one obj

// Syntax Object.assign(target, sources)
// var test = Object.assign({ id: 25 }, obj);
// console.log(test.place);
//02 object.create() syntax Object.create(prototype[, propertiesObject])
// The Object.create() method is used to create a new object with the specified prototype object and properties
// const details {
//     name:$this,

// }
//03 The Object.defineProperty() method defines a new property directly on an object and returns the object
// Object.defineProperty(obj, 'mobile', { value: 2, });
// console.log(obj.mobile)
//04 Object.entries()
// console.log(Object.entries(obj));
//05 object.freez() prevent object props from remove
//06 	Object.getOwnPropertyDescriptor() turns a property descriptor for the specified property Object.getOwnPropertyDescriptor(obj, prop)
// var a = (Object.getOwnPropertyDescriptor(obj2), 'no');
// console.log(a); 
//07 	Object.getPrototypeOf()  The Object.getPrototypeOf() method of JavaScript returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
// let ob = Object.create(obj);
// console.log(Object.getPrototypeOf(ob)===obj) 
