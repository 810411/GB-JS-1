# Lesson 8. 
Домашнее задание:

Ответить, что выведет браузер и почему

if (!("a" in window)) {
    var a = 1;
}
alert(a);

- undefined, a = 1 в блоке условия не выполнится, так как для переменной объявленной через var произойдет hoisting и на 
момент проверки она со значением undefined уже будет существовать в window.

var b = function a(x) {
    x && a(--x);
};
alert(a);

- ошибка, одновременное использование function declaration и function expression, переменная a остается неопределенной

function a(x) {
    return x * 2;
}
var a;
alert(a);

- JavaScript сначала объявляет, а затем инициализирует наши переменные, поэтому в alert выведется результат 
"function a(x) {return x * 2;}"

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

- 10, потому что arguments[2] переопределит значение третьего аргумента который a

function a() {
    alert(this);
}
a.call(null);

- a.call(null) в качестве контекста функции a укажет window, поэтому при alert(this) выведется object Window
