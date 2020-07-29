let canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
let x=100;
let y=100;
let c=canvas.getContext("2d");
for(x;x<canvas.width;x=x+200)
{
    c.fillRect(x,y,100,100);
    for(y;y<canvas.height;y=y+200)
    {
        c.fillRect(x,y,100,100);
        
    }
    y=100;
}


