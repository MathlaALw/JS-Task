

// 1. Create Data for 5 Students
// data for 5 students
let students = [
    {
        name: "Salim",
        age: 35,
        grade: 88,
        city: "Muscat"
    },
    {
        name: "Sara",
        age: 19,
        grade: 85,
        city: "Alex"
    },
    {
        name: "Omar",
        age: 21,
        grade: 78,
        city: "Dubai"
    },
    {
        name: "Fatma",
        age: 22,
        grade: 92,
        city: "Riyadh"
    },
    {
        name: "Khalid",
        age: 23,
        grade: 88,
        city: "Cairo"
    }
];


// 2. Print Student Details
// Function to print student details
function printStudent(student) {
    console.log("Name: " + student.name);
    console.log("Age: " + student.age);
    console.log("Grade: " + student.grade);
    console.log("City: " + student.city);
    console.log("-----------------------------");
}

// Call the function for every student
for (let i = 0; i < students.length; i++) {
    printStudent(students[i]);
}


// 3. Add New Student
// New student
let newStudent = {
    name: "Mona",
    age: 20,
    grade: 95,
    city: "Manama"
};

// Add new student to the array 
let updatedStudents = [...students, newStudent];

// Print updated list
console.log(updatedStudents);

// 4. Destructure First Student
const { name, grade } = students[0];

// Print values of name and grade of first student
console.log("Name:", name);
console.log("Grade:", grade);

console.log("-----------------------------");
console.log("5. Check Student Grades and Cities");

// function to check the grade
function checkStudent(students) {
    if (students.grade >= 90) console.log(students.name + ": Excellent");
    else if (students.grade >= 75) console.log(students.name + ": Good");
    else if (students.grade >= 50) console.log(students.name + ": Pass");
    else console.log(students.name + ": Fail");




// check the grade for each student
switch (students.city) {
    case "Cairo":
        console.log("City: Cairo");
        break;

    case "Alex":
        console.log("City: Alexandria");
        break;

    default:
        console.log("City: Other");
        break;
}

console.log("-----------------------------");
}

// Call the function for every student
for (let i = 0; i < students.length; i++) {
    checkStudent(students[i]);
}

console.log("------------------------------");


console.log("6. Array Methods");
console.log("1. adding new student");
console.log("Before adding new student:", students);
// Pushing the data to students array
students.push({
    name: "Nasser",
    age: 24,
    grade: 81,
    city: "Amman"
});

console.log("After adding new student:", students);
console.log("------------------------------");
console.log("2. removing last student");
console.log("Before removing last student:", students);
// pop the last student from the array
students.pop();
console.log("After removing last student:", students);

console.log("------------------------------");
console.log("3. adding student to beginning");
console.log("Before adding student to beginning:", students);
// add a student to the beginning
students.unshift({
    name: "Laila",
    age: 18,
    grade: 90,
    city: "Bahrain"
});
console.log("After adding student to beginning:", students);
console.log("------------------------------");
console.log("4. removing first student");
console.log("Before removing first student:", students);
// remove the first student from the array
students.shift();
console.log("After removing first student:", students);
console.log("------------------------------");
console.log("5. creating a new small array using slice");
console.log("Before creating new small array:", students);
// Create a new small array  
/* make a copy from the array without modifying the original and return new array --start from index 0 to index 2 */
let newStudents = students.slice(0, 3);
console.log("New Students Array:", newStudents);
console.log("------------------------------");
console.log("6. Check if a student name exists using includes() ")
console.log("array of student names only");
// array of names
let studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

// check if students name is exists using includes
console.log("is Omar in the list?",studentNames.includes("Omar")); 
console.log("is Yousef in the list?", studentNames.includes("Yousef")); 