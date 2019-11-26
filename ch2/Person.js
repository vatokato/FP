class Person {
  constructor(name, lastName, country) {
    this.name = name;
    this.lastName = lastName;
    this.country = country;
  }

  personByCountry(persons) {
    return persons.filter(person => person.country === this.country);
  }
}

module.exports = Person;
