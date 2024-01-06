let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

const numberButtons=document.querySelectorAll('[data-number]');
const operantButtons=document.querySelectorAll('[data-operant]');
const Clear=document.getElementById('clear');
const Equal=document.getElementById('equal');
const Delete=document.getElementById('delete');
const Point=document.getElementById('point');




function add(a, b) {

    return a+b;

}

function substract(a, b) {

    return a-b;

}

function multiply(a, b) {

    return a*b;

}

function add(a, b) {

    return a/b;

}

