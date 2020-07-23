let database = [
    {
        username: "king1",
        password: "king1"
    },
    {
        username: "king2",
        password: "king2"
    },
    {
        username: "king3",
        password: "king3"
    }
];
let newsFeed = [
    {
        username:"bheem",
        timeline: "i'm strong"
    },
    {
        username:"barjun",
        timeline: "i'm smart"
    }
];

let usernamePrompt = prompt("enter your ussername");
let passwordPrompt = prompt("enter password");

function isUserValid(usern,passw){
    for(let i=0;i< database.length;i++){
        if(usern === database[i].username && passw=== database[i].password){
          return true;
        }
    }
    return false;
}

function signIn(user,pass){
    if(isUserValid(user,pass) == true){
        console.log(newsFeed);
    }
    else{
        alert("wrong password");
    }
      
    // if(user === database[0].username && pass=== database[0].password ){
    //     console.log(newsFeed);
    // }
    // else{
    //     alert("wrong input");
    // }
}

signIn(usernamePrompt,passwordPrompt);