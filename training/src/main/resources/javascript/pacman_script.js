class Ghost {
    constructor(x, y, direction) {
        this.x = x; //32
        this.y = y; //16
        this.direction = direction;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    updatePosition(x,y){
        this.x = x;
        this.y = y;
    }

    updateDirection(newdir) {
        this.direction = newdir;
    }
    
    getDirection() {
        return this.direction;
    }

    getRandom(direction) {
    
        let random = Math.floor(Math.random() * direction.length) + 1;
        
        return random;
    }
    
    displayGhost() {
        document.getElementById('ghost').style.left = (ghost.x)*25+"px";
        document.getElementById('ghost').style.top = (ghost.y)*25+"px";
    }
    
    ghostMove() {
        displayGhost();   
    }

};

function startGame() {
    displayMaze();
    displayGhost();
    var ghost = new Ghost(32,16,'up');
    ghostMove();
}
