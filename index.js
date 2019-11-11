const Student = require("./Student");
const data = require('./data');

const students = data.students.map(
  student => new Student(student.name, student.lastName, student.country, student.school)
);

students.forEach(student => {
  console.log(student.toString());
});

console.log(students[7].studentByCountryAndSchool(students));
