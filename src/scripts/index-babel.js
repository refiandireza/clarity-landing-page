"use strict";

var ratingBox = document.querySelector('.testimonial-box .rating');
var starElements = '<img src="./src/public/svg/star.svg" alt="">';
var rating = 5;
ratingBox.innerHTML = starElements.repeat(rating);
var navBtn = document.querySelector('#hamburger');
var navIcon = document.querySelector('#hamburger i');
var drawer = document.querySelector('.drawer');
navBtn.addEventListener('click', function (event) {
  event.stopPropagation();
  navIcon.classList.toggle('fa-times');
  drawer.classList.toggle('open');
});
var cardContainer = document.querySelector('.card-list');
cardContainer.innerHTML = '';
var products = [{
  name: 'Super Antioxidant',
  quantity: 60,
  price: 16,
  image: './src/public/img/product-supplement3.png'
}, {
  name: 'Super Antioxidant',
  quantity: 60,
  price: 16,
  image: './src/public/img/product-supplement3.png'
}, {
  name: 'Super Antioxidant',
  quantity: 60,
  price: 16,
  image: './src/public/img/product-supplement3.png'
}];
products.forEach(function (item) {
  var name = item.name,
      quantity = item.quantity,
      price = item.price,
      image = item.image;
  var card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = "\n        <figure class=\"card-img\">\n            <img src=\"".concat(image, "\" alt=\"\">\n        </figure>\n        <div class=\"card-content\">\n            <h1 class=\"product-name\">").concat(name, "</h1>\n            <p>").concat(quantity, " Capsules</p>\n            <aside>\n                <h1 class=\"price\">$").concat(price, ",00</h1>\n            </aside>\n        </div>\n        <button>Add To Cart</button>\n    ");
  cardContainer.append(card);
});
var boxContainer = document.querySelector('.box-list');
boxContainer.innerHTML = '';
var reasons = [{
  image: './src/public/svg/perfect-quality.svg',
  name: 'Perfect Quality',
  description: 'We grow, farm, and bottle the finest alive products you can find'
}, {
  image: './src/public/svg/best-price.svg',
  name: 'Best Price Offers',
  description: 'The price is very affordable among similar product'
}, {
  image: './src/public/svg/natural.svg',
  name: '100% Natural',
  description: 'Harvested from the finest alive trees that deliver health benefits'
}];
reasons.forEach(function (item) {
  var image = item.image,
      name = item.name,
      description = item.description;
  var box = document.createElement('div');
  box.classList.add('box');
  box.innerHTML = "\n        <figure class=\"logo\">\n            <img src=\"".concat(image, "\" alt=\"\">\n        </figure>\n        <h2 class=\"name\">").concat(name, "</h2>\n        <p class=\"description\">").concat(description, "</p>\n    ");
  boxContainer.appendChild(box);
});