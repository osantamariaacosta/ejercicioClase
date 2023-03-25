// var btnSuma = document.getElementById('suma');
// btnSuma.addEventListener('click', sumar);

function sumar() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = parseFloat(num1) + parseFloat(num2);
    document.getElementById('result').innerText = 'El resultado es: ' + result;
}