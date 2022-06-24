'use strict';

let imageElements = document.querySelectorAll('img');
console.log(imageElements);

let clicks = 0;
let views = 0;
let roundTracker = 0;

let fileNames = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.jpg',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
];


const images = [];

function Product(fileName) {
  this.id = fileName;
  this.clicks = 0;
  this.views = 0;
  this.src = `./img/${fileName}`;
}

Product.prototype.handleClick = function() {
};

for (let i = 0; i < fileNames.length; i++) {
  images.push(new Product(fileNames[i]));
}

imageElements[0].id = images[0].id;
imageElements[0].src = images[0].src;
images[0].views++;
imageElements[1].id = images[1].id;
imageElements[1].src = images[1].src;
images[1].views++;
imageElements[2].id = images[2].id;
imageElements[2].src = images[2].src;
images[2].views++;



 
function handleClick(event) {
  for (let i = 0; i <images.length; i++) {
    console.log(event.target.id, images[i].id);
    if (event.target.id === images[i].id) {
      images[i].clicks++;
    }
  }
  if (roundTracker === 25) {
    let imageElement = document.getElementById('image-selection');
    imageElement.innerHTML = 'Voting Has Ended, Thank You!';
    return;
  }
  renderImages();
  console.log(images);
  roundTracker++;
  console.log(roundTracker);
}

imageElements.forEach(function (img){
  img.addEventListener('click', handleClick);
});

function renderImages() {
  let image1 = generateRandomImage();
  let image2 = generateRandomImage();
  let image3 = generateRandomImage();

  while ((image1.id === image2.id) || (image1.id === image3.id)) {
    image1 = generateRandomImage();
  }
  while (image2.id === image3.id) {
    image2 = generateRandomImage();
  }

  imageElements[0].id = image1.id;
  imageElements[0].src = image1.src;
  image1.views++;
  imageElements[1].id = image2.id;
  imageElements[1].src = image2.src;
  image2.views++;
  imageElements[2].id = image3.id;
  imageElements[2].src = image3.src;
  image3.views++;
}

function generateRandomImage() {
  let index = Math.floor(Math.random() * images.length);
  return images[index];
}

Product.prototype.renderResults = function() {
  const parentElement = document.getElementById('results-table');
  const article = document.createElement('article');
  parentElement.appendChild(article);

  const h2 = document.createElement('h2');
  h2.textContent = this.id + ' had ' + this.clicks + ' clicks and was viewed ' + this.views + ' times';
  article.appendChild(h2);
};

let buttonEl = document.getElementById('results-button');

buttonEl.addEventListener('click', function() {
  console.log(images);
  for (let i = 0; i < images.length; i++) {
    images[i].renderResults();
  }
})
