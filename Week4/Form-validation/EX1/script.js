let username=document.getElementById("username");
let password=document.getElementById("password");

function validation(){
    if(username.value.trim()=="")
    {
       alert("Blank username");
       username.style.border="solid 2px red";
       document.getElementById("lbluser").style.visibility="visible";
       return false
    }
    else if(password.value.trim()=="")
    {
       alert("Blank password");
       password.style.border="solid 2px red";
       document.getElementById("lblpass").style.visibility="visible";
       return false
    }
    else if(password.value.trim().length < 5)
    {
       alert("Password is short");
       password.style.border="solid 2px red";
       document.getElementById("lblpass").style.visibility="visible";
       return false
 
    }
    else{
        return true;
    }
}