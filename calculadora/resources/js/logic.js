// var btnSuma = document.getElementById('suma');
// btnSuma.addEventListener('click', sumar);
var num1 = '';
var num2 = '';
var cal = false;
var ope = ''; 

function sumar() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseFloat(num1) + parseFloat(num2);
    document.getElementById('result').innerText = 'El resultado es: ' + result;
}

function restar() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseFloat(num1) - parseFloat(num2);
    document.getElementById('result').innerText = 'El resultado es: ' + result;
}

function entrada(pNumero) {
    // pregunta qué pasa si = if
    if (cal === false) {
        num1 = num1 + pNumero;
        console.log('el primer valor para calcular es:', num1);
        document.getElementById('cal1').innerText = num1;
    } else {
        num2 = num2 + pNumero;
        console.log('el segundo valor para calcular es:', num2);
        document.getElementById('cal2').innerText = num2;
    }
}

function calc (pOperacion) {
    ope = pOperacion;
    console.log('La operación a realizar es:', pOperacion);
    if (pOperacion == 'suma') {
        document.getElementById('ope').innerText = '+'; 
    } else if (pOperacion == 'resta'){
        document.getElementById('ope').innerText = '-'; 
    }
    cal = true;
}

function ejecutar() {
    document.getElementById('resultCalc').innerText =  '=';
    if (ope == 'suma') {
        document.getElementById('finalResult').innerText = parseFloat(num1) + parseFloat(num2);
    } else if (ope == 'resta'){
        document.getElementById('finalResult').innerText = parseFloat(num1) - parseFloat(num2);    
    }
}

function reset() {
    num1 = '';
    num2 = '';
    cal = false;
    ope = '';
    document.getElementById('cal1').innerText = '';
    document.getElementById('cal2').innerText = '';
    document.getElementById('ope').innerText = '';
    document.getElementById('resultCalc').innerText =  '';
    document.getElementById('finalResult').innerText = '';
}

// = asignación
// == comparación de valor
// === comparación de valor y tipo
// 0 == '0'
// 0 === '0'