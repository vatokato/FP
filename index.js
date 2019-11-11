const Student = require("./Student");

const students = [];
students.push(new Student("ivan", "Ivanov", "Russia", "1"));
students.push(new Student("Petr", "Petrov", "Russia", "1"));
students.push(new Student("Oleg", "Olegov", "Russia", "2"));
students.push(new Student("Dima", "Dimov", "Russia", "3"));
students.push(new Student("Peter", "Nilson", "Sweden", "1"));
students.push(new Student("Mike", "Stone", "USA", "1"));
students.push(new Student("John", "Week", "USA", "2"));
students.push(new Student("Stan", "Marsh", "USA", "2"));

students.forEach(student => {
  console.log(student.toString());
});

console.log(students[7].studentByCountryAndSchool(students));