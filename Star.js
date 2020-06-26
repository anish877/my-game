class Star{

    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //Matter.Body.setMass(this.body, this.body.mass*4)
        this.animation = starAnimation
        //this.image = loadImage('Image/playerRight.png')
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        stroke(51,51,51)
        strokeWeight(5)
        fill(235,235,235)
        //rectMode(CENTER);
        animation(this.animation,this.body.position.x,this.body.position.y, this.width, this.height);

    }
 
}