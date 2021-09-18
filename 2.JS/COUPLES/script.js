document.addEventListener('DOMContentLoaded', () => {
    //Creating game field div and title

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'COUPLES';

    const field = document.createElement('section');
    field.classList.add('field');

    document.body.append(title);
    document.body.append(field);

    //Creating start window

    const startField = document.createElement('div');
    startField.classList.add('start__field');

    const form = document.createElement('form');
    form.classList.add('start__form');
    const input = document.createElement('input');
    input.classList.add('start__input');
    input.placeholder = 'Enter even number from 2 to 10';
    input.type = 'number';
    input.min = 2;
    input.max = 10;
    input.value = 4;
    const startButton = document.createElement('button');
    startButton.classList.add('btn');
    startButton.classList.add('start__btn');
    startButton.textContent = 'Start Game';

    form.append(input);
    form.append(startButton);


    startField.append(form);
    field.append(startField);

    //Creating cards and cards field

    const gameField = document.createElement('div');
    gameField.classList.add('game__field');

    const card = document.createElement('div');
    card.classList.add('card');
    const cardInner = document.createElement('div');
    cardInner.classList.add('card__inner');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card__front');
    const cardImg = document.createElement('img');
    cardImg.classList.add('card__img');
    cardImg.src = './img/card_back.png';
    cardImg.alt = 'CardBack';
    const cardBack = document.createElement('div');
    cardBack.classList.add('card__back');

    cardFront.append(cardImg);
    cardInner.append(cardFront);
    cardInner.append(cardBack);

    card.append(cardInner);

    
    form.addEventListener('submit', e => {
        e.preventDefault();

        startField.classList.add('start__field_none');
        gameField.classList.add('game__field_active');

        let counterCard = +input.value;
        if (counterCard % 2) {
            counterCard = 4;
        }

        for (let i = 0; i < counterCard; i++) {
            card.id = `${i+1}card`;
            gameField.append(card.cloneNode(1));
        }
        field.append(gameField);

        let numbersCounter = counterCard / 2;
        let numbersArr = [];

        for (let i = 1; i <= numbersCounter; i++) {
            numbersArr.push(i, i);
        }

        numbersArr.sort(() => Math.random() - 0.5);

        let cardBacks = document.querySelectorAll('.card__back');

        cardBacks.forEach(function (elem, index) {
            elem.textContent = numbersArr[index];
        });

        const cards = document.querySelectorAll('.card');

        let count = 0;
        let arrForCheck = [];
        let sumOfDisabls = 0;
        cards.forEach((e) => {
            e.classList.remove('card_disabled');
            e.classList.remove('card_active');
            e.addEventListener('click', function () {
                ++count;
                e.classList.add('card_active');
                if (count == 2) {
                    document.querySelectorAll('.card_active').forEach((elem, index, array) => {
                        if (!elem.classList.contains('card_disabled')) {
                            arrForCheck.push(elem.textContent);
                        } 
                    });
                    if (arrForCheck[0] == arrForCheck[1]) {
                        document.querySelectorAll('.card_active').forEach(e => e.classList.add('card_disabled'));
                        sumOfDisabls++;
                        console.log(sumOfDisabls)
                    }
                    if (sumOfDisabls == numbersCounter) {
                        completeGame();
                    }
                    arrForCheck = [];
                    setTimeout(() => {
                        cards.forEach((item) => {
                            if (!item.classList.contains('card_disabled')) {
                                item.classList.remove('card_active')
                            }  
                        });
                    }, 500);
                    count = 0;
                }
            })
        })

        updateTimer();
        endGame();
    });


    //End Game

    const timer = document.createElement('div');
    timer.classList.add('timer');

    document.body.append(timer);

    let timerCounter;

    function updateTimer() {
        timer.classList.add('timer_active');
        let secondsLeft = 60;
        clearInterval(timerCounter);
        timer.textContent = secondsLeft;
        timerCounter = setInterval(() => {
            secondsLeft--;
            timer.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timerCounter);
            }
        } , 1000);
    }

    const endField = document.createElement('div');
    endField.classList.add('end__field');
    const endTitle = document.createElement('h2');
    endTitle.classList.add('end__title');
    endTitle.textContent = 'END GAME';
    const endButton = document.createElement('button');
    endButton.classList.add('btn');
    endButton.classList.add('end__btn');
    endButton.textContent = 'Start New Game';

    

    field.append(endField);

    endField.append(endTitle);
    endField.append(endButton);

    let endGameTime;

    function endGame() {
        endGameTime = setTimeout(() => {
            gameField.classList.remove('game__field_active');
            endField.classList.add('end__field_active');
            timer.classList.remove('timer_active');
        },60000)
    }

    const completeField = document.createElement('div');
    completeField.classList.add('complete__field');
    const completeTitle = document.createElement('h2');
    completeTitle.classList.add('end__title');
    completeTitle.textContent = 'Congratulation!!!';
    const completeButton = document.createElement('button');
    completeButton.classList.add('btn');
    completeButton.classList.add('end__btn');
    completeButton.textContent = 'Start New Game';

    completeField.append(completeTitle);
    completeField.append(completeButton);

    field.append(completeField);

    function completeGame() {
        clearTimeout(endGameTime);
        clearInterval(timerCounter);
        setTimeout(() => {
            gameField.classList.remove('game__field_active');
            completeField.classList.add('complete__field_active');
            timer.classList.remove('timer_active');
        }, 500);
    }

    endButton.addEventListener('click', () => {
        endField.classList.remove('end__field_active');
        startField.classList.remove('start__field_none');
    })

    completeButton.addEventListener('click', () => {
        document.location.reload();
    })

    
});