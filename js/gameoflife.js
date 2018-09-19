let Grid = function(width, height, scl){
    this.width = width;
    this.height = height;
    this.scl = scl;

    this.grid = [];
    this.initGrid();
}

/**
 * Créer et initialise la grille à 0 pour chacune des cellules
 */
Grid.prototype.initGrid = function(){

    this.grid = [];
    
    for(let i = 0; i < Math.ceil(this.height / this.scl); i++){

	this.grid.push([]);
	
	for(let j = 0; j < Math.ceil(this.width / this.scl); j++){
	    this.grid[i].push(0);
	}
    }

    console.log(this.grid);
}

/**
 * Dessine chacune des cellules
 */
Grid.prototype.draw = function(ctx){

    for(let i = 0; i < this.grid.length; i++){
	for(let j = 0; j < this.grid[i].length; j++){
	    ctx.fillStyle ='#fff';
	    ctx.strokeStyle ='#c3c3c3';
	    ctx.lineWidth = '1px';
	    ctx.fillRect(j * this.scl, i * this.scl, this.scl, this.scl);
	    ctx.strokeRect(j * this.scl, i * this.scl, this.scl, this.scl);
	    ctx.fill();
	}
    }
}
