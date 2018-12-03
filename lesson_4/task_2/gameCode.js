var turnNumArr = [];
var event, ok, message;

do {//Выводим первый вопрос
  ok = false;
  message = works.a00 + works.a1 + works.a2 + '-1 - Выход из игры\n';
  event = +prompt(message);
  turnNumArr.push(message + 'Ваш ответ: ' + event);
  if (event == -1) {
    break;
  } else {
    ok = isAnswer(works.a0, event);
  }
} while (!ok);
switch (event) {
  case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
    do {
      ok = false;
      message = works.b00 + works.b1 + works.b2 + '-1 - Выход из игры\n';
      event = +prompt(message);
      turnNumArr.push(message + 'Ваш ответ: ' + event);
      if (event == -1) {
        break;
      } else {
        ok = isAnswer(works.b0, event);
      }
    } while (!ok);
    switch (event) {
      case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
        do {
          ok = false;
          message = works.d00 + works.d1 + works.d2 + '-1 - Выход из игры\n';
          event = +prompt(message);
          turnNumArr.push(message + 'Ваш ответ: ' + event);
          if (event == -1) {
            break;
          } else {
            ok = isAnswer(works.d0, event);
          }
        } while (!ok);

        break;
      case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
        do {
          ok = false;
          message = works.d00 + works.d1 + works.d2 + '-1 - Выход из игры\n';
          event = +prompt(message);
          turnNumArr.push(message + 'Ваш ответ: ' + event);
          if (event == -1) {
            break;
          } else {
            ok = isAnswer(works.d0, event);
          }
        } while (!ok);

        break;
      case -1: // Второе действие
        break;
      default:
        alert('Ошибка');
    }
    break;
  case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
    do {
      ok = false;
      message = works.c00 + works.c1 + works.c2 + '-1 - Выход из игры\n';
      event = +prompt(message);
      turnNumArr.push(message + 'Ваш ответ: ' + event);
      if (event == -1) {
        break;
      } else {
        ok = isAnswer(works.c0, event);
      }
    } while (!ok);
    switch (event) {
      case 1: // Второе действие
        do {
          ok = false;
          message = works.d00 + works.d1 + works.d2 + '-1 - Выход из игры\n';
          event = +prompt(message);
          turnNumArr.push(message + 'Ваш ответ: ' + event);
          if (event == -1) {
            break;
          } else {
            ok = isAnswer(works.d0, event);
          }
        } while (!ok);

        break;
      case 2: // Второе действие
        do {
          ok = false;
          message = works.d00 + works.d1 + works.d2 + '-1 - Выход из игры\n';
          event = +prompt(message);
          turnNumArr.push(message + 'Ваш ответ: ' + event);
          if (event == -1) {
            break;
          } else {
            ok = isAnswer(works.d0, event);
          }
        } while (!ok);

        break;
      case -1: // Второе действие
        break;
      default:
        alert('Ошибка');
    }
    break;
  case -1: // Первое действие
    break;
  default:
    alert('Ошибка');
}
alert('Спасибо за игру');

var answerCount = turnNumArr.length;
do {//Запрос номера хода
  ok = false;
  event = +prompt(`Введите номер хода (от 1 до ${answerCount}) или -1 - Выход`);

  if (event == -1) {
    break;
  } else {
    ok = isAnswer(answerCount, event);
  }
} while (!ok);

alert(turnNumArr[event - 1]);

//------------------------------------------
function isAnswer(q, event) {
  if (isNaN(event) || !isFinite(event)) {
    alert('Вы ввели недопустимый символ');
    return false;
  } else if (event < 1 || event > q) {
    alert('Ваше число выходит из допустимого диапозона');
    return false;
  }
  return true;
}
