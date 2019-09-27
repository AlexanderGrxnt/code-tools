var c = document.getElementById("c");
var ctx = c.getContext("2d");

//Making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//Characters 
//  var english = "ABCDEFGHIJKLMNOPQRSTUVWXYZ{}()+=0123456789";
 var english = "0123456789";
english = english.split("");

//Set columns
var font_size = 10;
var columns = Math.floor(c.width/font_size) + 1;

//Set drops
var drops = [];
for(var x = 0; x < columns; x++)
    drops[x] = 1;
const ypos = Array(columns).fill(0);

//Draw characters
function draw(){
    //Black translucent background
    // ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, c.width, c.height);

    //Font
    ctx.fillStyle = "green"; //green text
    ctx.font = font_size + "px arial";

    //Loop drops
    // for(var i = 0; i < drops.length; i++){

    //     //Random character
    //     var text = english[Math.floor(Math.random()*english.length)];
    //     ctx.fillText(text, i*font_size, drops[i]*font_size);

    //     //Reset drops
    //     if(drops[i]*font_size > c.height && Math.random() > 0.975)
    //         drops[i] = 0;
        
    //     //Increment y co-ord
    //     drops[i]++;
    // }
    ypos.forEach((y, ind) => {

        //Generate a random character
        const text = english[Math.floor(Math.random()*english.length)];
        
        //Set x co-ord
        const x = ind * font_size;

        //Render character at (x, y)
        ctx.fillText(text, x, y);

        //Reset drops
        if(y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + font_size;

    });
}

setInterval(draw, 50);