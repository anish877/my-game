class Menu{
    constructor(){
        this.playButton = createImg('image/play.png')
    }
    display()
    {   background(235,235,235)
        this.playButton.position(displayWidth/2-100,displayHeight/2)
        this.playButton.mousePressed(()=>
        {
            this.playButton.hide()
            levels = new Levels()
            gameState = 1
        })
    }
}