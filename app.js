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









 const form = document.querySelector('form');
 form.addEventListener('submit',(evento) => {
     evento.preventDefault();
 });
 const buttonList = document.querySelectorAll('button');
 for (var i = 0, len = buttonList.length; i < len; i++) {
     buttonList[i].addEventListener('click', (evento) => {
         const buttonValue = evento.target.value;
 
         calculator(buttonValue);
     }, false);
 }