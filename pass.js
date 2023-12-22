// const pass = document.getElementById('pass')


function message(){
    location.href="msg.html";
   }
  
   function Message() {
     if(pass.value == ""){
     alert("please enter the password..!");
    }else{
      if(pass.value =="oyee"){
        location.replace("img.html");
      }else{
        if(pass.value=="oyee!"){
        location.pathname="mess.html";
        }else{
         alert("worng password..!")
        }         
      }
    }
  }
