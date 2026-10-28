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
});
