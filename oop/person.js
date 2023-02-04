//myPerson --> person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}`;
        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`;
        })
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes);
        this.position = position;
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName)
        this.grade = grade
    }
    getBio() {
        if (this.grade < 70) {
            return `${this.firstName} ${this.lastName} is failing the exam with ${this.grade} points.`
        } else {
            return `${this.firstName} ${this.lastName} has passed the exam with ${this.grade} points.`
        }
    }
    updateGrade(newGrade) {
        this.grade = newGrade
    }
}

// const student1 = new Student ('Aleks', 'Sentvinsent', 12);
// student1.fullName = "Johgny Ponny";
// console.log(student1.getBio());
// student1.updateGrade(75);
// console.log(student1.getBio());


const person1 = new Employee('Aleks', 'Sentvinsent', 12, 'teacher', ['test']);
person1.fullName = 'Benny Boo';
console.log(person1.getBio())
console.log(person1.getYearsLeft())