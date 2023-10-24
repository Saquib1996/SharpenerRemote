const hobbies = ['Sports', 'Cooking', 'Racing', "horsing"];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

// console.log((hobbies.map((hobby)=>{
//     return ('hobby : ' + hobby)
// })));

// hobbies.push('Programming');

// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];

console.log(copiedArray);
console.log(hobbies);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4, 5,4,5));