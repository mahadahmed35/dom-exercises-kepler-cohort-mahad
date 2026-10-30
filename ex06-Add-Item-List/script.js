<<<<<<< HEAD
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
=======
// Select the unordered list element by its ID
let myList = document.querySelector("#myList");

// Select the button element by its class
let btnAdd = document.querySelector(".add");

// Counter to keep track of item numbers
let numberItem = 1;

// Add a click event listener to the button
btnAdd.addEventListener("click", function () {
  // Create a new <li> element
  let li = document.createElement("li");

  // Create a text node with the current item number
  let liText = document.createTextNode(`Item ${numberItem}`);

  // Append the text to the <li> element
  li.appendChild(liText);

  // Append the <li> element to the list
  myList.appendChild(li);

  // Increment the item number for the next addition
  numberItem++;
});
>>>>>>> 66870370d9e2d43709ff34f101d71a1fc641d862
