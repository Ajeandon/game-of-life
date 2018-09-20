let canvas, ctx;
let start = false;
let grid;

window.onload = function(){
    setup();
}

function setup(){
    canvas = document.getElementById('mycanvas');
    canvas.addEventListener('click', cellClickEvent);
    
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    grid = new Grid(canvas.width, canvas.height, 15);
    
    update();
}

function update(){

    if(start){
	grid.gen(); // calcul de la génération suivante
    }

    grid.draw(ctx);
    
    requestAnimationFrame(update);
}

function startEvent(e){
    if(e.keyCode == 32 || e.charCode == "32")
	start = start ? false : true;

    console.log(start);
}

document.addEventListener('keypress', startEvent);

function cellClickEvent(e){
    let rect = canvas.getBoundingClientRect();
    let pos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    grid.grid[Math.floor(pos.y / grid.scl)][Math.floor(pos.x / grid.scl)] = grid.grid[Math.floor(pos.y / grid.scl)][Math.floor(pos.x / grid.scl)] == 1 ? 0 : 1; 
}
