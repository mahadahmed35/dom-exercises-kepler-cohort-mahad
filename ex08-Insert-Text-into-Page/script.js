// Select the input and the btn and store them variables.



// Add eventListener for the btn and make append the input.
const input = document.querySelector('#inputText');
const addBtn = document.querySelector('#addText');
const addText = document.querySelector('.content');

addBtn.addEventListener('click', function(){
const inputValue = input.value.trim()
if(inputValue !== ""){
const unList = document.createElement('ul');
const liList = document.createElement('li');

unList.appendChild(liList);
addText.appendChild(unList)
liList.style.listStyleType = 'none';

liList.textContent = inputValue;
input.value = "";
inputValue.focus();
} else{
    alert('Please type something before clicking add.')
}


})





















// addBtn.addEventListener('click', function(){
//     const entered = input.value.trim();
//     const ulList = document.createElement('ul')
//     const mylist = document.createElement('li');
// mylist.style.listStyleType = 'none';
//     mylist.textContent= entered;
//     ulList.append(mylist);
//     addText.append(ulList);
    

//     input.value = '';

// }

// )