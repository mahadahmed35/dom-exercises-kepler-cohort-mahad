// We are going to select.
// The Button and the ul class.
const mainHeading = document.querySelector('#myList');
const addBtn = document.querySelector('.btn');

// const myList = document.createElement('li');
// myList.textContent = 'item 1';
let count = 1;
addBtn.addEventListener('click', function(){
    const myList = document.createElement('li');
myList.textContent = `item: ${count}`;
    mainHeading.appendChild(myList)
    count++;
})