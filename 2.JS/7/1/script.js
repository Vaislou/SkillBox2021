let inputBlock = document.querySelector('.input__number');
let btnStart = document.querySelector('.start__btn');
let timerBlock = document.querySelector('.timer');

btnStart.addEventListener('click', updateTimer);

let counter;

function updateTimer() {
    clearInterval(counter);
    let count = 0;
    count += +inputBlock.value;
    timerBlock.textContent = count;
    counter = setInterval(function() {
        count--;
        timerBlock.textContent = count;
        if (count <= 0) {
            clearInterval(counter);
        }
    } , 1000);
}
