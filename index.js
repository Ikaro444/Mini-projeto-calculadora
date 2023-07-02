var operador = document.getElementById("oper");
let num1 = document.getElementById('primeiro');
let num2 = document.getElementById('segundo');
var result = document.getElementById("resultado");

function calcular() {
   if (num1.value, num2.value, operador.value == 0) {
        alert('Preencha os campos corretamente');
  }else{
    var expressao = `${num1.value} ${operador.value} ${num2.value}`;
        result.innerHTML = `Seu resultado é: ${eval(expressao)}`;
  }  
}    