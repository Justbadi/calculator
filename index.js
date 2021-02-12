
var output = '' , previousOutput , clickedButton , previousClickedButton;

function clearAll(){
  document.getElementById('output').innerHTML = '0';
  output = '';
  previousOutput = '';
}

function clickedNumber(calc){
  clickedButton = calc.innerText;
  previousClickedButton = clickedButton;
  previousOutput = output;
  if(output == 0){output = clickedButton}
  else{output += clickedButton;}
  setTimeout(result(),1);
}

function clickedOperator(calc){
  if (output != '' &&
      previousClickedButton != '/' &&
      previousClickedButton != '*' &&
      previousClickedButton != '.') {
    clickedButton = calc.innerText;
    previousClickedButton = clickedButton;
    previousClickedButton
    previousOutput = output;
    output += clickedButton;
    setTimeout(result(),1);
  }
}

function del(){
  if(previousOutput == ''){document.getElementById('output').innerHTML = '0'; output = '';}
  else{
    document.getElementById('output').innerHTML = previousOutput;
    output = previousOutput;
  }
}

function result(){
  document.getElementById('output').innerHTML = output;
}

function equals(){
  if (output != '' &&
      previousClickedButton != '/' &&
      previousClickedButton != '*' &&
      previousClickedButton != '-' &&
      previousClickedButton != '+') {
    output = eval(output);
    setTimeout(result(),1);
  }
}