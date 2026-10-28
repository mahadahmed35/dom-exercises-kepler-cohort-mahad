
const imgs = [
    'images/img1.jpg',
    'images/img2.jpg',
    "images/img3.jpg",
    "images/img4.jpg"
];
let index = 0;

const image = document.querySelector('.main-image');
const nextBtn = document.querySelector('.btn');
nextBtn.addEventListener('click', function(){
    index =(index + 1) % imgs.length;
    image.src = imgs[index];
});