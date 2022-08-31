// q1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

let parent ={
    name : 'taani',
    age : 21
}
let child ={
    address : 'h-1 ABCD',
    occupation : 'student'
}

child._proto_ = parent;
console.log(child._proto_.age);

parent._proto_ = child;
console.log(parent._proto_.place);

// q2. Write code to explain prototype chaining

var Person = function(name , yearofbirth , occupation){
    this.name = name;
    this.yearofbirth = yearofbirth;
    this.occupation = occupation;
}

Person.prototype.calculateAge = function(){
    var currentYear = new Date().getFullYear();
    var age = currentYear - this.yearofbirth;
    console.log(age);;
}

Person.prototype.city = 'delhi';

var jerry = new Person('jerry', 2000 , 'student');
console.log(jerry); 


// q3. Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let initialValue = 0;
let sum = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sum);

// q4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

const object1 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  console.log(Object.getOwnPropertyNames(object1));