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
    }
}

const display = document.querySelector('#display');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');

operators.forEach(operator => {
    operator.addEventListener('click',()=> {
        if (display.textContent && 
            !(display.textContent.includes('+') || display.textContent.includes('-') || display.textContent.includes('*') || display.textContent.includes('/'))){
            display.textContent += operator.textContent;
        }
    });
});

operands.forEach(operand => {
    operand.addEventListener('click', () =>{
        display.textContent += operand.textContent;
    });
});