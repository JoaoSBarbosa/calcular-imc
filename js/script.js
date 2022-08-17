function start(){
  var buttonCalculateImc = document.querySelector('#btn-calcular-imc'); // pega o botão btn-calcular-imc do html

  // A função buttonCalculateImc vai escutar um evento através de: addEventListener toda vem que ouvir um Click. A cada click, será executado a função: handButtonClik 
  buttonCalculateImc = addEventListener('click', 
  handleButtonClick); 

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputHeight.addEventListener('input',handleButtonClick)
  inputWeight.addEventListener('input',handleButtonClick)

  handleButtonClick();
}
function calculateImc(peso, altura){
  return peso / (altura * altura);
}

function handleButtonClick(){
  // A cada click, o que estiver aqui será executado
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  var imcResult= document.querySelector('#imcResult');

  // Pegando só o valor da variável e transformando para número. O resultado será inserido nas novas variáveis
  var weight = Number(inputWeight.value);  
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  console.log(imc);

  var formattedImc = imc.toFixed(2).replace('.',',') // COMANDO PARA FORMATAR OS NÚMEROS
  
  imcResult.textContent = formattedImc;
}

start();
