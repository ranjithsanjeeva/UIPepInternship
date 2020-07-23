console.log('hello world');

//variable
let name ='Ranjith'; //let or var used for variable
console.log(name);


//constant
const intrestRate = 0.3;
// intrestRate=1;
console.log(intrestRate);


//premitive datatype

let name1 = 'king';           //string
let age = 40;                //number
let isApproved =  true;      //boolean
let firstName = undefined;   //undefined
let color = null;            //null


//object

let person = {
    newName : 'Mosh',
    newAge : 33
};
person.newName = "jon";  //dot notation
person['newName']= 'mary'; //bracket notation
console.log(person);


//Array
 
let selectedColors = ['red','blue','green'];
selectedColors[3]= 'pink';
selectedColors[4]= 2;
console.log(selectedColors);
console.log(selectedColors.length);


//function
function greet(name2,lastName){
    console.log('Hello '+ name2 + ' ' + lastName);
}
greet('Arjun');
greet('Bheem');
greet('Tony','stark');

//Anonymus function

let sayBye = function(){
    console.log("Bye");
}

sayBye();


//for-each
let animal = ["cat","dog","lion","tiger"];
function log(i,j){
    console.log(i,j);
}
animal.forEach(log);