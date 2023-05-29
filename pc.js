canvas=document.getElementById("canvas");
all=document.getElementById("all");
imgPc=document.getElementById("imgPc");
accensione=document.getElementById("accensione");
acceso=document.getElementById("acceso");
spento=document.getElementById("spento");
arrow=document.getElementById("arrow");
stupidoTitolo=document.getElementById("stupidoTitolo");

var isAcceso=false;


accensione.addEventListener("click",function(){
    arrow.style.display="none";
    stupidoTitolo.style.display="none";
    start();
})

const start=function(){
    if(isAcceso==false){
        startAnimation();
    }
    else{
        shutdown();
    }   
}
    

const startAnimation=function(){
    console.log("acceso");
    isAcceso=false;
    canvas.style.backgroundImage="url('img/os-intro.gif')";
    acceso.style.backgroundColor="rgb(93, 214, 93)";
    acceso.style.boxShadow="0px 0px 4px 2px rgb(93, 214,93)";
    isAcceso=true;
    accensione.disabled=true;
    const myTimeout = setTimeout(OS,1000);
}

const OS= function(){
    //accensione.disabled=false;
    removeAllChildNodes(canvas);
    canvas.style.backgroundImage="none";
    pc("Se sei nuovo scrivi \"help\" per iniziare",true);
    accensione.disabled=false;
    
}

const shutdown=function(){
    console.log("no acceso");
    acceso.style.backgroundColor="rgb(49, 173, 49)";
    acceso.style.boxShadow="0px 0px";
    isAcceso=false;
    removeAllChildNodes(canvas);
}
