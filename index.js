var GAME = {
    
    canvas: document.getElementById("canvas"),
    context: document.getElementById("canvas").getContext("2d"),
    width   : 800,
    height  : 600,
    player  : null,
    speed   : 10,
    circles : [],
    mouse   : {
        x   : 0,
        y   : 0
    },

    initGame: function () {
        this.canvas.width   = this.width;
        this.canvas.height  = this.height;
    }

};

//GAME.initGame();
GAME.player = new Circle (GAME.context,{
    x         : 100,
    y         : 100,
    radius    : 25,
    innerColor: '#105055',
    outerColor: '#77fa88'
});

function step() {
    
    GAME.context.clearRect(0, 0, 800, 600);
// GAME.player.draw();
// for (var i in GAME.circles) {
//     GAME.circles[i].draw();
//    GAME.player.x++;
    
    //Smoothin animation and following mouse
    var diffX = GAME.mouse.x - GAME.player.x;
    var diffY = GAME.mouse.y - GAME.player.y;
    GAME.player.x += diffX/GAME.speed;
    GAME.player.y += diffY/GAME.speed;
    
    GAME.player.draw();
    
    
    for (var i in GAME.circles) {
        
        GAME.circles[i].draw(); 
        
   }

    requestAnimationFrame(step);
    
}

requestAnimationFrame(step);


GAME.canvas.addEventListener('mousemove', function(event) {
    
    GAME.mouse.x = event.pageX;
    GAME.mouse.y = event.pageY;
    
});

GAME.canvas.addEventListener ('click', function (event) {
    
        var circle2 = new Circle (
            GAME.context, {
                x         : GAME.player.x,
                y         : GAME.player.y,
                radius    : 10,
                speed     : 10,
                innerColor: '#ff1457',
                outerColor: '#ea80fc',
            }
        );
        GAME.circles.push(circle2);
    })

    
    
    
    
    
    
    
    
    
/*if (GAME.mouse.x > GAME.player.x) {
        GAME.player.x++;
    } else if (GAME.mouse.x < GAME.player.x) {
        GAME.player.x--;
    }
if (GAME.mouse.y > GAME.player.y) {
        GAME.player.y++;
    } else if (GAME.mouse.y < GAME.player.y) {
        GAME.player.y--;
    }*/
//});
//context.beginPath();
//context.arc(100, 75, 50, 0, 2 * Math.PI);
//context.stroke();
//context.arc(x,y,r,sAngle,eAngle,counterclockwise);
//
//context.beginPath();
//context.arc(500, 75, 50, 0, 2  * Math.PI);
//context.stroke();
//
//context.clearRect(0, 0, 1200, 600);
//
//clearRect(x,y,width,height);
//var posX    = 200;
//var Circle1 = new Circle(context, {
//    x       : 100,
//    y       : 100,
//    radius  : 100
//});
//var Circle2 = new Circle(context, {
//    x       : 100,
//    y       : 100,
//    radius  : 50
//});
//var Circle3 = new Circle(context, {
//    x       : 100,
//    y       : 100,
//    radius  : 25
//});
//function step(){
//context.clearRect(0,0,1200,600);
//context.beginPath();
//context.arc(posX,75,50,0,2*Math.PI);
//context.stroke();
//posX ++;
//requestAnimationFrame(step);
//};
//
//requestAnimationFrame(step);
//sert à appeller la fonction une première fois,
//une fois appelée, la fonction se réappellera
//toute seule car on la rappelle à la fin d'elle-même