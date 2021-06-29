
"use strict";
for (var i = 1; i <= 10; i++) {
    console.log("__for__loop_____", i);
}
var squared = function (num) {
    return num * num;
};
console.log("___square___", squared(5));
function greetings() {
    console.log("__greetings___");
}
greetings();
var throwError = function (message) {
    throw new Error(message);
};
//throwError("dealing with your trouble")
// single value;
var myArray = [1, 2, 3, 45, 100, 200, 300, 400];
//junior value
var mixArray = [1, 2, "Berlin", 3, 45, "Cuba", 100, 200, 300, 400];
// tuples value
var student = ["Maribel", "Bryan", 17, "Germany", true, 90];
var studentObject = { name: "Maribel", lastname: "Bryan",
    age: 17, country: "Germany",
    promoted: true, grade: 90 };
;
var newStudent = { name: 'Maria', age: 10, enrolled: true };
console.log(myArray);
//console.log(mixArray)
//console.log(student)
console.log(studentObject);
console.log(newStudent);
