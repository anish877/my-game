class Player{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':5.0,
            'density':1.0,
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.Body.setMass(this.body, this.body.mass*2)
        //this.animation = playerAnimation
        this.image = loadImage('playerRight.png')
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        stroke(51,51,51)
        strokeWeight(5)
        fill(235,235,235)
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);

    }
      moveRight(){
         var push = Matter.Vector.create(+7,0)
         Matter.Body.translate(this.body,push)
         if(backColor===1)
         {
         this.image = playerWhiteRight
         }
         else{
          this.image = playerRightImg
         }
         playerMode = "right"
      }
      moveLeft(){
        var push = Matter.Vector.create(-7,0)
        Matter.Body.translate(this.body,push)
        if(backColor===1)
        {
        this.image = playerWhiteLeft
        }
        else{
         this.image = playerLeftImg
        }
        playerMode = "left"
     }
     moveUp(){
      if(this.body.speed<1)
      {
         var push = Matter.Vector.create(0,-472)
         var pos =  Matter.Vector.create(this.body.position.x,this.body.position.y)
          Matter.Body.applyForce(this.body,pos,push)
         }
      
     }
}