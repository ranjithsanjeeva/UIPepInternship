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

    li.addEventListener("click", function() {
		// creates a boolean that toggles the done class on li:
		// if the list item is clicked this toggles the done class
		var finished = this.classList.toggle("done");
		// creates a remove button for the finished item:
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

		// if the list item is clicked (li add event listener ) then 
		// finished is true
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
    })
    
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
    
