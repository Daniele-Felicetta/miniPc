const pc = function(text, isNowInput = false, time, isForDir = false) {
  var element = document.createElement("p");
  canvas.appendChild(element);
  updateText(text, element, time);
  if (isNowInput) {
    let userInput = document.createElement("input");
    userInput.type = "text";
    canvas.appendChild(userInput);
    userInput.focus();
    userInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        userInput.disabled = true;
        let userS = userInput.value.trim().toLowerCase();
        isDivideInput(userS);
      }
    });
  }
  canvas.scrollTop = canvas.scrollHeight;
}

userInput =function(user,isForDir){
  user.contentEditable=true;
  document.addEventListener("keydown",function(){
    user.focus();
  })
  user.addEventListener("keydown", function(event){
    isUserInput(event,user,isForDir);
  });
  user.innerHTML = "";
}

const isDivideInput= function(user){
  if(user.includes(" ")){
    console.log(user.split(" "));
    wordsIN=user.split(" ").length;
    user1=user.split(" ")[0];
    user2=user.split(" ")[1];
    user3=user.split(" ")[2];
    comand(user1,user2,user3,wordsIN);
  }
  else{
    comand(user);
  }
}