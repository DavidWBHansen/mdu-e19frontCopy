"use strict"; // to enable strict mode and modern JavaScript functionality



// declaring teacher objects
let teacher1 = {
  name: 'Birgitte',
  img:"https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335231430000&format=webp",
  initials: 'bki',
  position:"Senior Lecturer" ,
  department: "Programmes within Digital Communication and Multimedia",
  Adresse:"Sønderhøj 30, 8260 Viby J",
  mail:"bki@baaa.dk",
  phone:"+45 7228 6316",

};
let teacher2 = {
  name: 'Rasmus',
  img:"https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335324630000&format=webp",
  initials: 'race',
  postion: "Lecturer" ,
  department:"Programmes within Digital Communication and Multimedia",
  Adresse:"Ringvej Syd 104, 8260 Viby J",
  mail:"race@baaa.dk",
  phone:"+45 7228 6318",
};
let teacher3 = {
  name: 'kim',
  img:"https://www.baaa.dk/media/3zihz21l/kim-elkjaer-marcher-jepsen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335276900000&format=webp",
  initials: 'kije',
  postion:"Lecturer" ,
  department:"Programmes within Digital Communication and Multimedia",
  Adresse:"Ringvej Syd 104, 8260 Viby J",
  mail:"kije@baaa.dk",
  phone:"+45 7228 6325",
};
let teacher4 = {
  name: 'martin',
  img:"https://media-exp1.licdn.com/dms/image/C4D03AQElLjyVglReqw/profile-displayphoto-shrink_800_800/0?e=1602720000&v=beta&t=hDUFJrkrpSm_-G2m5ov8EkPPmAIJhylSECOG3WAEyk8",
  initials: 'mnor',
  postion: "Lecturer",
  department:"Programmes within Digital Communication and Multimedia",
  Adresse:"Ringvej Syd 104, 8260 Viby J",
  mail:"mnor@baaa.dk",
};

document.querySelector("#teacher-grid").innerHTML += 
"<article>" +
"<img src='" + teacher1.img + "'>" +
"<h3>" + teacher1.name + "</h3>" +
teacher1.position + "<br>" +
"<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" + "<br>" + teacher1.phone 
"</article>";

document.querySelector("#teacher-grid").innerHTML += 
"<article>" +
"<img src='" + teacher2.img + "'>" +
"<h3>" + teacher2.name + "</h3>" +
teacher2.position + "<br>" +
"<a href='mailto:" + teacher2.mail + "'>" + teacher2.mail + "</a>" + "<br>" + teacher2.phone 
"</article>";

document.querySelector("#teacher-grid").innerHTML += 
"<article>" +
"<img src='" + teacher3.img + "'>" +
"<h3>" + teacher3.name + "</h3>" +
teacher3.position + "<br>" +
"<a href='mailto:" + teacher3.mail + "'>" + teacher3.mail + "</a>" + "<br>" + teacher3.phone 
"</article>";

document.querySelector("#teacher-grid").innerHTML += `
<article>
<img src="${teacher4.img}">
<h3>${teacher4.name}</h3>
${teacher4.position}<br>
<a href="${teacher4.mail}+"> ${teacher4.mail} </a> <br> 
</article>;
`
// logs the teacher objects to the console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(teacher4);
// console.log(teacher3);
// console.log(teacher4);