let input = document.querySelector('.input');
let btnAction = document.getElementById('btnAction');
let result = document.querySelector('.result');

let btnClear = document.getElementById('btnClear');
let btnCopy = document.getElementById('btnCopy');
let btnGPH = document.getElementById('btnGPH');
let btnZP = document.getElementById('btnZP');

let textGPH = document.getElementById('textGPH');
let textZP = document.getElementById('textZP');

input.oninput = function (){
  let path = input.value.trim();
  let finalPath = path.replace(/Z:/, "/Volumes/Client");
  finalPath = finalPath.replace(/\\/g, "/");
  result.innerHTML = finalPath;
}

function copy(text) {
  navigator.clipboard.writeText(text.innerHTML)
    .then(() => { })
    .catch((error) => {
      console.error('Error copying text: ', error);
      alert('Error copying text. Please try again.');
    });
}

btnCopy.addEventListener('click', function (){
  copy(result)
  input.value =''
  result.innerHTML = ''
})

btnGPH.addEventListener('click', function(){
  copy(textGPH)
})

btnZP.addEventListener('click', function(){
  copy(textZP)
})

// Функция для сохранения текста из textarea в localStorage
function saveTextareaContent() {
  localStorage.setItem('textareaContent', textarea.value);
}

// Функция для загрузки текста из localStorage в textarea
function loadTextareaContent() {
  let savedContent = localStorage.getItem('textareaContent');
  if (savedContent) {
    textarea.value = savedContent;
  }
}

// Вызываем функцию загрузки при загрузке страницы
window.addEventListener('load', loadTextareaContent);

// Вызываем функцию сохранения при изменении текста в textarea
textarea.addEventListener('input', saveTextareaContent);
