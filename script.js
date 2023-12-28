'use strict';

// document.querySelector('.number').textContent = 23;

// document.querySelector('.message').textContent = 'correct answer';

// document.querySelector('.score').textContent = 23;

// document.querySelector('.guess').value = 23;

// document.querySelector('.check').addEventListener('click', function () {
//   // console.log(document.querySelector('.guess').value);
//   if (document.querySelector('.guess').value == 23)
//     document.querySelector('.message').textContent = '😊correct answer';
//   else document.querySelector('.message').textContent = '😡wrong answer';
// });

// between 1 and 20
//if 0 *
//if 1
let secretNumber = Math.floor(Math.random() * (20 - 1) + 1);

let score = 10;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
//console.log(typeof score);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😡 No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'CORRECT ANSWER 😊';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      if (score == 0) {
        console.log(score);
        document.querySelector('.message').textContent =
          'YoU HaVe LoSt 😂🤣😂 try again ';
        document.querySelector('body').style.backgroundColor = '#f00000';
        return;
      } else if (guess < secretNumber)
        document.querySelector('.message').textContent = 'CHOOSE HIGHER 😉';
      else if (guess > secretNumber)
        document.querySelector('.message').textContent = 'CHOOSE LOWER 😒';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 10;
  document.querySelector('body').style.backgroundColor = '#333';
  score = 10;
  secretNumber = Math.floor(Math.random() * (20 - 1) + 1);
  console.log(secretNumber);
});
