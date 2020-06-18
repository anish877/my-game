class Star{

constructor(x,y){
    var options={
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = 20;
    this.height = 20
    World.add(world,this.body)
}


display(){
fill(235,235,235)
rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,20,20)
}
}