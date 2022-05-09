const ratingBox = document.querySelector('.testimonial-box .rating');
const starElements = '<img src="./src/public/svg/star.svg" alt="">';
const rating = 5;
ratingBox.innerHTML = starElements.repeat(rating);

const navBtn = document.querySelector('#hamburger');
const navIcon = document.querySelector('#hamburger i');
const drawer = document.querySelector('.drawer');

navBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    navIcon.classList.toggle('fa-times');
    drawer.classList.toggle('open');
});

const cardContainer = document.querySelector('.card-list');
cardContainer.innerHTML = '';

const products = [
    {
        name: 'Super Antioxidant', quantity: 60, price: 16, image: './src/public/img/product-supplement3.png'
    },
    {
        name: 'Super Antioxidant', quantity: 60, price: 16, image: './src/public/img/product-supplement3.png'
    },
    {
        name: 'Super Antioxidant', quantity: 60, price: 16, image: './src/public/img/product-supplement3.png'
    }
];

products.forEach((item) => {
    const {name, quantity, price, image} = item;
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <figure class="card-img">
            <img src="${image}" alt="">
        </figure>
        <div class="card-content">
            <h1 class="product-name">${name}</h1>
            <p>${quantity} Capsules</p>
            <aside>
                <h1 class="price">$${price},00</h1>
            </aside>
        </div>
        <button>Add To Cart</button>
    `;
    cardContainer.append(card);

});

const boxContainer = document.querySelector('.box-list');
boxContainer.innerHTML = '';

const reasons = [
    {
        image: './src/public/svg/perfect-quality.svg',
        name: 'Perfect Quality',
        description: 'We grow, farm, and bottle the finest alive products you can find'
    },
    {
        image: './src/public/svg/best-price.svg',
        name: 'Best Price Offers',
        description: 'The price is very affordable among similar product'
    },
    {
        image: './src/public/svg/natural.svg',
        name: '100% Natural',
        description: 'Harvested from the finest alive trees that deliver health benefits'
    }
];

reasons.forEach((item) => {
    const { image, name, description } = item;
    const box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = `
        <figure class="logo">
            <img src="${image}" alt="">
        </figure>
        <h2 class="name">${name}</h2>
        <p class="description">${description}</p>
    `;
    boxContainer.appendChild(box);
})




