const Person = require("./Person");

class Student extends Person {
  constructor(name, lastName, country, school) {
    super(name, lastName, country);
    this.school = school;
  }

  studentByCountryAndSchool(students) {
    const studentsByCountry = super.personByCountry(students);
    return studentsByCountry.filter(student => student.school === this.school);
  }

  toString() {
    return `${this.name} ${this.lastName} (${this.country}) - ${this.school}`;
  }
}

module.exports = Student;
