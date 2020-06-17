class Player{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        stroke(51,51,51)
        strokeWeight(5)
        fill(235,235,235)
        rectMode(CENTER);
        rect( this.body.position.x,this.body.position.y, this.width, this.height);
      }
      moveRight(){
         var push = Matter.Vector.create(+8,0)
         Matter.Body.translate(this.body,push)
      }
      moveLeft(){
        var push = Matter.Vector.create(-8,0)
        Matter.Body.translate(this.body,push)
     }
     moveUp(){
      if(this.body.speed<0.5)
      {
         var push = Matter.Vector.create(0,-12)
         var pos =  Matter.Vector.create(this.body.position.x,this.body.position.y)
          Matter.Body.setVelocity(this.body,push)
         }

     }

}