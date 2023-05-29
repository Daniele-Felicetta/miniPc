var list={
    ciao:{
        saluto:{
            miao:{
                pele:{

                },
                bau:{

                }
            }
        }
    },

    boh:{},
    coco:{
        pepe:{
        }
    }
}

var existentDir=false;
var actualDir="root";
const isDir= function(user2,user3,wordsIN){
    console.log(user2);
    
        if(Object.keys(list).length>0){
            isDirInList(user2,user3);
            if(existentDir==true){ 
                    actualDir=" "+user2;
                    console.log(actualDir);
                    console.log("copyList ="+copyList);
                    pc(`sei dentro la cartella ${user3==undefined ? "["+user2+"]": "["+user3+"]"  } `);
                    if(isEmpty(copyList)===false){
                        printList(copyList,false);
                    }
                    else{
                        pc("qui non ci sono cartelle");
                    }
                    pc('cosa vuoi fare?',true);
                }
            else{
                if(user2==undefined && user3==undefined){
                    pc(`La tua cartella attuale è [ ${actualDir} ]`,false);
                    if(isEmpty(copyList)===false){
                        printList(copyList,true);
                    }
                    else{
                        pc("qui non ci sono cartelle");
                    }
                }
                else{
                    pc(`la cartella ${user2==undefined ? "selezionata" : "["+user2+"]" } qui non esiste`,true);
                }
            }

            existentDir=false;
        }
        else{
            pc("Non ci sono cartelle nel root(radice)");
            pc('Dovresti creare una con il comando => "new [spazio] "nome"');
        }
  
}

var copyList=Object.assign(list);
const isDirInList=function(user2,user3){
    for (key in copyList) {
        console.log("chiave = "+ key+   "  user2 = "+ user2+ "  user3 = " + user3);
        if(user2==key){
            copyList=Object.assign(copyList[key]);
            if(user3===undefined){
                existentDir=true;
            }
            else{
                user2=user3;
                existentDir=false;
                isDirInList(user2);
            }
        }
    }
    //copyList=Object.assign(list);
}

const dirNow= function(list){
    for(key in list){
        console.log(key);
        dirNow(key);
    }
}
dirNow();


const selectDir=function(user){
    user=String(user.textContent.trim()).toLowerCase();
    switch(user){

    }


}
const modifyOrCreateDir=function(){

}

const wantModify=function(){

}

const modifyDir=function(){

}

const wantCreateDir=function(){
    pc("è Stata creata una nuova cartella",true);
}

const createDir=function(){

}
