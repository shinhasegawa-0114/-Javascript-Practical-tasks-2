
let display = document.getElementById( "result" );
function edit(number){
   display.value += number;
}

function clr(number){	
    display.value = number;
}


function calc() {
    let total = eval(display.value);
    display.value = total;
    
    //下記コード、https://techacademy.jp/magazine/21139　より引用
    //display.value = new Function("return " + display.value)();
}

function taxIn() {
    let origin = display.value*1.1;
    let round = Math.round(origin);
    display.value = round;
}

function taxOut() {
    let origin = display.value/1.1;
    let round = Math.round(origin);
    display.value = round;
}

function zeroW() {
   for (let number = 1; number<=2; number++){
       edit(0);
   }
}
