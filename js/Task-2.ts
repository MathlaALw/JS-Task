(function () {

    // Task 2: Create a class Person with properties name (string), age (number), and password (string).
    // The class should have a method Hello that prints "Hello, my name is [name] and I am [age] years old.".
    // Create N instances of the Person class and call the Hello method for each instance.
    // Additionally, keep track of how many Person instances have been created and print that number at the end.



    // count variable to keep track of number of instances
    let count = 0;
    // Person class definition
    class Person {
        // properties
        public name: string = "Sara";
        public age: number = 25;
        private password: string = "1234";
        // constructor to initialize properties and increment count -> this is the first method called when an instance is created
        constructor() {
            // call Hello method
            this.Hello();
            // increment count
            count++;
        }

        // Hello method
        Hello() {
            // print message
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    // create N instances of Person class
    let p1 = new Person();
    let p2 = new Person();
    let p3 = new Person();
    let p4 = new Person();
    let p5 = new Person();
    let p6 = new Person();
    let p7 = new Person();
    let p8 = new Person();
    let p9 = new Person();
    let p10 = new Person();

    // print number of instances created
    console.log(`Number of Person created: ${count}`);
})();
