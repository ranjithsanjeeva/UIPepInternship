var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul=document.querySelector("ul");

function getLength(){
    return input.value.length
}

function createList(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick(){
    if(getLength() > 0)
    {
      createList();
    }
}
function addListAfterKeyPress(event){
    if(getLength()> 0 && event.keyCode===13)
    {
       createList();
    }

}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);
    
