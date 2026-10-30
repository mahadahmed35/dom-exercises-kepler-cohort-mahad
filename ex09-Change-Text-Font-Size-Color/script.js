// Selections 
// Select the button and the paragraph and also add eventListener for the button.
// Set the paragraph text and color using .cssText new fontZise and also new color.
const myPara = document.querySelector('#text');
const myBtn = document.querySelector('#changeFontSize');
let count = 1;
myBtn.addEventListener('click', function(){
    if(count === 1 ){
    myPara.style.cssText = 'font-size : 2rem; color : red';
    }else if(count === 2){
            myPara.style.cssText = 'font-size : 5rem; color : teal';

    } else if( count === 3){
            myPara.style.cssText = 'font-size : 3rem; color : fuchsia';

    }else{
            myPara.style.cssText = myPara.style;

    }
    count++;
});