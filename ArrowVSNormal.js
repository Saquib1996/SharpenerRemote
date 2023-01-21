// function outerFunction() {

//     console.log(a);
//     var a = 10;
//     function innerFunction() {
//         console.log(a);
//         console.log(window.a);
//         console.log(this.a);
//     }

// }

// var a = 7;
// var b = 3;
// outerFunction();

// class Student {
//     constructor(name, age, marks) {
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     setPlacementAge(minPlacementAge) {
//         console.log(this);
//         return (minMarks) => {
//             console.log('Inside Eligible For Current Company ', this);
//             if (this.marks > minMarks && this.age > minPlacementAge) {
//                 console.log(this.name + " is ready for Placements");
//             } else {
//                 console.log(this.name + "is not ready for Placements");
//             }
//         }
//     }
// }
// const Yash = new Student('Yash', 25, 75);
// const Vaibhav = new Student('Vaibhav', 13, 35);
// Yash.setPlacementAge(18)(40);

// const Person = {
//     name: 'Max',
//     age: 28,
//     greet() {
//         console.log('Hi,I am ' + this.name);
//     }
// };

// const hobbies = ['Sports', 'Cooking'];



// console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
// console.log(hobbies);

// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// console.log(obj1);
// console.log(obj2);

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }

// const obj1 = {'key1': 1 , 'key2' : 2}
// const obj2 = { key1: 1000, ...obj1 }
// console.log(obj1)
// console.log(obj2)

// const Person = {
//     name: 'Max',
//     age: 28,
//     greet() {
//         console.log('Hi, I am ' + this.name);
//     }
// };
// const printName = ({ name, age, greet }) => {
//     console.log(name, age, greet);
// }

// printName(Person);

// const { name, age } = Person;
// console.log(name, age);

// const hobbies =['Sports','Cooking'];
// const [hobby1,hobby2] =hobbies;
// console.log(hobby1,hobby2);

// const arr1 = ['value1', 'value2']

// const [val1, val2] = arr1



// console.log(val1)

// console.log(val2)

// const obj1 = { 'key1': 1, "key2": 2, "key3": 1000 }

// let { key1, key3 } = obj1



// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)

// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(a,b,c);

// const person = { name: 'John', age: 30 };
// const { name, age } = person;
// console.log(name); // 'John'
// console.log(age); // 30
// console.log(name,age);


// const fetchData = (callback) => {
//     setTimeout(() => {
//         callback('Done!')
//     }, 1500)
// }

// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData((text) => {
//         console.log(text);
//     });
// }, 2000);

// console.log('Hello!');
// console.log('Hi!');

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// console.log('d');

console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 3000)

setTimeout(() => console.log('d'), 0)

console.log('e');

