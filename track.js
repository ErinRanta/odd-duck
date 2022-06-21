'use strict';


let imageElementsArray = document.querySelectorAll('img'); // [<img>]
console.log(imageElementsArray);

let clicks = 0;
let views = 0;

// looping through imageElementsArray
// for (let i = 0; i < imageElementsArray.length; i++) {
//   let img = imageElementsArray[i];
//   img.src = './assets/image.jpeg';
}

let imageFiles = [
  'bag.jpg',
  'bathroom.jpg',
  'banana.jpg',
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
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
  'wine-glass.jpg'
];

let numImages = imageFiles.length; 
let numVisible = 3; 

Image.prototype.removeExtension = function() {
  let label = this.fileName.slice(0,this.fileName.indexOf('.'));
  return(label);
};

const images = [];


function Image(fileName) {
  this.clicks = 0;
  this.views = 0;
  this.id = fileName;
  this.src = `./assets/images/${fileName}`;
}


Image.prototype.handleClick = function() {

};


for (let i = 0; i < imageFiles.length; i++) {
  images.push(new Image(imageFiles[i]));
}


imageElementsArray[0].id = images[0].id;
imageElementsArray[0].src = images[0].src;
images[0].views++;
imageElementsArray[1].id = images[1].id;
imageElementsArray[1].src = images[1].src;
images[1].views++;


function handleClick(event) {
  
  for (let i = 0; i < images.length; i++) { 
    console.log(event.target.id, images[i].id);
    if (event.target.id === images[i].id) {
      images[i].clicks++;
    }
  }
  renderImages();
  console.log(images);
}

/
imageElementsArray.forEach(function (img) {
  img.addEventListener('click', handleClick);
}); 


function renderImages() {

  
  let image1 = generateRandomImage();
  let image2 = generateRandomImage();
//   let image3 = generateRandomImage();

  while (image1.id === image2.id) {
    image1 = generateRandomImage();
  }

  
  imageElementsArray[0].id = image1.id;
  imageElementsArray[0].src = image1.src;
  imageElementsArray[1].id = image2.id;
  imageElementsArray[1].src = image2.src;
  imageElementsArray[2].src = image3.id;
  imageElementsArray[2].src = image3.src;
  image1.views++;
  image2.views++;
  image3.views++;
}


function generateRandomNumbers() {
  let indices = [];
  let index1 = Math.floor(Math.random() * numImages);
  let index2 = Math.floor(Math.random() * numImages);
  let index3 = Math.floor(Math.random() * numImages);

  while(index1 === index2 || index1 === index3){
    let index1 = Math.floor(Math.random() * numImages);
  }
  indices.push(index1,index2,index3);
  console.log(indices);
}

console.log(images);