export{}
let message="hi";
console.log(message);

let isOk:boolean=true;
let age:number=20;
let name:String="King";

let sentance=`My name is ${name}
and I'm bigginer to TypeScript`;

let n:null=null;
let u:undefined=undefined;

let list1:number[]=[1,2,3];
let list2:Array<number> =[1,2,3];

let person1:[string,number]=["ranj",3];
console.log(sentance);

function add(val1: number, val2: number): number{
    return val1 + val2;
  }
   
var numResult = add(10, 20);
//var strResult = add("The number is: ", "10"); it'll show error because we cant pass string to number
console.log(numResult);

