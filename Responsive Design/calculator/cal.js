
switch(op) {
    case 'C': {
        expression.textContent = '';
        output.textContent = '';
        break;
    } 
    case 'pm': {
        break;
    }
    case '=': {
        result = eval(expression.textContent);
        output.textContent = result;
        lastInput = '';
        break;
    }
    default: {
        expression.textContent += op;
        break;
    }
}
function setNumber(num) {
lastInput = "Number";
if(!(num == '0' && currentNumber == '0')) {
    currentNumber += num;
    expression.textContent += num;
}
}
