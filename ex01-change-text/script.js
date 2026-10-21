// 1st select the id using querySelector.
//   Adding the event and changing the text when the event clicks.

 const changeText = document.querySelector('#text');
  const buttonId = document.querySelector('#changeBtn');
      const texts = ["Mahad", "John", "Terry"];
      let index = 0;

 buttonId.addEventListener("click", function(){
   changeText.textContent = texts[index];
   index = (index + 1) %texts.length;

});