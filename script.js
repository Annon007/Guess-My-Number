'use strict';
console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
const random_number = function () {
  let hiddenScore = Math.trunc(
    (document.querySelector('.number').value = Math.random() * 20 + 1)
  );
  return hiddenScore;
};

document.querySelector('.number').value = random_number();
console.log(document.querySelector('.number').value);

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').value = random_number();
  console.log(document.querySelector('.number').value);
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = null;
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(typeof guessNumber);
  //document.querySelector('.guess').value = null;

  if (!guessNumber) {
    console.log("You've guessed nothing!");
  } else {
    if (guessNumber === document.querySelector('.number').value) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.message').textContent = '🤞 Correct Guess!';
      document.querySelector('.number').textContent =
        document.querySelector('.number').value;
      const score = Number(document.querySelector('.score').textContent);
      //document.querySelector('.score').textContent = score;
      const hScore = Number(document.querySelector('.highscore').textContent);
      score >= hScore
        ? (document.querySelector('.highscore').textContent = score)
        : (document.querySelector('.highscore').textContent = hScore);
    } else {
      guessNumber > document.querySelector('.number').value
        ? (document.querySelector('.message').textContent = '💹Too High')
        : (document.querySelector('.message').textContent = '💹Too Low');

      let wrongAnswer = document.querySelector('.score').textContent;
      wrongAnswer--;
      wrongAnswer < 1
        ? ((wrongAnswer = 0),
          (document.querySelector('.message').textContent =
            '💥You Lost the Game'))
        : wrongAnswer;

      document.querySelector('.score').textContent = wrongAnswer;
    }
  }
});
