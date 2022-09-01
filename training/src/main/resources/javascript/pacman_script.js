var ghost = {
    x: 32,
    y: 16
};

var maze = [
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],                                                   
    [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],                                     
    [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1],
    [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],                  
    [1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
    [1,1,1,1,0,1,0,0,0,7,0,0,0,1,0,1,1,1,1],
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

                case 6: draw_maze += "<div class='ghost_cage'></div>";
                        break;
                
                case 7: draw_maze += "<div class='pacman_spawn'></div>";
                        break;
            }

        }
        draw_maze += "\n</div>";
    }
    document.getElementById("maze").innerHTML = draw_maze;
}

function getRandom(direction) {
    
    let random = Math.floor(Math.random() * direction.length) + 1;
    
    return random;
}

function displayGhost() {
    document.getElementById('ghost').style.left = (ghost.x)*25+"px";
    document.getElementById('ghost').style.top = (ghost.y)*25+"px";
}

function movement(direction) {
    switch (direction) {
        case 1: ghost.y -= 1;
                break;
        
        case 2: ghost.x += 1;
                break;
        
        case 3: ghost.y += 1;
                break;
        
        case 4: ghost.x -= 1;
                break;
    }
}

var currentDirection = 1;   

function ghostMove() {
    var aviable_direction = [1,2,3,4]; // 1=top, 2=right, 3=bot, 4=left
    console.log(ghost.x, ghost.y);
    currentDirection = getRandom(aviable_direction);

    if ((currentDirection == 1) && (maze[ghost.y-1][ghost.x] == 1)) {
        
        aviable_direction = aviable_direction.slice(0,1);
        aviable_direction = aviable_direction.slice(2,3);
        
        if ((maze[ghost.y][ghost.x+1] == 1)) {

            aviable_direction = aviable_direction.slice(0,1);
        }
        else if ((maze[ghost.y][ghost.x-1] == 1)) {

            aviable_direction = aviable_direction.slice(1,2);
        }

        currentDirection = getRandom(aviable_direction);

    }
    else {
        movement(1);
    }

    if ((currentDirection == 2) && (maze[ghost.y][ghost.x + 1] == 1)) {
        
        aviable_direction = aviable_direction.slice(1,2);
        aviable_direction = aviable_direction.slice(2,3);

        if (maze[ghost.y - 1][ghost.x] == 1) {
            aviable_direction = aviable_direction.slice(0,1);
        }
        else if ((maze[ghost.y + 1][ghost.x] == 1)) {
            aviable_direction = aviable_direction.slice(1,2);
        }

    }
    else {
        movement(2);
    }
    //aviable_direction = [1,2,3,4]; 1=top, 2=right, 3=bot, 4=left
    
    if ((currentDirection == 3) && (maze[ghost.y + 1][ghost.x] == 1)) {

        aviable_direction = aviable_direction.slice(0,1);
        aviable_direction = aviable_direction.slice(1,2);

        if (maze[ghost.y][ghost.x + 1] == 1) {
            aviable_direction = aviable_direction.slice(0,1);
        }
        else if (maze[ghost.y][ghost.x - 1] == 1) {
            aviable_direction = aviable_direction.slice(1,2);
        }

    }
    else {
        movement(3);
    }
    
    displayGhost();   
}

//setInterval(ghostMove, 1000);

function startGame() {
    displayMaze();
    displayGhost();
    ghostMove();
}
