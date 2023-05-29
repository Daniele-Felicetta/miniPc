/*
This is a simple calculator with some limits (in order of most significant):
1. There are no possibilities to use subtraction from first variable
2. There are no possibilities to use float numbers except for result
3. There aren't any advanced operations like square root, logarithm, exponentiation 
4. If you enter numbers in the result they are added to the result
*/

/*
This calculator has followed several macro-steps to arrive at the final product:
1.Saves each value from the input and saves it in 2 variables 
    1.1 Every number input is saved in the first variable
    1.1 When there is an operation in input the next numbers are saved in second variable
2. If input is "CE" cancel every variable
3. If input is "=" shows the result according to the previously stored operator
    3.1 Control if result is floating number
    3.2 Restart , but now the first variable is already the result and you can continue with the other calculations.

*/
const startCalc = function(){
console.log("CALCOLATRICEEEEEEEEEEE");
console.log(startCalc);

const table=[document.getElementById("r1-1"),document.getElementById("r1-2"),document.getElementById("r1-3"),document.getElementById("r1-4"),document.getElementById("r2-1"),document.getElementById("r2-2"),document.getElementById("r2-3"),document.getElementById("r2-4"),document.getElementById("r3-1"),document.getElementById("r3-2"),document.getElementById("r3-3"),document.getElementById("r3-4"),document.getElementById("r4-1"),document.getElementById("r4-2"),document.getElementById("r4-3"),document.getElementById("r4-4")];

const numeriOutput= document.getElementById("result");
var isOperazione=false;
var operation="";
var first=0;
var second=0;
var sentinellaPerMemoria=0;
var actual=0;
var result=0;

//Control length of variables
var tooManyNumbers= function (){
    if(first.length>9 || second.length>9){
        console.log("ERR");
        first=0;
        second=0;
    }
}

//Controllo della virgola dei valori e memorizzazione del risultato
var Isfloating=function(actual){
    if(actual>999999999){
        numeriOutput.innerHTML=("ERR TOO HG");
        actual=0;
    }
    else if(Number.isInteger(actual)){
        numeriOutput.innerHTML=actual;
    }
    else{
        numeriOutput.innerHTML=actual.toFixed(7);
    }
    first=actual;
    second=0;
}

//1  Saves each value from the input and saves it in 2 variables
const aggiungiNumero= function(x){
    console.log("first lent "+first.length);
    console.log("first lent "+second.length);

    //Control length of variables, only if first or second are > than 9
    tooManyNumbers();
    
    //leva il primo zero quando scrivo
    let actual=first.toString();
    if(actual.indexOf(0)==0){
        first=actual.slice(1);
    }
    actual=second.toString();
    if(actual.indexOf(0)==0){
        second=actual.slice(1);
    }

    //Memorizazione dei numeri
    if(!isNaN(x.target.textContent)){
        //Se l'input è un operazione pulisci output
        if(isOperazione==true){
            numeriOutput.innerHTML="";
            isOperazione=false;
        }
        //Memorizza su *first* e lo mostra
        if(sentinellaPerMemoria==0){ 
            first+=x.target.textContent;
            numeriOutput.innerHTML=first;
        }
        //Memorizza su *second* e lo mostra
        else{
            second+=x.target.textContent;
            numeriOutput.innerHTML=second;
        }  
    }
    //Cancella tutto
    else if(x.target.textContent=="CE"){
            console.log("Ce");
            numeriOutput.innerHTML="0";
            first=0;
            second=0;    
    }
    //Se l'input è un operazione mostrala e memorizza su *second*
    else{
        numeriOutput.innerHTML=(x.target.textContent);
        isOperazione=true;
        sentinellaPerMemoria=1;
    }

    //Memorizzazione dell'operazione richiesta
    if(x.target.textContent=="+"){
        operation="addition";
    }
    if(x.target.textContent=="-"){
        operation="subtraction";
    }
    if(x.target.textContent=="x"){
        operation="multiplication";
    }
    if(x.target.textContent=="/"){
        operation="division";
    }
    console.log(first);
    console.log(second);
    console.log(operation)

    //Controllo del risultato
    if(x.target.textContent=="="){
        if(operation=="addition"){
            actual=parseInt((Number(first)+Number(second)));
            Isfloating(actual);
        }
        if(operation=="subtraction"){
            actual=parseInt((Number(first)-Number(second)));
            Isfloating(actual);
        }
        if(operation=="multiplication"){
           actual= parseInt((Number(first)*Number(second)))
            Isfloating(actual);
        }
        if(operation=="division"){
            actual=((Number(first)/Number(second)))
            Isfloating(actual);
        }
        sentinellaPerMemoria=0;
    }
}

table.forEach(x => x.addEventListener("click", aggiungiNumero));
}