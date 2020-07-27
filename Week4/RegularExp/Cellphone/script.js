

function validation(){
    let username=document.getElementById("uname").value;

    regx =/^[7-9]\d{9}$/;

    if(regx.test(username)){
       document.getElementById("lable").innerHTML="Valid";
       document.getElementById("lable").style.color="green"
       document.getElementById("lable").style.visibility="visible";
    }
    else{
        document.getElementById("lable").innerHTML="Invalid";
        document.getElementById("lable").style.color="red"
        document.getElementById("lable").style.visibility="visible";
        
    }

}