"use strict"; // to enable strict mode and modern JavaScript functionality

// appends a string to the DOM
document.querySelector("#content").innerHTML = "Hi Frontenders!";

function showAlert() {
  alert('Open your Developer Console!');
}

// declaring teacher objects
let teacher1 = {
  name: 'Birgitte',
  initials: 'bki'
};

let teacher2 = {
  name: 'Rasmus',
  initials: 'race'
};

let person = {
    name: "David Wille",
    birthDay: "24-05-1997",
    age: "23",
    eyecolor: "brown",
    hairColor:"leverpostej",
    position: "student",
    mail: "david214@live.dk",
    phone: "61779912",
    website:"Willedesigns.dk",
    img:"img/billede1.jpg"
};

document.querySelector("#teacher-grid").innerHTML +=
  "<article>" +
  "<img src='" + person.img + "'>" +
  "<h3>" + person.name + "</h3>" +
  person.position + "<br>" +
  "<a href='mailto:" + person.mail + "'>" + person.mail + "</a>" +
  "</article>";

// let teacher3 = {
  
// };

// let teacher4 = {

// };

// logs the teacher objects to the console
console.log(teacher1);
console.log(teacher2);
console.log(person);
// console.log(teacher3);
// console.log(teacher4);