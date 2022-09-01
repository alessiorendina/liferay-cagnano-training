//import { Ghost } from "./Ghost";
//gen maze
class Ghost {
    constructor(row, col, direction) {
        this.row = row;
        this.col = col;
        this.direction = direction;
    }

    getRow() {
        return this.row;
    }

    getCol() {
        return this.col;
    }

    updatePosition(row,col) {
        this.row = row;
        this.col = col;
    }

    updateDirection(newdir) {
        this.direction = newdir;
    }
    
    getDirection() {
        return this.direction;
    }
};

//maze without pacman tunnel
var maze = [
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],                                                   
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],                                     
    [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,0,0,7,0,0,0,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1],
    [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],                  
    [1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,0,0,8,0,0,0,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],                               
    [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],                          
    [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
    [1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1],
    [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5],
    ];

function displayMaze() {
    let draw_maze = '';
    
    for(let i = 0; i < maze.length; i++){
        draw_maze += "\n<div class='maze_row'>\n"
        
        for(let j = 0; j < maze[i].length; j++) {
            switch (maze[i][j]) {
                case 0: draw_maze += "<div class='coin'></div>";
                        break;

                case 1: draw_maze += "<div class='maze_brick'></div>";
                        break;
                    
                case 2: draw_maze += "<div class='maze_brick maze_left_top'></div>";
                        break;
                    
                case 3: draw_maze += "<div class='maze_brick maze_right_top'></div>";
                        break;

                case 4: draw_maze += "<div class='maze_brick maze_left_bottom'></div>";
                        break;
                    
                case 5: draw_maze += "<div class='maze_brick maze_right_bottom'></div>";
                        break;

                case 6: draw_maze += "<div class='ghost_spawn ghost_cage'></div>"; //2 classes because we have ghosts in cage and one of them out
                        break;
                
                case 7: draw_maze += "<div class='ghost_spawn'></div>"; //at start one ghost is out of cage
                        break;
                
                case 8: draw_maze += "<div class='pacman_spawn'></div>";
                        break;
            }

        }
        draw_maze += "\n</div>";
    }
    document.getElementById("maze").innerHTML = draw_maze;
}

function isBrick (x,y) {

    if (maze[x][y] == 1){
        return true;
    }
    return false;
}

/* function that set ghost mode

    exitcage_mode = false;
    //get index where class is ghost_spawn
    if (objghost_is_in_cage){
        exitcage_mode = true;
    }
}
*/

function getGhostStartPos(maze_mat){
    //transform matrix in 1d array for index search
    ghost_index = [].concat.apply([], ([].concat.apply([], maze_mat))).indexOf(7); //it's for only ghost out of cage

    if (ghost_index == -1) {
        return false;
    }
    
    let numColumns = maze_mat[0].length;

    let row = parseInt (ghost_index / numColumns); // row is the index in the 1d array divided by number of columns (row length)

    let col = ghost_index % numColumns; //columns is index modulus number of cloumns
    
    return [row,col];
}

function getRandom(direction) { //generate random index for direction by avialable direction
    
    let random = Math.floor(Math.random() * direction.length);
    
    return random;
}

function ghostMove(ghost){
    var avialable_direction = [1,2,3,4]; // 1=up, 2=right, 3=down, 4=left

    let ghost_col = ghost.getCol();
    let ghost_row = ghost.getRow();

    current_ghost_direction = ghost.getDirection();

    if ((current_ghost_direction == 1) && (isBrick(ghost_row, ghost_col - 1))) {
        
        avialable_direction = avialable_direction.slice(0,1); //slice direction where ghost cannot go
        avialable_direction = avialable_direction.slice(1,2);
        
        if ((isBrick(ghost_row + 1, ghost_col))) {

            avialable_direction = avialable_direction.slice(0,1);
        }
        else if ((isBrick(ghost_row - 1, ghost_col))) {

            avialable_direction = avialable_direction.slice(1,2);
        }

        current_ghost_direction = avialable_direction[getRandom(avialable_direction)];
    }
    else {
        ghost.updatePosition(ghost_row, ghost_col - 1);
        ghost.updateDirection(1);
    }

    if ((current_ghost_direction == 2) && (isBrick(ghost_row + 1, ghost_col))) {
        
        avialable_direction = avialable_direction.slice(1,2);
        avialable_direction = avialable_direction.slice(2,3);

        if (isBrick(ghost_row, ghost_col - 1)) {
            avialable_direction = avialable_direction.slice(0,1);
        }
        else if ((maze[ghost_row][ghost_col + 1] == 1)) {
            avialable_direction = avialable_direction.slice(1,2);
        }

        current_ghost_direction = avialable_direction[getRandom(avialable_direction)];
    }
    else {
        ghost.updatePosition(ghost_row + 1, ghost_col);
        ghost.updateDirection(2);
    }

    if ((current_ghost_direction == 3) && (isBrick(ghost_row, ghost_col + 1))) {

        available_direction = avialable_direction.slice(0,1);
        available_direction = avialable_direction.slice(1,2);

        if (isBrick(ghost_row + 1, ghost_col)) {
            avialable_direction = avialable_direction.slice(0,1);
        }
        else if (isBrick(ghost_row - 1, ghost_col)) {
            avialable_direction = avialable_direction.slice(1,2);
        }

        current_ghost_direction = avialable_direction[getRandom(avialable_direction)];
    }
    else {
        ghost.updatePosition(ghost_row, ghost_col + 1);
        ghost.updateDirection(3);
    }

    if ((current_ghost_direction == 4) && (isBrick(ghost_row - 1, ghost_col))) {
        
        avialable_direction = avialable_direction.slice(1,2);
        avialable_direction = avialable_direction.slice(2,3);

        if (isBrick(ghost_row, ghost_col - 1)) {
            avialable_direction = avialable_direction.slice(0,1);
        }
        else if (isBrick(ghost_row, ghost_col + 1)){
            avialable_direction = avialable_direction.slice(1,2);
        }

        current_ghost_direction = avialable_direction[getRandom(avialable_direction)];
    }
    else {
        ghost.updatePosition(ghost_row - 1, ghost_col);
        ghost.updateDirection(4);
    }
}

function startGame() {
    displayMaze();
    console.log(getGhostStartPos(maze));
    //ghostMove();
}
