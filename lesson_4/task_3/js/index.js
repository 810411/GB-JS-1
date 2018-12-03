// Поиграть:
// http://university.netology.ru/u/balabanov/who_wants_js/

'use strict';

const game = document.querySelector('.game');
const table = game.querySelector('.table');
const score = game.querySelector('.score');
const end = game.querySelector('.end');
const progressBar = game.querySelector('.progress-bar');

const questionNumber = game.querySelector('.question-number');
const question = game.querySelector('.question');
const questionTask = game.querySelector('.question-task');
const btns = game.getElementsByTagName('button');

let turn = 0;
let scoreCount = 0;

function main() {
  clearBtn();

  questionNumber.textContent = 'Вопрос № ' + (turn + 1);
  question.textContent = questions[turn].question;
  score.textContent = scoreCount;

  const ulOld = questionTask.getElementsByTagName('ul')[0];
  delete questionTask.removeChild(ulOld);

  const ul = document.createElement('ul');
  for (let line of questions[turn].questionTask) {
    const li = document.createElement('li');
    li.textContent = line;
    ul.appendChild(li);
  }

  if (questions[turn].questionTask.length > 0) {
    ul.classList.add('jumbotron', 'bg-white')
  }
  questionTask.appendChild(ul);

  for (let i = 0; i < btns.length; i++) {
    btns[i].textContent = questions[turn].answers[i];
  }

  progressBar.style.width = `${(turn + 1) * 10}%`;
}

function endGame() {
  for (const btn of btns) {
    btn.removeEventListener('click', turnNext);
  }

  table.classList.add('hidden');
  score.textContent = scoreCount;

  let message, color;
  if (scoreCount === questions.length * 100) {
    message = 'Поздравляем! Вы ответили на все вопросы верно!';
    color = 'text-success';
  } else if (scoreCount === 0) {
    message = 'К сожалению, вы не ответили верно ни на один вопрос!';
    color = 'text-danger';
  } else {
    message = 'Вы были близки к победе, попробуйте еще раз!';
    color = 'text-warning';
  }

  end.textContent = message;
  end.classList.add(color);
}

function clearBtn() {
  for (const btn of btns) {
    btn.blur();
  }
}

function turnNext(event) {
  if (event.target.textContent === questions[turn].answerTrue) {
    scoreCount += 100;
  }

  if (turn < questions.length - 1) {
    turn++;
    main(turn);
  } else {
    endGame();
  }
}

for (const btn of btns) {
  btn.addEventListener('click', turnNext);
}

main(turn);
