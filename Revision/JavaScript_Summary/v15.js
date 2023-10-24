const person = {
    name: 'Max',
    age: 20,
    greet() {
        console.log('Hi I am ' + this.name);
    }
}

person.greet();

console.log(person);

console.log({...person});