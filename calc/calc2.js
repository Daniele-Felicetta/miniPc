const table=[document.getElementById("r1-1"),document.getElementById("r1-2"),document.getElementById("r1-3"),document.getElementById("r1-4"),document.getElementById("r2-1"),document.getElementById("r2-2"),document.getElementById("r2-3"),document.getElementById("r2-4"),document.getElementById("r3-1"),document.getElementById("r3-2"),document.getElementById("r3-3"),document.getElementById("r3-4"),document.getElementById("r4-1"),document.getElementById("r4-2"),document.getElementById("r4-3"),document.getElementById("r4-4")];

const numeriOutput= document.getElementById("result");

var first=0;
var second=0;
var currentNumber=0;
var currentOperation=" ";
var controlloVariabile = "first";

var aggiungiNumero = function(x){
    if(!isNaN(x.target.textContent)){
        currentNumber = x.target.textContent;
        numeriOutput.innerHTML+=currentNumber;
    }
    for(key in operation){
        if(x.target.textContent==operation[key]){
            if(controlloVariabile=="first"){
               first=currentNumber;
               controlloVariabile= "second";
            }
            else{
                b=currentNumber;
            }
            currentOperation=operation[key];
            numeriOutput.innerHTML=currentOperation;

        }
    }
    console.log(currentOperation);
}



var operation={
    addition:"+", subtraction:"-", moltiplication:"x", division:"/"
}

table.forEach(x => x.addEventListener("click", aggiungiNumero));