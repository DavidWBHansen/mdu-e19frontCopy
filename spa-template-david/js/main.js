

async function loadPersons() {
  let response = await fetch("https://randomuser.me/api/?results=9");
  let jsonData = await response.json();
  appendPersons(jsonData.results);
}

loadPersons();

function appendPersons(persons) {
  for (let person of persons) {
    document.querySelector("#grid-persons").innerHTML += `
      <article>
      <img src="${person.picture.large}">
      <h4>${person.name.first} ${person.name.last}</h4>
      <p><a href="mailto:${person.email}">${person.email}</a></p>
      </article>
      `;
  }
  showLoader(false);
};

let products = [{
  model:'MacBook Pro 13',
  brand:'Apple',
  price:'11799',
  img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp13touch-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1529520060550',
  }];

function appendProducts(products){
let htmlTemplate = "";
for (let product of products){
console.log(product);
htmlTemplate += `
<article> 
<img src="${product.img}">
<h2>${product.model}</h2>
<h3>${product.brand}</h2>
<p>${product.price}</p>
</article> `;

}
document.querySelector("#products-container").innerhtml = htmlTemplate;

}

appendProducts(products);  

function addNewProduct(){
let brand = document.querySelector('#brand').value;
let model = document.querySelector('#model').value;
let price = document.querySelector('#price').value;
let img = document.querySelector('#img').value;

product.push({
brand,
model,
price,
img
});

console.log(products);
appendProducts(products);
showPage('products');

}