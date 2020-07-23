//root scope

var fun=5;
function funn(){
    //child scope
    fun="hey";
    console.log(3,fun);
}

function funer(){
    //child scope
    fun="hi";
    console.log(2,fun);
}

function funest(){
    //child scope
    fun="hello";
    console.log(1,fun);
}

console.log(fun,"window")
funn();
funer();
funest();
console.log(fun)