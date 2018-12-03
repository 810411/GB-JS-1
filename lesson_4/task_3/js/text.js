'use strict';

const questions = [{
  // 1
  question: 'Чему равно a + b + c?',
  questionTask: [
    'let a = 1;',
    'let b = { toString() {return \'1\'} };',
    'let c = 1;'
  ],
  answers: [
    '11[object Object]',
    '2[object Object]',
    '111',
    '3'
  ],
  answerTrue: '111'
},
  {
    // 2
    question: 'Что выведет этот скрипт?',
    questionTask: [
      '"use strict";',
      'a = null + undefined;',
      'alert(a);'
    ],
    answers: [
      'null',
      'undefined',
      'NaN',
      'В коде ошибка'
    ],
    answerTrue: 'В коде ошибка'
  },
  {
    // 3
    question: 'Чему равно i в конце кода?',
    questionTask: [
      'for(var i=0; i<10; i++) {',
      ' console.log(i);',
      '}'
    ],
    answers: [
      'undefined',
      '9',
      '10',
      'Нет такой переменной после цикла'
    ],
    answerTrue: '10'
  },
  {
    // 4
    question: 'Верно ли сравнение: "ёжик" > "яблоко"?',
    questionTask: [],
    answers: [
      'Да',
      'Нет',
      'Зависит от локальных настроек браузера',
      'В коде ошибка.'
    ],
    answerTrue: 'Да'
  },
  {
    // 5
    question: 'Чему равно i в конце кода?',
    questionTask: [
      'for(let i=0; i<10; i++) {',
      ' console.log(i);',
      '}'
    ],
    answers: [
      'undefined',
      '9',
      '10',
      'Нет такой переменной после цикла'
    ],
    answerTrue: 'Нет такой переменной после цикла'
  },
  {
    // 6
    question: 'Что выведет этот код?',
    questionTask: ['alert( +"Infinity" );'],
    answers: [
      'Infinity',
      'NaN',
      '0',
      'Будет ошибка'
    ],
    answerTrue: 'Infinity'
  },
  {
    // 7
    question: 'Чему равен результат вызова в этом примере?',
    questionTask: [
      'function f() {',
      ' let a = 5;',
      ' return new Function(\'b\', \'return a + b\');',
      '}',
      'alert( f()(1) );'
    ],
    answers: [
      '6',
      'undefined',
      'NaN',
      'Будет ошибка'
    ],
    answerTrue: 'Будет ошибка'
  },
  {
    // 8
    question: 'Что получится, если сложить true + false?',
    questionTask: [],
    answers: [
      '"truefalse"',
      '0',
      '1',
      'NaN'
    ],
    answerTrue: '1'
  },
  {
    // 9
    question: 'Что выведет этот код?',
    questionTask: [
      'let obj = {',
      ' "0": 1,',
      ' 0: 2',
      '};',
      'alert( obj["0"] + obj[0] );'
    ],
    answers: [
      '2',
      '3',
      '4',
      'В коде ошибка'
    ],
    answerTrue: '4'
  },
  {
    // 10
    question: 'Что выведет этот код?',
    questionTask: [
      'alert( "1"[0] );'
    ],
    answers: [
      '0',
      'undefined',
      '1',
      'В коде ошибка'
    ],
    answerTrue: '1'
  }
];