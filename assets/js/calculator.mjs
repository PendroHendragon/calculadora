const operationList = [
  '*',
  '/',
  '+',
  '-',
  '='
];


const display = document.querySelector('input');
let numero1 = "";
let numero2 = "";
let operation = ""

function calculator(buttonValue){
  if(operationList.includes(buttonValue)){
      console.log(buttonValue);
      if(buttonValue == '='){
          numero1 += display.value;
          console.log(numero1);
          const total = eval(numero1);
          display.value = total;
          numero1 =""
      } else {
          
          operation = buttonValue;
          numero1 += (display.value+operation);
          display.value = "";
          operation = null;
      }
  } else {
      if(buttonValue=='clear'){
          display.value = "";
          numero1 = "";
      }else{
         if(buttonValue != '.'){
             display.value += buttonValue;
         } else{
             if(display.value.indexOf('.') == -1){
                 display.value += buttonValue;
             }
         }

      }
      
  }

}