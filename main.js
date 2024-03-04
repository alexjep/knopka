let input = document.querySelector('.input');
let btnAction = document.getElementById('btnAction');
let result = document.querySelector('.result');
let btnClear = document.getElementById('btnClear');
let btnCopy = document.getElementById('btnCopy');

input.oninput = function (){
  let path = input.value.trim();
  let finalPath = path.replace(/Z:/, "/Volumes/Client");
  finalPath = finalPath.replace(/\\/g, "/");
  result.innerHTML = finalPath;
}

// btnClear.addEventListener('click', function () {
//   input.value =''
//   result.innerHTML = ''
// })

btnCopy.addEventListener('click', function (){
  navigator.clipboard.writeText(result.innerHTML)
    .then(() => { })
    .catch((error) => {
      console.error('Error copying text: ', error);
      alert('Error copying text. Please try again.');
    });
  input.value =''
  result.innerHTML = ''
})

