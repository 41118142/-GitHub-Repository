// script.js
function adjustText() {
    const idElement = document.getElementById('student-id');
    const nameElement = document.getElementById('student-name');
  
    idElement.style.fontFamily = 'Courier New, monospace';
    idElement.style.color = 'blue';
  
    nameElement.style.fontFamily = 'Comic Sans MS, cursive';
    nameElement.style.color = 'green';
  }
  
  function adjustPhoto() {
    const photoElement = document.getElementById('photo');
    photoElement.style.border = '5px solid red';
    photoElement.style.borderRadius = '50%';
  }
  
  function changePhoto() {
    const photoElement = document.getElementById('photo');
    photoElement.src = 'your_lifestyle_photo.jpg';
  }
  
