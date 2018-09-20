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
}

/**
 * Dessine chacune des cellules
 */
Grid.prototype.draw = function(ctx){

    for(let i = 0; i < this.grid.length; i++){
	for(let j = 0; j < this.grid[i].length; j++){
	    ctx.fillStyle = this.grid[i][j] == 1 ? '#000' : '#fff';
	    ctx.strokeStyle ='#c3c3c3';
	    ctx.lineWidth = '1px';
	    ctx.fillRect(j * this.scl, i * this.scl, this.scl, this.scl);
	    ctx.strokeRect(j * this.scl, i * this.scl, this.scl, this.scl);
	    ctx.fill();
	}
    }
}

/**
 * Calcul la prochaine génération
 */
Grid.prototype.gen = function(){
    let gridcopy = JSON.parse(JSON.stringify(this.grid));

    for(let i = 0; i < this.grid.length; i++){
	for(let j = 0; j < this.grid[i].length; j++){

	    let sum = 0, check = false;

	    if(i > 0 && i < this.grid.length - 1 && j > 0 && j < this.grid[i].length - 1){ // centre

		// ligne du haut
		sum += this.grid[i - 1][j];
		sum += this.grid[i - 1][j - 1];
		sum += this.grid[i - 1][j + 1];
		
		// ligne du milieu
		sum += this.grid[i][j - 1];
		sum += this.grid[i][j + 1];
		
		// ligne du bas
		sum += this.grid[i + 1][j];
		sum += this.grid[i + 1][j - 1];
		sum += this.grid[i + 1][j + 1];

		check = true;
		
	    }else if(j > 0 && j < this.grid[i].length - 1 && i == 0){ // bord du haut

		// ligne du haut
		sum += this.grid[this.grid.length - 1][j];
		sum += this.grid[this.grid.length - 1][j - 1];
		sum += this.grid[this.grid.length - 1][j + 1];
		
		// ligne du milieu
		sum += this.grid[i][j - 1];
		sum += this.grid[i][j + 1];
		
		// ligne du bas
		sum += this.grid[i + 1][j];
		sum += this.grid[i + 1][j - 1];
		sum += this.grid[i + 1][j + 1];

		check = true;
		
	    }else if(i > 0 && i < this.grid.length - 1 && j == 0){ // bord gauche

		// ligne du haut
		sum += this.grid[i - 1][j];
		sum += this.grid[i - 1][this.grid[i].length - 1];
		sum += this.grid[i - 1][j + 1];
		
		// ligne du milieu
		sum += this.grid[i][this.grid[i].length - 1];
		sum += this.grid[i][j + 1];
		
		// ligne du bas
		sum += this.grid[i + 1][j];
		sum += this.grid[i + 1][this.grid[i].length - 1];
		sum += this.grid[i + 1][j + 1];

		check = true;
		
	    }else if(i > 0 && i < this.grid.length - 1 && j == this.grid[i].length - 1){ // bord droit

		// ligne du haut
		sum += this.grid[i - 1][j];
		sum += this.grid[i - 1][j - 1];
		sum += this.grid[i - 1][0];
		
		// ligne du milieu
		sum += this.grid[i][j - 1];
		sum += this.grid[i][0];
		
		// ligne du bas
		sum += this.grid[i + 1][j];
		sum += this.grid[i + 1][j - 1];
		sum += this.grid[i + 1][0];

		check = true;
		
	    }else if(j > 0 && j < this.grid[i].length - 1 && i == this.grid.length - 1){ // bord bas

		// ligne du haut
		sum += this.grid[i - 1][j];
		sum += this.grid[i - 1][j - 1];
		sum += this.grid[i - 1][j + 1];
		
		// ligne du milieu
		sum += this.grid[i][j - 1];
		sum += this.grid[i][j + 1];
		
		// ligne du bas
		sum += this.grid[0][j];
		sum += this.grid[0][j - 1];
		sum += this.grid[0][j + 1];

		check = true;
		
	    }else if(i == 0 && j == 0){ // angle haut gauche

		// ligne du haut
		sum += this.grid[this.grid.length - 1][j];
		sum += this.grid[this.grid.length - 1][this.grid[i].length - 1];
		sum += this.grid[this.grid.length - 1][j + 1];
		
		// ligne du milieu
		sum += this.grid[i][this.grid[i].length - 1];
		sum += this.grid[i][j + 1];
		
		// ligne du bas
		sum += this.grid[i + 1][j];
		sum += this.grid[i + 1][this.grid[i].length - 1];
		sum += this.grid[i + 1][j + 1];

		check = true;
		
	    }else if(i == 0 && j == this.grid[i].length - 1){ // angle haut droit
		
		// ligne du haut
		sum += this.grid[this.grid.length - 1][j];
		sum += this.grid[this.grid.length - 1][j - 1];
		sum += this.grid[this.grid.length - 1][0];
		
		// ligne du milieu
		sum += this.grid[i][j - 1];
		sum += this.grid[i][0];
		
		// ligne du bas
		sum += this.grid[i + 1][j];
		sum += this.grid[i + 1][j - 1];
		sum += this.grid[i + 1][0];

		check = true;
		
	    }else if(i == this.grid.length - 1 && j == 0){ // angle bas gauche

		// ligne du haut
		sum += this.grid[i - 1][j];
		sum += this.grid[i - 1][this.grid[i].length - 1];
		sum += this.grid[i - 1][j + 1];
		
		// ligne du milieu
		sum += this.grid[i][this.grid[i].length - 1];
		sum += this.grid[i][j + 1];
		
		// ligne du bas
		sum += this.grid[0][j];
		sum += this.grid[0][this.grid[i].length - 1];
		sum += this.grid[0][j + 1];

		check = true;
		
	    }else if(i == this.grid.length - 1 && j == this.grid[i].length - 1){ // angle bas droit

		// ligne du haut
		sum += this.grid[i - 1][j];
		sum += this.grid[i - 1][j - 1];
		sum += this.grid[i - 1][0];
		
		// ligne du milieu
		sum += this.grid[i][j - 1];
		sum += this.grid[i][0];
		
		// ligne du bas
		sum += this.grid[0][j];
		sum += this.grid[0][j - 1];
		sum += this.grid[0][0];

		check = true;
	    }

	    

	    if(this.grid[i][j] == 0 && sum == 3 && check)
		gridcopy[i][j] = 1;
	    else if(this.grid[i][j] == 1 && (sum < 2 || sm > 3) && check)
		gridcopy[i][j] = 0;
	}	
    }

    this.grid = gridcopy;
}
