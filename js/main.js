let canvas, ctx;
let start = false;
let grid;

window.onload = function(){
    setup();
}

function setup(){
    canvas = document.getElementById('mycanvas');
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    grid = new Grid(canvas.width, canvas.height, 15);
    
    update();
}

function update(){

    if(start){
	// TODO : MAKE NEXT GEN
    }

    grid.draw(ctx);
    
    requestAnimationFrame(update);
}
