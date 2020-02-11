export default class Player {
    constructor (name, startPosition, playerImageString){
        this.name = name;
        this.type = "human";
        this.imageString = playerImageString;
        this.dx = 0;
        this.dy = 0;
        this.newOrientation = 0;
        this.x = startPosition.x;
        this.y = startPosition.y;
        this.orientation = 180;
        this.health = 3;
        this.isAlive = true;
        this.isMoving = false;
        this.isRotating = false;
        this.isBuilding = false;
        this.isShooting = false;
    }
}

const newPlayer = new Player("Jake", {x: 2, y:2}, "tank.png")
console.log(newPlayer)