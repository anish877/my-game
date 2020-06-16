class Menu{
    constructor(){
        this.playButton = createImg('image/play.png')
    }
    display()
    {
        this.playButton.position(displayWidth/2,displayHeight/2)
        this.playButton.mousePressed(()=>
        {
            this.playButton.hide()
            levels = new Levels()
            gameState = 1
        })
    }
}