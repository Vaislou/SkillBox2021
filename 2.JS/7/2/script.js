let body = document.body;

let inputBlock = document.createElement('input');
let secondHeading = document.createElement('h2');

body.append(inputBlock, secondHeading);

inputBlock.addEventListener('input', changeHeading);

let timer;

function changeHeading() {
    clearTimeout(timer)
    timer = setTimeout(function() {
        secondHeading.textContent = inputBlock.value;
    }, 300);
}