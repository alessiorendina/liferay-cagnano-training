var maze = [
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],                                                   
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],                                     
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 7, 0, 0, 1, 0, 1, 0, 0, 0, 0],
   ['H', 6, 6, 6, 1, 1, 1, 0, 6, 7, 6, 0, 1, 1, 1, 6, 6, 6, 'H'],                  
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],                               
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],                          
    [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0 ,1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    ];  

var pacman = {
    x: 9,
    y: 11
};

var blinky = {
    x: 9,
    y: 7,
    direction: "up",
    ghost_mode: 1,
    name: "blinky"
};

var inky = {
    x: 8,
    y: 9,
    direction: "right",
    ghost_mode: 0,
    name: "inky"
};

var pinky = {
    x: 9,
    y: 9,
    direction: "up",
    ghost_mode: 0,
    name: "pinky"
};

var clyde = {
    x: 10,
    y: 9,
    direction: "left",
    ghost_mode: 0,
    name: "clyde"
};

var all_ghosts_mode = [pinky.ghost_mode,inky.ghost_mode,clyde.ghost_mode];
var name_ghosts = [pinky.name,inky.name,clyde.name];

var score = 0, record = 0;
var ghost_in_cage = 3;

var blinky_interval = null, inky_interval = null, pinky_interval = null, clyde_interval = null, pacman_interval = null;;
var save_keydown_event;
var exit_timer = 0;
var last_key_pressed;

function displayMaze() {
    let output = '';
    let maze_col_len = maze.length;
    let maze_row_len = maze[0].length;
    for (let i = 0; i < maze_col_len; i++) {
        output += "\n<div class='maze_row'>\n";
        for (let j = 0; j < maze_row_len; j++) {
            if(maze[i][j] == 0)
                output += "<div class='maze_brick'></div>";
            else if(maze[i][j] == 1)
                output += "<div class='coin'></div>";
            else if(maze[i][j] == 2)
                output += "<div class='maze_brick maze_right_top'></div>";
            else if(maze[i][j] == 3)
                output += "<div class='maze_brick maze_right_bottom'></div>";
            else if(maze[i][j] == 4)
                output += "<div class='maze_brick maze_left_bottom'></div>";
            else if(maze[i][j] == 5)
                output += "<div class='maze_brick maze_left_top'></div>";
            else if(maze[i][j] == 6 || maze[i][j] == 'H' || maze[i][j] == 7)
                output += "<div class='empty'></div>";    
        }
        output += "\n</div>";
    }
    document.getElementById('maze').innerHTML = output;
}

function displayPacman() {
    let pacman_element = document.getElementById('pacman');

    pacman_element.style.left = pacman.x*25 + "px";
    pacman_element.style.top = pacman.y*25 + "px"; 
}

function displayGhost(ghost) {
    let ghost_element = document.getElementById(ghost.name);
    let url = "url(images/pacman/";
    
    switch(ghost.direction) {
        case "left": url += ghost.name + "Left.png" + ")";
                break;
        case "right": url += ghost.name + "Right.png" + ")";
                break;
        case "up": url += ghost.name + "Up.png" + ")";
                break;
        case "down": url += ghost.name + "Down.png" + ")";
                break;
    }

    ghost_element.style.backgroundImage = url;
    ghost_element.style.left = ghost.x * 25 + "px";
    ghost_element.style.top = ghost.y * 25 + "px";
}

function displayScore() {
    document.getElementById('scoreboard').firstElementChild.innerHTML = score;
}

function showElement() {
    document.getElementById('pacman').style.visibility = "visible";
    document.getElementById('blinky').style.visibility = "visible";
    document.getElementById('inky').style.visibility = "visible";
    document.getElementById('pinky').style.visibility = "visible";
    document.getElementById('clyde').style.visibility = "visible";
    document.getElementById('scoreboard').style.visibility = "visible";
}

function pacmanMove() {
    let pacman_direction;
    switch (last_key_pressed) {
        case "ArrowLeft":  pacman_direction = "left";
                           break;
        case "ArrowRight": pacman_direction = "right";
                           break;
        case "ArrowUp":    pacman_direction = "up";
                           break;
        case "ArrowDown":  pacman_direction = "down";
                           break;
    }

    if (pacman_direction == "left" && (maze[pacman.y][pacman.x - 1] == 6 || maze[pacman.y][pacman.x - 1] == 1 || maze[pacman.y][pacman.x - 1] == 'H')) {
        pacman_element.style.transform = "rotate(-180deg)";
        pacman.x --;
    }
    else if (pacman_direction == "right" && (maze[pacman.y][pacman.x + 1] == 6 || maze[pacman.y][pacman.x + 1] == 1 || maze[pacman.y][pacman.x + 1] == 'H')) {
        pacman_element.style.transform = "rotate(0deg)";
        pacman.x ++;
    }
    else if (pacman_direction == "up" && (maze[pacman.y-1][pacman.x] == 6 || maze[pacman.y - 1][pacman.x] == 1)) {
        pacman_element.style.transform = "rotate(-90deg)";
        pacman.y --;
    }
    else if (pacman_direction == "down" && (maze[pacman.y + 1][pacman.x] == 6 || maze[pacman.y + 1][pacman.x] == 1)) {
        pacman_element.style.transform = "rotate(90deg)";
        pacman.y ++;
    }
    displayPacman();

    if (maze[pacman.y][pacman.x] == 'H' && last_key_pressed == "ArrowLeft") {
        pacman.x = 18;
    } 
    else if (maze[pacman.y][pacman.x] == 'H' && last_key_pressed == "ArrowRight") {
        pacman.x = 0;
    }

    if (maze[pacman.y][pacman.x] == 1) {
        maze[pacman.y][pacman.x] = 6;
        score += 10;

        displayMaze();
        displayScore();
    }
    checkEnd();
}

