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

class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minPlacementAge) {
        console.log(this);
        return (minMarks) => {
            console.log('Inside Eligible For Current Company ', this);
            if (this.marks > minMarks && this.age > minPlacementAge) {
                console.log(this.name + " is ready for Placements");
            } else {
                console.log(this.name + "is not ready for Placements");
            }
        }
    }
}
const Yash = new Student('Yash', 25, 75);
const Vaibhav = new Student('Vaibhav', 13, 35);
Yash.setPlacementAge(18)(40);
