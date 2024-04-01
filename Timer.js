//Создай переменную кнопки в которой лежит физическиая кнопка из HTML с ID (#) "start"
// Создай переменную в которой лежат все данные класса (.) "time". По сути создаётся массив с данными к которому надо обратиться в будущем
//Создай переменную в которой лежит строка вывода

let btn = document.querySelector(`#start`);
let timeinput = document.querySelectorAll(`.time`);
let timeoutput = document.querySelector(`#outputtext`);
let funcjobtimer;
let stop = false; // переменная которая выключает таймер

let h;
let m;
let s;

btn.addEventListener("click", startTimer); // Если в переменной btn добавиться событие "клик", то выполни функцию "startTimer".


function startTimer() {

    //добавь в переменную то, что лежит  в пункте массива входных данных
    h = timeinput[0].value;
    m = timeinput[1].value;
    s = timeinput[2].value;



    funcjobtimer = setInterval(changeTimer, 1000 /**милисекунд*/ ); // переменная для включения (изменения времени в таймере) таймера с интервалом в 1 секунду

}

function changeTimer() { //Функция измени время в таймере

    // Убери одну секунду, в переменную выключения запиши значение, если всё == 0, то выключи, если нет, то нет.
    // Если переменная изменилать на выключи, то убери интервал из переменной, дабы таймер перестал работать
    s--
    stop = checkTimer(h, m, s);
    if (stop == true) {
        clearInterval(funcjobtimer);
    } else {
        changeText(h, m, s);
    }
}

function changeText() {
    timeoutput.innerHTML = `${h} : ${m} :  ${s}`; // Найди переменные из тела и перенеси их в поле вывода
}

function checkTimer() {
    if (h == 0 && m == 0 && s == 0) {
        return true;
    } else {
        return false;
    } //Можно ли убрать полность else, по сути же если не истина, то не входи, а значит ничего не делай
}