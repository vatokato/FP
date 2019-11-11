const data = require('./data');

const selector = (country, school) => student => (
  student.country === country && student.school === school
);
const filterBySelector= (friends, selector) => friends.filter(selector);
console.log(filterBySelector(data.students, selector("Russia", 1)));
