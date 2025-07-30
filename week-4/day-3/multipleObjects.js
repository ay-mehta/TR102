class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    introduce() {
        return this.name + " is in grade " + this.grade;
    }
}

let s1 = new Student("Rahul", 10);
let s2 = new Student("Meera", 12);

console.log(s1.introduce());
console.log(s2.introduce());