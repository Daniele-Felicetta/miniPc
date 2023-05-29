const comand=function(user1,user2,user3,wordsIN){
    switch(user1){
        case 'help':
            pc("Questi sono i comandi principali:",false,0);
            pc('"help": => per avere la lista dei comandi che si possono usare',false,20);
            pc('"date": => per sapere data e ora attuale',false,20);
            pc('"hdir": => Per sapere come funzionano le cartelle, come crearle e modificarle',false,20);
            pc('"calc": => per usare la calcolatrice grafica (beta)',true,20);
            break;

        case 'date':
            var today = new Date();
            // ottieni la data e l'ora
            var now = today.toLocaleString();
            pc(now,true);
            break;

        case 'calc':  
        calc();
        break;

        case 'hdir':
            pc('"cd" => per vedere il contenuto della cartella attuale',false,20);
            pc('"cd [spazio]  nome" => per entrare nella cartella',false,20);
            pc('"cd [spazio] ." => per andare indiero di una cartella => ex("cd . ")',false,20);
            pc('"new [spazio] "nome" => per creare una nuova cartella',false,20);
            pc('"mod [spazio] nome" => per rinominare una cartella',false,20);
            pc("Nota bene: bisogna mettere tanti spazi e nomi quanti sono le cartelle innestate/da innestare (limite massimo 3)",true,20);
        break;

        case'cd':
            isDir(user2,user3,wordsIN);
            break;

        default:
            console.log("user1 = "+user1);
            pc(`La keyword ${user1} non fa parte dei miei comandi`,true);
    }
}
const comand2=function(user){
    user=String(user.textContent.trim()).toLowerCase();
}





const calc=function(){
      
        removeAllChildNodes(canvas);
        canvas.innerHTML =` <div class="container-flex">
                                <div class="image">

                                    <div id="numeri-output">
                                        <p id="result"></p>
                                    </div>
                                    <div class="container-tasti">
                                        <button id=r1-1 class="tasti">1</button>
                                        <button id=r1-2 class="tasti">2</button>
                                        <button id=r1-3 class="tasti">3</button>
                                        <button id=r1-4 class="tasti">/</button>


                                        <button id=r2-1 class="tasti">4</button>
                                        <button id=r2-2 class="tasti">5</button>
                                        <button id=r2-3 class="tasti">6</button>
                                        <button id=r2-4 class="tasti">x</button>

                                        <button id=r3-1 class="tasti">7</button>
                                        <button id=r3-2 class="tasti">8</button>
                                        <button id=r3-3 class="tasti">9</button>
                                        <button id=r3-4 class="tasti">-</button>

                                        <button id=r4-1 class="tasti">CE</button>
                                        <button id=r4-2 class="tasti">0</button>
                                        <button id=r4-3 class="tasti">=</button>
                                        <button id=r4-4 class="tasti">+</button>
                                    </div>
                                </div>
                            </div>`

        startCalc();
        exitButton=document.getElementById("exitCalculator");
        exitButton.style.display="block";
        exitButton.addEventListener("click",function(){
            exitCalculator();
        });
        document.addEventListener("keydown",function(event){
            if(event.key=="Escape"){
                exitCalculator();
            }
        });
}   
const exitCalculator = function(){
    exitButton.style.display="none";
    OS();
}

