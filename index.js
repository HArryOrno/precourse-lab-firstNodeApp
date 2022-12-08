const prompt = require('prompt-sync')();

function greet(namePassedIn) {
  return 'Welcome to SALT, '+name;
}
module.exports.greet = greet;


// Main program

/*var today = new Date();

var dd = today.getDate();
var mm = today.getMonth(); //January is 0!
var yyyy = today.getFullYear();


var yearDate = prompt('When does the course start? Go year month day (January is 0)');
var monthDate = prompt();
var dayDate = prompt();
var yearDiff = yearDate - yyyy;
var monthDiff = monthDate - mm;
var dayDiff = dayDate - dd;
var timeDiff = Math.ceil((yearDiff*365) + (monthDiff*30.437)+ dayDiff);
*/

const name = prompt('What is your name? ');
const greeting = greet(name);
console.log(greeting);
/*
console.log('The course starts in ' + timeDiff + ' days.');*/

module.exports.greet = greet;