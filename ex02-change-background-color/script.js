// Select all buttons and store them variable individually.
// add eventListener and change the color when clicked accordingly.
const firstBtn = document.querySelector('.red');
const secBtn  = document.querySelector('.green'); 
const thirBtn = document.querySelector('.blue');
const backgroundColor = document.querySelector('h1');
backgroundColor.style.color = 'yellow';
backgroundColor.style.width = "50%"
backgroundColor.textContent = "Hooyo Mcn"

firstBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
    console.log("The Event is Added.")
});

secBtn.addEventListener('click', function(){
        document.body.style.backgroundColor = "green";

});

thirBtn.addEventListener('click',function(){
            document.body.style.backgroundColor = "blue";

});