// appends a string to the DOM
document.querySelector("#content").innerHTML = "Hi Frontenders!";

function showAlert() {
  alert('Open your Developer Console!');
}

let familyMembers = [{
  name: "Peter Madsen",
  age: 52,
  hairColor: "blonde",
  relation: "dad",
  img: "img/dad.jpg"
}, {
  name: "Ane Madsen",
  age: 51,
  hairColor: "brown",
  relation: "mom",
  img: "img/ane.jpg"
}, {
  name: "Rasmus Madsen",
  age: 29,
  hairColor: "blonde",
  relation: "brother",
  img: "img/rasmus.jpg"
}, {
  name: "Mie Madsen",
  age: 25,
  hairColor: "brown",
  relation: "sister",
  img: "img/mie.jpg"
}, {
  name: "Mads Madsen",
  age: 18,
  hairColor: "dark",
  relation: "brother",
  img: "img/mads.jpg"
}, {
  name: "Jens Madsen",
  age: 14,
  hairColor: "blonde",
  relation: "brother",
  img: "img/jenspeter.jpg"
}];

let newMember = {
  name: "Rasmus Madsen",
  age: 29,
  hairColor: "blonde",
  relation: "brother",
  img: "img/rasmus.jpg"
}

familyMembers.push({
  name: "Jens Madsen",
  age: 14,
  hairColor: "blonde",
  relation: "brother",
  img: "img/jenspeter.jpg"
}, newMember);

function appendPersons(persons) {
  let = htmlTemplate = "";
  for (const person of persons) {
    htmlTemplate += /*html*/ `
      <article> <img src="${person.img}">
        <h4>${person.name}<h4>
        <p>${person.age} years old<p>
        <p>hair color: ${person.hairColor}<p>
        <p>Relation: ${person.relation}<p>
      </article>`;
  }

document.querySelector("#persons").innerHTML = htmlTemplate;
}

appendPersons(familyMembers);





// logs the teacher objects to the console
console.log(familyMembers);
console.log(newMember);
console.log(htmlTemplate);


// console.log(teacher3);
// console.log(teacher4);