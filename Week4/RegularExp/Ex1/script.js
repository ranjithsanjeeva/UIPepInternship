function validation(){
    let username=document.getElementById("uname").value;
    regx =/[b-n]00/i;
    if(regx.test(username)){
       alert("valid username");
       document.getElementById("lable").style.visibility="hidden";
    }
    else{
        document.getElementById("lable").style.visibility="visible";
        alert("Invalid username");
        
    }

}