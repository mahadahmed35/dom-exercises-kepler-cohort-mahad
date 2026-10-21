// Select all buttons and store them variable individually.
// add eventListener and change the color when clicked accordingly.
const firstBtn = document.querySelector('.red');
const secBtn  = document.querySelector('.green'); 
const thirBtn = document.querySelector('.blue');

firstBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
});

secBtn.addEventListener('click', function(){
        document.body.style.backgroundColor = "green";

});

thirBtn.addEventListener('click',function(){
            document.body.style.backgroundColor = "blue";

});