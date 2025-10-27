let inputNum;
let output=document.getElementById('taka');
let convertbtn=document.getElementById('converter');
let clearbtn=document.getElementById('clear');
let input = document.querySelector('input');

function convertdoller(){ 
        inputNum =(document.getElementById('input-doller').value);
        let taka=inputNum*85.90;
        output.innerText=taka;
}
function clear(){
    output.innerText='0';
    input.value='0'
   
}
convertbtn.addEventListener('click',convertdoller);
clearbtn.addEventListener('click',clear);
