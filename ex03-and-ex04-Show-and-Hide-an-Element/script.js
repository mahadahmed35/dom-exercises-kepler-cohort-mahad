<<<<<<< HEAD
// To add eventlisteners for the buttons.
// Hide button we are going to use remove();
// Show button we are going to use createElement.
const showBtn = document.querySelector('.show');
const hideBtn = document.querySelector('.hide');
const myPara = document.querySelector('.element');
showBtn.addEventListener('click', function(){
myPara.style.display = "block";
});
hideBtn.addEventListener('click', function(){
    myPara.style.display = "none";
=======
// Select the element to be shown or hidden
let element = document.querySelector(".element");

// Select the Show and Hide buttons by their class names
let btnShow = document.querySelector(".show");
let btnHide = document.querySelector(".hide");

// Solution One: Directly using style.display
btnShow.addEventListener("click", () => {
  element.style.display = "block"; // Show the element
});

btnHide.addEventListener("click", () => {
  element.style.display = "none"; // Hide the element
});

// Solution Two: Using a helper function to reduce repetition
function showAndHide(ele, display) {
  ele.style.display = display;
}

btnShow.addEventListener("click", () => {
  showAndHide(element, "block"); // Call the function to show the element
});

btnHide.addEventListener("click", () => {
  showAndHide(element, "none"); // Call the function to hide the element
});

//  Solution Three: General solution using class names to decide the action
let buttons = document.querySelectorAll(".buttons button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let displayStatus = "";

    // If the button has the "show" class, set display to "block"
    if (btn.className === "show") {
      displayStatus = "block";
      console.log(displayStatus); // Log to console for debugging
    }

    // If the button has the "hide" class, set display to "none"
    if (btn.className === "hide") {
      displayStatus = "none";
      console.log(displayStatus); // Log to console for debugging
    }

    // Apply the display status to the element
    element.style.display = displayStatus;
  });
>>>>>>> 58871c98d5bfbb93c4648b9f09858034b5c384cc
});
