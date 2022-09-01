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
    [0,0,0,0,0,0,0,1,0,6,0,1,0,0,0,0,0,0,0],                  
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

const distance_from_top = document.getElementById('maze').style.margin-top;
const distance_from_left = document.getElementById('maze').style.margin-left;

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

function isBrick (x,y) {

    if (maze[x][y] == 1){
        return true;
    }
    return false;
}

function getBrickPos(x,y) {

}