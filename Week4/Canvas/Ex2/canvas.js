let canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let c=canvas.getContext("2d");

c.fillStyle= "rgb(255,0,0,0.5)";
c.fillRect(100,100,100,100);
c.fillStyle= "rgb(0,255,0,0.5)";
c.fillRect(300,200,100,100);
c.fillStyle= "rgb(0,0,255,0.5)";
c.fillRect(450,300,100,100);

c.beginPath();
c.moveTo(100,300);
c.lineTo(400,50);
c.lineTo(600,400);
c.strokeStyle =  "red";
c.stroke();
for(let i=0;i<200;i++){
    let x=Math.random()*window.innerWidth;
    let y=Math.random()*window.innerHeight;
    let randomColor = "#" + Math.floor(Math.random() * 25542195).toString(16);
    c.beginPath();
    c.arc(x,y,40,0,Math.PI*2,false);
    c.strokeStyle=randomColor;
    c.stroke();
}
