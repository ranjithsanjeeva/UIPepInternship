// var person = {
//     name:"king",
//     age:40,
//     address:{
//         street:"5 main st",
//         city:"Biston"
//     },
//     children:["king1","king2"]

// }

// var people=[
//     {
//         name:"brad",
//         age:35
//     },
//     {
//         name:"Jon",
//         age:35
//     },
//     {
//         name:"snow",
//         age:35
//     }
// ]

// //person=JSON.stringify(person);

// var output='';
//  for(var i=0;i<people.length;i++)
//  {
//        output +="<li>"+people[i].name+"</li>"
      
//  }
//  document.getElementById("people").innerHTML=output;


// console.log(people)


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var response=JSON.parse(xhttp.responseText);
       var people = response.people;


       var output ='';
       for(var i=0;i<people.length;i++)
       {
         output +="<li>"+people[i].name+"</li>"
       }
     document.getElementById("people").innerHTML=output;
    }
    
};
xhttp.open("GET", "people.json", true);
xhttp.send();