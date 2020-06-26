class Menu{
    constructor(){
        this.playButton = createImg('image/play.png')
        this.howTo = createImg('image/howTo.png')
    }
    display()
    {   background(backgroundImg)
        this.playButton.position(displayWidth/2-100,displayHeight/2-250)
        this.playButton.mousePressed(()=>
        {
            backToMenu = createImg('Image/backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                this.playButton.hide()
                this.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            this.playButton.hide()
            this.howTo.hide()
            gameState = 1
            levels = new Levels()
        })
        this.howTo.position(displayWidth/2-100,displayHeight/2+150)
        this.howTo.mousePressed(()=>
        {
            var backButton = createImg('Image/backButton.png')
            backButton.position(30,30)
            backButton.mousePressed(()=>
            {
                howToPlay.hide()
                backButton.hide()
                menu = new Menu()
            })
            var howToPlay = createElement('h3')
            stroke("yellow")
            strokeWeight(5)
            howToPlay.html('HOW TO PLAY')
            howToPlay.position(displayWidth/2,displayHeight/2)
            fill("black")
            textSize('32')
            text('HOW TO PLAY',200,200)
            text('gfrgrg',displayWidth/2,displayHeight/2);
            this.howTo.hide()
            this.playButton.hide()
        })
    }
}