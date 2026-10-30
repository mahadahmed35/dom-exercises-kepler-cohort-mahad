// Selections.
// Select the ul and store it in a variable.
// Select the Btn and addEventListener and that event to put it way to delete each time we press the button.

const mainHeading = document.querySelector('#myList');
const deleteBtn = document.querySelector('.btn');
const list = document.querySelector('li');

// let count = 0;
deleteBtn.addEventListener('click', function(){ 

    mainHeading.lastElementChild.remove(list);
    
    // count--;
})