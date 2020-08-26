/*
 Array of family members
*/
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

console.log(familyMembers);

/*
Appends data to the DOM
*/
/*fetch('json/persons.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    // TODO: call append functionality
  });*/
function appendPersons(persons) {

  let htmlTemplate = "";
  for (const person of persons) {
    htmlTemplate += /*html*/ `
    <article>
      <img src="${person.img}">
      <h4>${person.name}</h4>
      <p>${person.age} years old</p>
      <p>Hair color: ${person.hairColor}</p>
      <p>Relation: ${person.relation}</p>
    </article>
  `;
  }
  document.querySelector("#persons").innerHTML = htmlTemplate;
}

/*fetch('json/persons.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    let htmlTemplate = "";
  for (const person of persons) {
    htmlTemplate += `
    <article>
      <img src="${person.img}">
      <h4>${person.name}</h4>
      <p>${person.age} years old</p>
      <p>Hair color: ${person.hairColor}</p>
      <p>Relation: ${person.relation}</p>
    </article>
  `;
  }
// TODO: call append functionality
});*/




appendPersons(familyMembers);

/*
Search functionality: find objects by given searchValue
*/

function search(searchValue) {
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);

  // TODO: implement search functionality
}

/*
Adds a new object to the array familyMembers 
*/
function add() {
  console.log("Add button clicked");
  let name = document.getElementById('inputName').value;
  let age = document.getElementById('inputAge').value;
  let hairColor = document.getElementById('inputHairColor').value;
  let relation = document.getElementById('inputRelation').value;
  let imageUrl = document.getElementById('inputImageUrl').value;

  let addMember = {
    name: name,
    age: age,
    hairColor: hairColor,
    relation: relation,
    imageUrl: imageUrl,
  };
  familyMembers.push(addMember)
  document.querySelector("#persons").innerHTML = "";
  appendPersons(familyMembers)
}