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
