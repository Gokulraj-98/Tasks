class Person {
    constructor(name, age, gender, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Email: ${this.email}`;
    }

    
}


const person1 = new Person("Gokul", 25, "Male", "gokulraj8248@gmail.com");
console.log(person1.getDetails()); 
