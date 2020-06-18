class Levels
{
    constructor(){
        this.l1button = createImg('Image/level1.png')
        this.l2button = createImg('Image/level2.png')
        this.l3button = createImg('Image/level3.png')
        this.l4button = createImg('Image/level4.png')
        this.l5button = createImg('Image/level5.png')
        this.l6button = createImg('Image/level6.png')
        this.l7button = createImg('Image/level7.png')
        this.l8button = createImg('Image/level8.png')
        this.l9button = createImg('Image/level9.png')
        this.l10button = createImg('Image/level10.png')
    }
    l1(){
       this.l1button.position(200,200)
       this.l1button.mousePressed(()=>
       {
            this.hide()
            playerLevel1 = new Player(displayWidth/2-600,displayHeight/2-90,60,100)
            whiteGroundLevel1 = new WhiteGround(displayWidth/2+400,displayHeight/2+30,displayWidth/2+60,20)
            blackGroundLevel1 = new BlackGround(displayWidth/2-320,displayHeight/2+30,displayWidth/2,20)
            // starLevel1 = new Star(displayWidth/2+620,displayHeight/2-50)
            level = 1
       })
    }
    l2(){
       this.l2button.position(400,200)
       this.l2button.mousePressed(()=>
       {
            this.hide()
            whiteGroundLevel2 = new WhiteGround(displayWidth/2-200,displayHeight/2+100,displayWidth/2+60,20)
            blackGround1Level2 = new BlackGround(displayWidth/2-220,displayHeight/2-100,displayWidth/2,20)
            blackGround2Level2 = new BlackGround(displayWidth/2,displayHeight/2+300,displayWidth,20)
            playerLevel2 = new Player(displayWidth/2,displayHeight/2 - 120,60,100)
            level = 2
       })
    }
    l3(){
       this.l3button.position(600,200)
       this.l3button.mousePressed(()=>
       {
        this.hide()
        whiteGround1Level3 = new WhiteGround(displayWidth/2-500,displayHeight/2+300,300,300)
        whiteGround2Level3 = new WhiteGround(displayWidth/2+500,displayHeight/2+300,300,300)
        blackGroundLevel3 = new BlackGround(displayWidth/2,displayHeight/2+300,300,300)
        playerLevel3 = new Player(displayWidth/2-500,0 + 20,60,100)
        level = 3
       }) 
    }
    l4(){
        this.l4button.position(800,200)
        this.l4button.mousePressed(()=>
        {
            this.hide()
            blackGround1Level4 = new BlackGround(displayWidth/2 + 3,displayHeight/2,displayWidth-600,20)
            blackGround2Level4 = new BlackGround(displayWidth/2+203,displayHeight/2-300,displayWidth-200,20)
            blackGround3Level4 = new BlackGround(displayWidth/2-370,displayHeight/2-150,20,300)
            blackGround4Level4 = new BlackGround(displayWidth/2+376,displayHeight/2+150,20,300)
            blackGround5Level4 = new BlackGround(displayWidth/2,displayHeight-50,displayWidth+ 100,100)
            whiteGround1Level4 = new WhiteGround(displayWidth/2-483,displayHeight/2-155,200,20)
            whiteGround2Level4 = new WhiteGround(displayWidth/2+486,displayHeight/2+155,200,20)
            playerLevel4 = new Player(80,displayWidth/2-20,60,100)
            level = 4  
        })
    }
    l5(){
        this.l5button.position(1000,200)
        this.l5button.mousePressed(()=>
        {
            this.hide()
            blackGround1Level5 = new BlackGround(displayWidth/2,100,displayWidth-400,100)
            blackGround2Level5 = new BlackGround(displayWidth/2,displayHeight,displayWidth-400,200) 
            blackGround3Level5 = new BlackGround(280,250,160,200)
            blackGround4Level5 = new BlackGround(390,displayHeight-150,380,200)
            blackGround5Level5 = new BlackGround(540,displayHeight-420,80,420)
            blackGround6Level5 = new BlackGround(880,350,200,400)
            blackGround7Level5 = new BlackGround(1230,550,900,60)
            playerLevel5 = new Player(250,displayHeight-250,60,100)  
            level = 5
        })
    }
    l6(){
        this.l6button.position(200,400)
        this.l6button.mousePressed(()=>{
          this.hide()
          blackGround1Level6 = new BlackGround(displayWidth/2-400,displayHeight,300,150)
          blackGround2Level6 = new BlackGround(displayWidth-100,displayHeight/2+180,300,600)
          whiteGround1Level6 = new WhiteGround(displayWidth/2-50,displayHeight-50,80,300)
          whiteGround2Level6 = new WhiteGround(displayWidth/2+250,displayHeight-50,80,600)
          playerLevel6 = new Player(displayWidth/2-400,displayHeight-100,60,100)
          level = 6
        })
    }
    l7(){
        this.l7button.position(400,400)
        this.l7button.mousePressed(()=>
        {
           this.hide()
           blackGround1Level7 = new BlackGround(displayWidth/2-140,displayHeight/2,150,400)
           blackGround2Level7 = new BlackGround(displayWidth/2+10,displayHeight/2+37.5,150,325)
           blackGround3Level7 = new BlackGround(displayWidth/2+160,displayHeight/2+87.5,150,225) 
           blackGround4Level7 = new BlackGround(displayWidth/2+310,displayHeight/2+137.5,150,125)
           blackGround5Level7 = new BlackGround(displayWidth/2-230,displayHeight/2-125,10,150)
           blackGround6Level7 = new BlackGround(displayWidth/2-300,displayHeight/2-65,150,10)
           whiteGround1Level7 = new WhiteGround(displayWidth/2+310,displayHeight/2+67.5,150,10)
           whiteGround2Level7 = new WhiteGround(displayWidth/2+240,displayHeight/2+24.5,10,100)
           whiteGround3Level7 = new WhiteGround(displayWidth/2+85,displayHeight/2+192.5,600,15)
           whiteGround4Level7 = new WhiteGround(displayWidth/2-220,displayHeight/2-125,10,150)
           whiteGround5Level7 = new WhiteGround(displayWidth/2-300,displayHeight/2-55,150,10)
           playerLevel7 = new Player(displayWidth/2-300,displayHeight/2-125,60,100)
           level = 7
        })
    }
    l8(){
        this.l8button.position(600,400)
        this.l8button.mousePressed(()=>
        {
            this.hide()
            blackGround1Level8 = new BlackGround(displayWidth/2-400,displayHeight-100,70,10)
            blackGround2Level8 = new BlackGround(displayWidth/2-400,displayHeight-400,70,10)
            blackGround3Level8 = new BlackGround(displayWidth/2+500,displayHeight-100,400,70)
            whiteGround1Level8 = new WhiteGround(displayWidth/2-400,displayHeight-250,70,10)
            whiteGround2Level8 = new WhiteGround(displayWidth/2-380,displayHeight-550,120,10)
            playerLevel8 = new Player(displayWidth/2-400,displayHeight-110,60,100)
            level= 8
        })
    }
    l9(){
        this.l9button.position(800,400)
        this.l9button.mousePressed(()=>
        {
            this.hide()
            blackGround1Level9 = new BlackGround(displayWidth/2,displayHeight/2+300,displayWidth,displayHeight/2)
            blackGround2Level9 = new BlackGround(displayWidth/2,200,400,600)
            playerLevel9 = new Player(40,displayHeight/2,60,100)
            level = 9
        })
    }
    l10(){
        this.l10button.position(1000,400)
        this.l10button.mousePressed(()=>
        {
            this.hide()
            blackGround1Level10 = new BlackGround(displayWidth/2-400,displayHeight/2,80,200)
            blackGround2Level10 = new BlackGround(displayWidth/2+200,displayHeight/2-200,80,80)
            blackGround3Level10 = new BlackGround(displayWidth/2+400,displayHeight/2-100,80,100)
            blackGround4Level10 = new BlackGround()
            blackGround5Level10 = new BlackGround()
            whiteGround1Level10 = new WhiteGround(displayWidth/2-200,displayHeight/2-100,80,100)
            whiteGround2Level10 = new WhiteGround(displayWidth/2,displayHeight/2-200,80,80)
            whiteGround3Level10 = new WhiteGround(displayWidth-100,displayHeight/2,80,200)
            whiteGround4Level10 = new WhiteGround()
            whiteGround5Level10 = new WhiteGround()
            playerLevel10 = new Player(displayWidth/2-400,displayHeight/2-100,60,100)
            level = 10
        })
    }
    hide()
    {
        backToMenu.hide()
        this.l6button.hide()
        this.l2button.hide()
        this.l1button.hide()
        this.l3button.hide()
        this.l4button.hide()
        this.l5button.hide()
        this.l7button.hide()
        this.l8button.hide()
        this.l9button.hide()
        this.l10button.hide()
    }

}