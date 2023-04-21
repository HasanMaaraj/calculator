function add (a,b) {
    return (a+b);
}

function substract (a,b) {
    return (a-b);
}

function multiply (a,b) {
    return (a*b);
}

function divide (a,b) {
    return (a/b);
}

function operate (expression) {
    if (expression.includes('+')) {
        let numbers = expression.split('+');
        return add(Number(numbers[0]), Number(numbers[1]));
    } else if (expression.includes('-')) {
        let numbers = expression.split('-');
        return substract(numbers[0], numbers[1]);
    } else if (expression.includes('*')) {
        let numbers = expression.split('*');
        return multiply(numbers[0], numbers[1]);
    } else if (expression.includes('/')) {
        let numbers = expression.split('/');
        return divide(numbers[0], numbers[1]);
    } else {
        return expression;
    }
}

const display = document.querySelector('#display');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('button[data-key="="]');
const clear = document.querySelector('button[data-key="AC"]');
const del = document.querySelector('button[data-key="del"]');
const negative = document.querySelector('button[data-key="-/+"]');

operators.forEach(operator => {
    operator.addEventListener('click',()=> {
        if (display.textContent.match(/^-?[0-9]+$/)){
            display.textContent += operator.textContent;
        } else if (display.textContent.match(/^-?[0-9]+[*/]$/) && operator.textContent === '-'){
            display.textContent += operator.textContent;
        }
    });
});

operands.forEach(operand => {
    operand.addEventListener('click', () =>{
        display.textContent += operand.textContent;
    });
});

equals.addEventListener('click', () => {
    if (display.textContent.match(/^.*[0-9]$/)){
        display.textContent = operate(display.textContent);
    }
});

clear.addEventListener('click', () => {
    display.textContent = '';
});

del.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
});

negative.addEventListener('click', () => {
    if (display.textContent.match(/^[0-9]*$/)) {
        display.textContent = '-' + display.textContent;
    } else if (display.textContent.match(/^-[0-9]*$/)) {
        display.textContent = display.textContent.slice(1);
    }
});