document.onkeydown = function(e) {
    pacman_element = document.getElementById('pacman');
    
    last_key_pressed = e.key;

    if (pacman_interval == null)
    pacman_interval = setInterval(pacmanMove, 350);

    checkEnd();
}

function exitCage(ghost_index) {
    let ghost;
    if (all_ghosts_mode[ghost_index] == 0) {
        if(name_ghosts[ghost_index] == "pinky") {
            ghost = pinky;
            
            if (pinky_interval == null)
            pinky_interval = setInterval(ghostMove, 350, pinky);  
        }
        else if(name_ghosts[ghost_index] == "inky") {
            ghost = inky;
            
            if (inky_interval == null)
            inky_interval = setInterval(ghostMove, 350, inky);
        }
        else if(name_ghosts[ghost_index] == "clyde") {
            ghost = clyde;
            
            if (clyde_interval == null)
            clyde_interval = setInterval(ghostMove, 350, clyde);
        }
    }
    if (maze[ghost.y][ghost.x] == 7) {
        ghost.direction = "up";
    }
    if (maze[ghost.y][ghost.x+1] == 7) {
        ghost.direction = "right";
    }
    if (maze[ghost.y][ghost.x-1] == 7) {
        ghost.direction = "left";
    }
    if (maze[ghost.y][ghost.x] == maze[7][9]) {
        ghost_in_cage --;
        ghost.ghost_mode = 1;
        all_ghosts_mode[ghost_index] = 1;
        closeCage();
    }
}

function closeCage() {
    if (ghost_in_cage == 0) {
        maze[8][9] = 0;
        displayMaze();
    }
}

function getRandom() {
    let random = Math.floor(Math.random() * (4) + 1);
    
    switch(random){
        case 1: return "left";
        case 2: return "right";
        case 3: return "up";
        case 4: return "down";
    }

}

function oppositeDirection(direction) {
    let opposite_direction;
    switch (direction) {
        case "left": opposite_direction = "right";
                break;
        case "right": opposite_direction = "left";
                break;
        case "up": opposite_direction = "down";
                break;
        case "down": opposite_direction = "up";
                break;
    }
    return opposite_direction;
}

function ghostCanGo(direction, ghost) {
    if ((direction.localeCompare("left") == 0) && (maze[ghost.y][ghost.x-1]==6 || maze[ghost.y][ghost.x-1]==1 || maze[ghost.y][ghost.x - 1] == 7)) {
        return true;
    }
    else if ((direction.localeCompare("right") == 0) && (maze[ghost.y][ghost.x+1]==6 || maze[ghost.y][ghost.x+1]==1 || maze[ghost.y][ghost.x + 1] == 7)) {
        return true;
    }
    else if ((direction.localeCompare("up") == 0) && (maze[ghost.y-1][ghost.x]==6 || maze[ghost.y-1][ghost.x]==1 || maze[ghost.y-1][ghost.x] == 7)) {
        return true;
    }
    else if ((direction.localeCompare("down") == 0) && (maze[ghost.y+1][ghost.x] != 7) && (maze[ghost.y+1][ghost.x]==6 || maze[ghost.y+1][ghost.x] == 1)) {
        return true;
    }
    else {
        return false;
    }
}

