//objects
//reference type
var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

//context
const object4={a:function(){
    console.log(this);
 }
}

//instantiation
class Player{
    constructor(name,type){
        console.log('player',this);
        this.name=name;
        this.type=type;
    }
    introduction(){
        console.log(`hi this is ${this.name},i'm the ${this.play}`);

    }
}
class Wizard extends Player{
    constructor(name,type){
        super(name,type);
        console.log('wizard',this);
    }
    play(){
       console.log(`weee im ${this.type}`)
    }
}

const wizard1 = new Wizard('king','healer');
const wizard2 = new Wizard('king1','reviver');





//inheritance
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = mycar.show();


  //pass  by value and pass by reference
  let a = 5;
  let b = a;
  b++

  console.log(a);  //5
  console.log(b);  // 6


let obj1={name:'king' , password:'2211'}
let obj2= obj1;
obj2.password = '1122';

console.log(obj1.password); //1122
console.log(obj2.password);  //1122


//class and constructor
//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mamal('Shelly', 'cow', 'brown');



// advance loop
const basket=['apple','banana','graphs'];
const basketDetail = {
    apple:1,
    banana:4,
    graphs:33
}


// for of loop
//iterable- Array,string returns value
for(items of basket){
    console.log(items);
}


//for in loop
//enumerating for objects it returns index or key.
for(items in basketDetail){
    console.log(items);
}