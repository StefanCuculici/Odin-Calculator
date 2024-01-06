let firstOperand = ''
let secondOperand = ''
let currentOperand = null
let shouldResetScreen = false

const numberButtons=document.querySelectorAll('[data-number]');
const operantButtons=document.querySelectorAll('[data-operant]');
const Clear=document.getElementById('clear');
const Equal=document.getElementById('equal');
const Delete=document.getElementById('delete');
const Point=document.getElementById('point');
const currentResult=document.getElementById('currentResult');
const pastResult=document.getElementById('pastResult');


Equal.addEventListener('click', evaluate)
Clear.addEventListener('click', clear)
Delete.addEventListener('click', deleteNumber)
Point.addEventListener('click', appendPoint)

numberButtons.forEach((button) =>
    button.addEventListener('click', ()=>appendNumber(button.textContent))

)

operantButtons.forEach((button) =>
    button.addEventListener('click', ()=>setOperation(button.textContent))

)

function appendNumber(number) {

    if(currentResult.textContent==='0' || shouldResetScreen) {

        ResetScreen()

    }

    currentResult.textContent+=number;

}

function ResetScreen() {

    currentResult.textContent='';
    shouldResetScreen=false;

}

function clear() {

    currentResult.textContent='0';
    pastResult.textContent='';
    firstOperand='';
    secondOperand='';
    currentOperand= null;

}

function appendPoint() {
    if (shouldResetScreen) {
        ResetScreen();
    }

    // Check if the currentResult already contains a dot
    if (!currentResult.textContent.includes('.')) {
        currentResult.textContent += '.';
    }
}

function deleteNumber() {
    currentResult.textContent = currentResult.textContent
      .toString()
      .slice(0, -1)
  }

function setOperation(operator) {
    if (currentOperand !== null) {
        evaluate();
        firstOperand = currentResult.textContent;
        currentOperand = operator;
        pastResult.textContent = `${firstOperand} ${currentOperand}`;
        shouldResetScreen = true;

    } 
    else {

        currentOperand = operator;
        firstOperand = currentResult.textContent;
        pastResult.textContent = `${firstOperand} ${currentOperand}`;
        shouldResetScreen = true;
    }
}


function evaluate() {

    if(currentOperand===null || shouldResetScreen) 
        return;

    if(currentOperand==='/' &&currentResult.textContent==='0') {
        alert('cant divide by 0');
        clear();
        return
    }

    secondOperand=currentResult.textContent;
    currentResult.textContent=roundResult(operate(currentOperand, firstOperand, secondOperand));

    pastResult.textContent = `${firstOperand} ${currentOperand} ${secondOperand} =`;

}

function add(a, b) {
    return a+b;


}

function substract(a, b) {

    return a-b;

}

function multiply(a, b) {

    return a*b;

}

function divide(a, b) {

    return a/b;

}

function power(a, b) {

    return Math.pow(a, b);

}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }


function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function operate(operant, a, b) {

    a=Number(a)
    b=Number(b)

    switch(operant) {

        case '+': 
            return add(a, b)

        case '-':
            return substract(a, b)
        
        case 'X':
            return multiply(a, b)

        case '/':
            if(b==0) return null
            else return divide(a, b)
        
        case '^':
            return power(a, b)

        default: return null

    }

}

