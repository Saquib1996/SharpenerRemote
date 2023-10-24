var name = 'Max';
var age = 29;
var hasHobbies = true;

const summarizeUser = (name, age, hobby) => {
    return ('userName is ' + name + '  age is  ' + age + ' hobby ' + hobby);
}

const add = (a, b) => a + b
const addOne = a => a + 1
console.log(add(1, 2));
console.log(addOne(1));
console.log(summarizeUser(name, age, hasHobbies));