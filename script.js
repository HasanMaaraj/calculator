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