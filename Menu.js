class Menu{
    constructor(){
        this.playButton = createImg('play.png')
        this.howTo = createImg('howTo.png')
    }
    display()
    {   background(backgroundImg)
        if(displayText===1)
        {
        strokeWeight(5)
        stroke("black")
        textSize(102)
        textFont(myFont)
        if(frameCount%50===0)
        {
            if(fontColor%2===0)
            {
                c1 = (235,235,235)
                c2 = (51,51,51)
            }
            else
            {
                c1= (51,51,51)
                c2 = (235,235,235)
            }
            fontColor += 1
        }
        fill(c1)
        text("SWI",displayWidth/2-265,100)
        fill(c2)
        text("TCH",displayWidth/2-25,100)}
        this.playButton.position(displayWidth/2-100,displayHeight/2-200)
        this.playButton.mousePressed(()=>
        {
            backToMenu = createImg('backButton.png')
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
        this.howTo.position(displayWidth/2-100,displayHeight/2+100)
        //  form = loadImage('form.png')
        this.howTo.mousePressed(()=>
        {   displayText = 0
            var backButton = createImg('backButton.png')
            var formButton = createImg('form.png')
            var form2Button = createImg('form2.png')
            form2Button.position(displayWidth/2+250,displayHeight/2-150)
            formButton.position(displayWidth/2-600,displayHeight/2-350)
            // console.log(form)
            backButton.position(30,30)
            // image(form,100,100)
            backButton.mousePressed(()=>
            {
                formButton.hide()
                form2Button.hide()
                backButton.hide()
                menu = new Menu()
                displayText = 1
            })
            this.howTo.hide()
            this.playButton.hide()
        })
    }
}