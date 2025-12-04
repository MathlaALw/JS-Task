(function () {
    // Task 2: Create a class Person with properties name (string), age (number), and password (string).
    // The class should have a method Hello that prints "Hello, my name is [name] and I am [age] years old.".
    // Create N instances of the Person class and call the Hello method for each instance.
    // Additionally, keep track of how many Person instances have been created and print that number at the end.
    // count variable to keep track of number of instances
    var count = 0;
    // Person class definition
    var Person = /** @class */ (function () {
        // constructor to initialize properties and increment count -> this is the first method called when an instance is created
        function Person() {
            // properties
            this.name = "Sara";
            this.age = 25;
            this.password = "1234";
            // call Hello method
            this.Hello();
            // increment count
            count++;
        }
        // Hello method
        Person.prototype.Hello = function () {
            // print message
            console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
        };
        return Person;
    }());
    // create N instances of Person class
    var p1 = new Person();
    var p2 = new Person();
    var p3 = new Person();
    var p4 = new Person();
    var p5 = new Person();
    var p6 = new Person();
    var p7 = new Person();
    var p8 = new Person();
    var p9 = new Person();
    var p10 = new Person();
    // print number of instances created
    console.log("Number of Person created: ".concat(count));
})();