function ghostMove(ghost) {
    let newDirection = getRandom();

    if (ghost.ghost_mode == 1) {
        if (
            (((ghost.direction.localeCompare("left") == 0) || (ghost.direction.localeCompare("right") == 0)) && (ghostCanGo("up", ghost) || ghostCanGo("down", ghost)))
            ||
            (((ghost.direction.localeCompare("up") == 0) || (ghost.direction.localeCompare("down") == 0)) && (ghostCanGo("left", ghost) || ghostCanGo("right", ghost)))
        ){

            while (newDirection == oppositeDirection(ghost.direction) || !(ghostCanGo(newDirection, ghost))) {
                newDirection = getRandom();
            }
            ghost.direction = newDirection;
        }
    }

    if ((ghost.direction.localeCompare("left") == 0) && (ghostCanGo(ghost.direction, ghost) || maze[ghost.y][ghost.x-1] == 'H')) {
        ghost.x --;
    } else if ((ghost.direction.localeCompare("right") == 0) && (ghostCanGo(ghost.direction, ghost) || maze[ghost.y][ghost.x+1] == 'H')) {
        ghost.x ++;
    } else if ((ghost.direction.localeCompare("up") == 0) && (ghostCanGo(ghost.direction, ghost))) {
        ghost.y --;
    } else if ((ghost.direction.localeCompare("down") == 0) && (ghostCanGo(ghost.direction, ghost))) {
        ghost.y ++;
    }
        
    if (ghost.name == "blinky") {
        exit_timer++;

        if (all_ghosts_mode.includes(0)) {
            var ghost_index = all_ghosts_mode.indexOf(0);
                if (exit_timer == 1) {
                    if (ghost_in_cage > 0){
                        exitCage(ghost_index);
                    }
                    exit_timer = 0;
                } 
        }
    }

    if (maze[ghost.y][ghost.x] == 'H' && (ghost.direction.localeCompare("left") == 0)) {
        checkEnd();
        ghost.x = 18;
    }  
    else if (maze[ghost.y][ghost.x] == 'H' && (ghost.direction.localeCompare("right") == 0)) {
        checkEnd();
        ghost.x = 0;
    }
    displayGhost(ghost);
    checkEnd();
}

function thereIsMoney() {
    index = [].concat.apply([], ([].concat.apply([], maze))).indexOf(1);

    if (index == -1) {
        return false;
    }
    
    return true;
}

function pacmanClash() {
    if (((pacman.y == blinky.y) && (pacman.x == blinky.x)) || ((pacman.y == inky.y) && (pacman.x == inky.x)) ||
        ((pacman.y == pinky.y) && (pacman.x == pinky.x)) || ((pacman.y == clyde.y) && (pacman.x == clyde.x))) {
        return true;
    } else {
        return false;
    }
}

function checkEnd() {
    if(pacmanClash()) {
        document.getElementById('gameStatusMessage').innerHTML = "GAME OVER";
        $('#gameStatusMessage').fadeIn();

        clearInterval(blinky_interval);
        clearInterval(inky_interval);
        clearInterval(pinky_interval);
        clearInterval(clyde_interval);
        clearInterval(pacman_interval);

        save_keydown_event = document.onkeydown;
        document.onkeydown = null;
        document.getElementById("pacman_button").disabled = false;
        resetGame(false);
    }
    else if(!thereIsMoney()) {
        document.getElementById('gameStatusMessage').innerHTML = "YOU WON!";
        $('#gameStatusMessage').fadeIn();

        clearInterval(blinky_interval);
        clearInterval(inky_interval);
        clearInterval(pinky_interval);
        clearInterval(clyde_interval);
        clearInterval(pacman_interval);

        save_keydown_event = document.onkeydown;
        document.onkeydown = null;
        document.getElementById("pacman_button").disabled = false;
        resetGame(true);
    }
}

function resetGame(game_win) {
    maze = [
        [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],                                                   
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],                                     
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 7, 0, 0, 1, 0, 1, 0, 0, 0, 0],
       ['H', 6, 6, 6, 1, 1, 1, 0, 6, 7, 6, 0, 1, 1, 1, 6, 6, 6, 'H'],                  
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],                               
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],                          
        [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0 ,1, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        ];  
    
    pacman = {
        x: 9,
        y: 11
    }
    
    blinky = {
        x: 9,
        y: 7,
        direction: "up",
        ghost_mode: 1,
        name: "blinky"
    }
    
    inky = {
        x: 8,
        y: 9,
        direction: "right",
        ghost_mode: 0,
        name: "inky"
    }
    pinky = {
        x: 9,
        y: 9,
        direction: "up",
        ghost_mode: 0,
        name: "pinky"
    }
    
    clyde = {
        x: 10,
        y: 9,
        direction: "left",
        ghost_mode: 0,
        name: "clyde"
    }

    if (!game_win) {
        if (score > record) {
            record = document.getElementById("pacmanRecord").innerHTML = score;
        }
        score = 0;
    }

    exit_timer = 0;
    ghost_in_cage = 3;
    all_ghosts_mode = [pinky.ghost_mode,inky.ghost_mode,clyde.ghost_mode];
    name_ghosts = [pinky.name,inky.name,clyde.name];
    blinky_interval = null, inky_interval = null, pinky_interval = null, clyde_interval = null, pacman_interval = null;
}

function startGame() {
    displayMaze();
    displayPacman();

    $("[tabindex='0']").focus();

    displayGhost(blinky);
    displayGhost(inky);
    displayGhost(pinky);
    displayGhost(clyde);

    displayScore();
    showElement();

    if (document.onkeydown == null)
    document.onkeydown = save_keydown_event;

    blinky_interval = setInterval(ghostMove, 350, blinky);

    document.getElementById("pacman_button").disabled = true;
    document.getElementById('gameStatusMessage').style.display = "none";
    document.onkeydown = keydownevent;
}