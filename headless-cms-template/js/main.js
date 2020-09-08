"use strict";

const url = "https://persons.willedesigns.dk/wp-json/wp/v2/posts";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    console.log(posts);
  });

// append wp posts to the DOM
function appendPosts(posts) {

}

// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}