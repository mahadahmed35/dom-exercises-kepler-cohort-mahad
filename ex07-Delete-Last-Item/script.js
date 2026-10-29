// Selections.
// Select the ul and store it in a variable.
// Select the Btn and addEventListener and that event to put it way to delete each time we press the button.

const mainHeading = document.querySelector('#myList');
const deleteBtn = document.querySelector('.btn');
const list = document.querySelector('li');

let count = 1;
deleteBtn.addEventListener('click', function(){ 
// list.textContent = `item ${count}`;
    mainHeading.remove(list);
    count--;
})