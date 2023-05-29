
const removeAllChildNodes=function(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateText(text,element,time=100) {
    let counter = 0;
    let displayedText = "$ ";
    function updateLetter() {
      const letter = text.substring(counter, counter + 1);
      displayedText += letter;
      element.innerHTML= displayedText;
      counter++;  
      if (counter === text.length) {
        return;
      }
      setTimeout(updateLetter, Math.floor(Math.random() * time));
    }
    updateLetter();
}

function printList(object,wantLastPcTrue=true){
  let keys= Object.keys(object);
  pc("Le cartelle all'interno sono: ");
  for(let i=0; i<keys.length-1; i++){
    pc("["+keys[i]+"]",false);
  }
  if(wantLastPcTrue==true){
    pc("["+keys[keys.length-1]+"]",true);
  }
  else{
    pc("["+keys[keys.length-1]+"]",false);
  }
}

function isEmpty(obj) {
  return Object.entries(obj).length === 0;
}