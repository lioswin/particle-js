const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 let particleArray = [];

 //handle mouse interaction

 const mouse = {
    x: null,
    y: null,
    radius:150
 }


 window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x, mouse.y);
 });


 ctx.fillStyle = "white";
 ctx.font = "30px Verdana";
 ctx.fillText('A',0,30);


 const data = ctx.getImageData(0, 0, 100, 100);



 class Particle {
    constructor(x,y){
        this.x = x + 100;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
    }
 }