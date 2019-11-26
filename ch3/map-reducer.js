const { students } = require('../data');

const studentsByCountry = students
    .map(student => student.country)
    .reduce((state, country) => {
        state[country] ? state[country]++ : state[country] = 1;
        return state;
    }, {});

console.log(studentsByCountry);


const studentsByCountryOptimize = students
    .reduce((state, { country }) => {
        state[country] ? state[country]++ : state[country] = 1;
        return state;
    }, {});

console.log(studentsByCountryOptimize);
