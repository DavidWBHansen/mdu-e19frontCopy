"use strict";

// declaring teacher objects

// Birgitte
let teacher1 = {
  name: "Birgitte Kirk Iversen",
  initials: "bki",
  mail: "bki@baaa.dk",
  phone: "7228 6316",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg"
};

// Martin
let teacher2 = {
  name: "Martin Aagaard Nøhr",
  initials: "mnor",
  mail: "mnor@baaa.dk",
  phone: "7228 6349",
  address: "Ringvej Syd 104, 8260 Viby J",
  position: "Lecturer",
  department: "Multimedia Design",
  img: "https://media-exp1.licdn.com/dms/image/C4D03AQElLjyVglReqw/profile-displayphoto-shrink_800_800/0?e=1602720000&v=beta&t=hDUFJrkrpSm_-G2m5ov8EkPPmAIJhylSECOG3WAEyk8"
};

// log objects to the developer console
console.log(teacher1);
console.log(teacher2);

// Appending objects to the DOM

// teacher1 - Birgitte
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher1.img + "'>" +
  "<h3>" + teacher1.name + "</h3>" +
  teacher1.position + "<br>" +
  "<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" +
  "</article>";

//teacher2 - Martin
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher2.img + "'>" +
  "<h3>" + teacher2.name + "</h3>" +
  teacher2.position + "<br>" +
  "<a href='mailto:" + teacher2.mail + "'>" + teacher2.mail + "</a>" +
  "</article>";