class Levels
{
    constructor(){
        if(gameState>=1)
        {this.l1button = createImg('level1.png')}
        if(gameState>=2)
        {this.l2button = createImg('level2.png')}
        if(gameState>=3)
        {this.l3button = createImg('level3.png')}
        if(gameState>=4)
        {this.l4button = createImg('level4.png')}
        if(gameState>=5)
        {this.l5button = createImg('level5.png')}
        if(gameState>=6)
        {this.l6button = createImg('level6.png')}
        if(gameState>=7)
        {this.l7button = createImg('level7.png')}
        if(gameState>=8)
        {this.l8button = createImg('level8.png')}
        if(gameState>=9)
        {this.l9button = createImg('level9.png')}
        if(gameState>=10)
        {this.l10button = createImg('level10.png')}
        if(gameState>=11)
        {this.l11button = createImg('level11.png')}
        if(gameState>=12)
        {this.l12button = createImg('level12.png')}
        if(gameState>=13)
        {this.l13button = createImg('level13.png')}
        if(gameState>=14)
        {this.l14button = createImg('level14.png')}
        if(gameState>=15)
        {this.l15button = createImg('level15.png')}
    }
    l1(){
       this.l1button.position(200,200)
       this.l1button.mousePressed(()=>
       {
            this.hide()
            joystick1 = new VirtualJoystick({
                mouseSupport	: true,
                limitStickTravel: true,
                strokeStyle	: 'grey',
                baseX: 200,
                baseY: 200,
                stickRadius	: 50
            })
            upButton1 = createImg('jumpButton.png')
            switchButton1 = createImg('switchButton.png')
            switchButton1.position(displayWidth-350,displayHeight-100)
            upButton1.position(displayWidth-200,displayHeight-100)
            playerLevel1 = new Player(displayWidth/2-600,displayHeight/2-90,80,80)
            whiteGroundLevel1 = new WhiteGround(displayWidth/2+400,displayHeight/2+30,displayWidth/2+60,20)
            blackGroundLevel1 = new BlackGround(displayWidth/2-320,displayHeight/2+30,displayWidth/2,20)
            starLevel1 = new Star(displayWidth/2+620,displayHeight/2-50,20,20)
            level = 1
            gameState1 = "play"
       })
    }
    l2(){
       this.l2button.position(400,200)
       this.l2button.mousePressed(()=>
       {
            this.hide()
            joystick2 = new VirtualJoystick({
                mouseSupport	: true,
                limitStickTravel: true,
                strokeStyle	: 'grey',
                stickRadius	: 50
            })
            upButton2 = createImg('jumpButton.png')
            switchButton2 = createImg('switchButton.png')
            switchButton2.position(displayWidth-350,displayHeight-100)
            upButton2.position(displayWidth-200,displayHeight-100)
            whiteGroundLevel2 = new WhiteGround(displayWidth/2-200,displayHeight/2+100,displayWidth/2+60,20)
            blackGround1Level2 = new BlackGround(displayWidth/2-220,displayHeight/2-100,displayWidth/2,20)
            blackGround2Level2 = new BlackGround(displayWidth/2-200,displayHeight/2+300,displayWidth/2+60,20)
            playerLevel2 = new Player(displayWidth/2,displayHeight/2 - 120,80,80)
            starLevel2 = new Star(displayWidth/2-50,displayHeight/2+260,20,20)
            level = 2
            gameState1 = "play"
       })
    }
    l3(){
       this.l3button.position(600,200)
       this.l3button.mousePressed(()=>
       {
        this.hide()
        joystick3 = new VirtualJoystick({
            mouseSupport	: true,
            limitStickTravel: true,
            strokeStyle	: 'grey',
            stickRadius	: 50
        })
        upButton3 = createImg('jumpButton.png')
        switchButton3 = createImg('switchButton.png')
        switchButton3.position(displayWidth-350,displayHeight-100)
        upButton3.position(displayWidth-200,displayHeight-100)
        whiteGround1Level3 = new WhiteGround(displayWidth/2-500,displayHeight/2+300,300,300)
        whiteGround2Level3 = new WhiteGround(displayWidth/2+500,displayHeight/2+300,300,300)
        blackGroundLevel3 = new BlackGround(displayWidth/2,displayHeight/2+300,300,300)
        playerLevel3 = new Player(displayWidth/2-500,0 + 20,80,80)
        starLevel3 = new Star(displayWidth/2+530,displayHeight/2+100,20,20)
        level = 3
        gameState1 = "play"
       }) 
    }
    l4(){
        this.l4button.position(800,200)
        this.l4button.mousePressed(()=>
        {
            this.hide()
            joystick4 = new VirtualJoystick({
                mouseSupport	: true,
                limitStickTravel: true,
                strokeStyle	: 'grey',
                stickRadius	: 50
            })
            upButton4 = createImg('jumpButton.png')
            upButton4.position(displayWidth-200,displayHeight-100)
            switchButton4 = createImg('switchButton.png')
            switchButton4.position(displayWidth-350,displayHeight-100)
            blackGround1Level4 = new BlackGround(displayWidth/2 + 3,displayHeight/2,displayWidth-600,20)
            blackGround2Level4 = new BlackGround(displayWidth/2+203,displayHeight/2-300,displayWidth-200,20)
            blackGround3Level4 = new BlackGround(displayWidth/2-370,displayHeight/2-150,20,300)
            blackGround4Level4 = new BlackGround(displayWidth/2+376,displayHeight/2+150,20,300)
            blackGround5Level4 = new BlackGround(displayWidth/2,displayHeight-50,displayWidth+ 100,100)
            whiteGround1Level4 = new WhiteGround(displayWidth/2-483,displayHeight/2-135,200,20)
            whiteGround2Level4 = new WhiteGround(displayWidth/2+486,displayHeight/2+155,200,20)
            playerLevel4 = new Player(80,displayWidth/2-20,80,80)
            starLevel4 = new Star(displayWidth/2+500,displayHeight/2-340,20,20)
            level = 4  
            gameState1 = "play"
        })
    }
    l5(){
        this.l5button.position(1000,200)
        this.l5button.mousePressed(()=>
        {
            this.hide()
            joystick5 = new VirtualJoystick({
                mouseSupport	: true,
                limitStickTravel: true,
                strokeStyle	: 'grey',
                stickRadius	: 50
            })
            upButton5 = createImg('jumpButton.png')
            upButton5.position(displayWidth-200,displayHeight-100)
            switchButton5 = createImg('switchButton.png')
            switchButton5.position(displayWidth-350,displayHeight-100)
            blackGround1Level5 = new BlackGround(displayWidth/2,100,displayWidth-400,100)
            blackGround2Level5 = new BlackGround(displayWidth/2,displayHeight,displayWidth-400,200) 
            blackGround3Level5 = new BlackGround(280,250,160,200)
            blackGround4Level5 = new BlackGround(390,displayHeight-150,380,200)
            blackGround5Level5 = new BlackGround(540,displayHeight-420,80,420)
            blackGround6Level5 = new BlackGround(880,350,200,400)
            blackGround7Level5 = new BlackGround(1230,550,900,60)
            playerLevel5 = new Player(250,displayHeight-250,80,80)
            starLevel5 = new Star(1230,480,20,20)  
            level = 5
            gameState1 = "play"
        })
    }
    l6(){
        this.l6button.position(200,400)
        this.l6button.mousePressed(()=>{
          this.hide()
          joystick6 = new VirtualJoystick({
            mouseSupport	: true,
            limitStickTravel: true,
            strokeStyle	: 'grey',
            stickRadius	: 50
        })
        upButton6 = createImg('jumpButton.png')
        upButton6.position(displayWidth-200,displayHeight-100)
        switchButton6 = createImg('switchButton.png')
        switchButton6.position(displayWidth-350,displayHeight-100)
          blackGround1Level6 = new BlackGround(displayWidth/2-400,displayHeight,300,150)
          blackGround2Level6 = new BlackGround(displayWidth-100,displayHeight/2+180,300,600)
          whiteGround1Level6 = new WhiteGround(displayWidth/2-50,displayHeight-50,80,300)
          whiteGround2Level6 = new WhiteGround(displayWidth/2+250,displayHeight-50,80,600)
          playerLevel6 = new Player(displayWidth/2-400,displayHeight-100,80,80)
          starLevel6 = new Star(displayWidth-100,displayHeight/2-200,20,20)  
          level = 6
          gameState1 = "play"
        })
    }
    l7(){
        this.l7button.position(400,400)
        this.l7button.mousePressed(()=>
        {
           this.hide()
           joystick7 = new VirtualJoystick({
            mouseSupport	: true,
            limitStickTravel: true,
            strokeStyle	: 'grey',
            stickRadius	: 50
        })
        upButton7 = createImg('jumpButton.png')
        upButton7.position(displayWidth-200,displayHeight-100)
        switchButton7 = createImg('switchButton.png')
        switchButton7.position(displayWidth-350,displayHeight-100)
           blackGround1Level7 = new BlackGround(displayWidth/2-140,displayHeight/2-50,150,500)
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
           playerLevel7 = new Player(displayWidth/2-300,displayHeight/2-125,80,80)
           starLevel7 = new Star(displayWidth/2-140,displayHeight/2-325,20,20)
           level = 7
           gameState1 = "play"
        })
    }
    l8(){
        this.l8button.position(600,400)
        this.l8button.mousePressed(()=>
        {
            this.hide()
            joystick8 = new VirtualJoystick({
                mouseSupport	: true,
                limitStickTravel: true,
                strokeStyle	: 'grey',
                stickRadius	: 50
            })
            upButton8 = createImg('jumpButton.png')
            upButton8.position(displayWidth-200,displayHeight-100)
            switchButton8 = createImg('switchButton.png')
            switchButton8.position(displayWidth-350,displayHeight-100)
            blackGround1Level8 = new BlackGround(displayWidth/2-400,displayHeight-100,70,10)
            blackGround2Level8 = new BlackGround(displayWidth/2-400,displayHeight-400,70,10)
            blackGround3Level8 = new BlackGround(displayWidth/2+500,displayHeight-100,400,70)
            whiteGround1Level8 = new WhiteGround(displayWidth/2-400,displayHeight-250,70,10)
            whiteGround2Level8 = new WhiteGround(displayWidth/2-380,displayHeight-550,120,10)
            playerLevel8 = new Player(displayWidth/2-400,displayHeight-110,80,80)
            starLevel8 = new Star(displayWidth/2+580,displayHeight-200,20,20)
            level= 8
            gameState1 = "play"
        })
    }
    l9(){
        this.l9button.position(800,400)
        this.l9button.mousePressed(()=>
        {
            this.hide()
            joystick9 = new VirtualJoystick({
                mouseSupport	: true,
                limitStickTravel: true,
                strokeStyle	: 'grey',
                stickRadius	: 50
            })
            upButton9 = createImg('jumpButton.png')
            upButton9.position(displayWidth-200,displayHeight-100)
            switchButton9 = createImg('switchButton.png')
            switchButton9.position(displayWidth-350,displayHeight-100)
            blackGround1Level9 = new BlackGround(displayWidth/2,displayHeight/2+300,displayWidth,displayHeight/2)
            blackGround2Level9 = new BlackGround(displayWidth/2,200,400,600)
            playerLevel9 = new Player(40,displayHeight/2,80,80)
            starLevel9 = new Star(displayWidth/2+550,displayHeight/2-100,20,20)
            level = 9
            gameState1 = "play"
        })
    }
    l10(){
        this.l10button.position(1000,400)
        this.l10button.mousePressed(()=>
        {
            this.hide()
            joystick10 = new VirtualJoystick({
                mouseSupport	: true,
                limitStickTravel: true,
                strokeStyle	: 'grey',
                stickRadius	: 50
            })
            upButton10 = createImg('jumpButton.png')
            upButton10.position(displayWidth-200,displayHeight-100)
            switchButton10 = createImg('switchButton.png')
            switchButton10.position(displayWidth-350,displayHeight-100)
            blackGround1Level10 = new BlackGround(displayWidth/2-400,displayHeight/2,80,200)
            blackGround2Level10 = new BlackGround(displayWidth/2+200,displayHeight/2-200,80,80)
            blackGround3Level10 = new BlackGround(displayWidth/2+400,displayHeight/2-100,80,100)
            whiteGround1Level10 = new WhiteGround(displayWidth/2-200,displayHeight/2-100,80,100)
            whiteGround2Level10 = new WhiteGround(displayWidth/2,displayHeight/2-200,80,80)
            whiteGround3Level10 = new WhiteGround(displayWidth-100,displayHeight/2,80,200)
            playerLevel10 = new Player(displayWidth/2-400,displayHeight/2-100,80,80)
            starLevel10 = new Star(displayWidth-100,displayHeight/2-130,20,20)
            level = 10
            gameState1 = "play"
        })
    }
    l11(){
        this.l11button.position(200,600)
        this.l11button.mousePressed(()=>
        {
            this.hide()
            joystick11 = new VirtualJoystick({
                mouseSupport	: true,
                limitStickTravel: true,
                strokeStyle	: 'grey',
                stickRadius	: 50
            })
            upButton11 = createImg('jumpButton.png')
            upButton11.position(displayWidth-200,displayHeight-100)
            switchButton11 = createImg('switchButton.png')
            switchButton11.position(displayWidth-350,displayHeight-100)
            blackGround1Level11 = new BlackGround(displayWidth/2-600,displayHeight-100,70,70)
            blackGround2Level11 = new BlackGround(displayWidth/2-600,displayHeight-400,70,70)
            blackGround3Level11 = new BlackGround(displayWidth/2-100,displayHeight-550,70,70)
            blackGround4Level11 = new BlackGround(displayWidth/2+400,displayHeight-550,70,70)
            blackGround5Level11 = new BlackGround(displayWidth/2+600,displayHeight-400,70,70)
            blackGround6Level11 = new BlackGround(displayWidth/2+600,displayHeight-100,70,70)
            whiteGround1Level11 = new WhiteGround(displayWidth/2-350,displayHeight-250,70,70)
            whiteGround2Level11 = new WhiteGround(displayWidth/2-350,displayHeight-550,70,70)
            whiteGround3Level11 = new WhiteGround(displayWidth/2+150,displayHeight-550,70,70)
            whiteGround4Level11 = new WhiteGround(displayWidth/2+350,displayHeight-250,70,70)
            playerLevel11 = new Player(displayWidth/2-600,displayHeight-140,80,80)
            starLevel11 = new Star(displayWidth/2+600,displayHeight-175,20,20)
            level = 11
            gameState1 = "play"
        })
    }
    l12(){
        this.l12button.position(400,600)
        this.l12button.mousePressed(()=>{
            this.hide()
            joystick12 = new VirtualJoystick({
                mouseSupport	: true,
                limitStickTravel: true,
                strokeStyle	: 'grey',
                stickRadius	: 50
            })
            upButton12 = createImg('jumpButton.png')
            upButton12.position(displayWidth-200,displayHeight-100)
            switchButton12 = createImg('switchButton.png')
            switchButton12.position(displayWidth-350,displayHeight-100)
            blackGround1Level12 = new BlackGround(displayWidth/2,displayHeight/2-300,260,20)
            blackGround2Level12 = new BlackGround(displayWidth/2,displayHeight/2+85,450,250)
            blackGround3Level12 = new BlackGround(displayWidth/2,displayHeight,300,20)
            whiteGround1Level12 = new WhiteGround(displayWidth/2,displayHeight/2-165,450,250)
            whiteGround2Level12 = new WhiteGround(displayWidth/2,displayHeight/2+135,215,150)
            playerLevel12 = new Player(displayWidth/2,displayHeight/2-350,80,80)
            starLevel12 = new Star(displayWidth/2,displayHeight-50,20,20)
            level = 12
            gameState1 = "play"
        })
    }
    l13(){
        this.l13button.position(600,600)
        this.l13button.mousePressed(()=>{
        this.hide()
        joystick13 = new VirtualJoystick({
            mouseSupport	: true,
            limitStickTravel: true,
            strokeStyle	: 'grey',
            stickRadius	: 50
        })
        upButton13 = createImg('jumpButton.png')
        upButton13.position(displayWidth-200,displayHeight-100)
        switchButton13 = createImg('switchButton.png')
        switchButton13.position(displayWidth-350,displayHeight-100)
        blackGround1Level13 = new BlackGround(displayWidth/2-400,displayHeight/2+50,100,140)
        blackGround2Level13 = new BlackGround(displayWidth/2-100,displayHeight/2+120,40,250)
        blackGround3Level13 = new BlackGround(displayWidth/2+50,displayHeight/2+80,60,250)
        blackGround4Level13 = new BlackGround(displayWidth/2+500,displayHeight/2+20,100,60)
        whiteGround1Level13 = new WhiteGround(displayWidth/2-250,displayHeight/2+50,60,250) 
        whiteGround2Level13 = new WhiteGround(displayWidth/2+200,displayHeight/2-20,60,120)
        whiteGround3Level13 = new WhiteGround(displayWidth/2+350,displayHeight/2+40,60,120)
        whiteGround4Level13 = new WhiteGround(displayWidth/2+650,displayHeight/2-40,60,120)
        playerLevel13 = new Player(displayWidth/2-400,displayHeight/2,80,80)
        starLevel13 = new Star(displayWidth/2+650,displayHeight/2-120,20,20)
        level = 13
        gameState1 = "play"
        })
    }
    l14(){
        this.l14button.position(800,600)
        this.l14button.mousePressed(()=>{
        this.hide()
        joystick14 = new VirtualJoystick({
            mouseSupport	: true,
            limitStickTravel: true,
            strokeStyle	: 'grey',
            stickRadius	: 50
        })
        upButton14 = createImg('jumpButton.png')
        upButton14.position(displayWidth-200,displayHeight-100)
        switchButton14 = createImg('switchButton.png')
        switchButton14.position(displayWidth-350,displayHeight-100)
        blackGround1Level14 = new BlackGround(displayWidth/2-400,displayHeight/2+200,200,100)
        blackGround2Level14 = new BlackGround(displayWidth/2-325,displayHeight/2+50,50,200)
        blackGround3Level14 = new BlackGround(displayWidth/2-225,displayHeight/2-100,250,100)
        blackGround4Level14 = new BlackGround(displayWidth/2-125,displayHeight/2+50,50,200)
        blackGround5Level14 = new BlackGround(displayWidth/2,displayHeight/2+200,300,100)
        blackGround6Level14 = new BlackGround(displayWidth/2+125,displayHeight/2+50,50,200)
        blackGround7Level14 = new BlackGround(displayWidth/2+225,displayHeight/2-100,250,100)
        blackGround8Level14 = new BlackGround(displayWidth/2+325,displayHeight/2+50,50,200)
        blackGround9Level14 = new BlackGround(displayWidth/2+600,displayHeight/2+200,600,100)
        whiteGround1Level14 = new WhiteGround(displayWidth/2-280,displayHeight/2+200,40,100)
        whiteGround2Level14 = new WhiteGround(displayWidth/2-170,displayHeight/2+200,40,100)
        whiteGround3Level14 = new WhiteGround(displayWidth/2+280,displayHeight/2+200,40,100)
        whiteGround4Level14 = new WhiteGround(displayWidth/2+170,displayHeight/2+200,40,100)
        playerLevel14 = new Player(displayWidth/2-425,displayHeight/2+150,80,80)
        starLevel14 = new Star(displayWidth/2+600,displayHeight/2+100,20,20)
        level = 14
        gameState1 = "play"
        })
    }
    l15(){
        this.l15button.position(1000,600)
        this.l15button.mousePressed(()=>
        {
        this.hide()
        joystick15 = new VirtualJoystick({
            mouseSupport	: true,
            limitStickTravel: true,
            strokeStyle	: 'grey',
            stickRadius	: 50
        })
        upButton15 = createImg('jumpButton.png')
        upButton15.position(displayWidth-200,displayHeight-100)
        switchButton15 = createImg('switchButton.png')
        switchButton15.position(displayWidth-350,displayHeight-100)
            blackGround1Level15 = new BlackGround(displayWidth/2-400,displayHeight/2+200,200,10)
            blackGround2Level15 = new BlackGround(displayWidth/2-500,displayHeight/2+100,10,200)
            blackGround3Level15 = new BlackGround(displayWidth/2-400,displayHeight/2,200,10)
            blackGround4Level15 = new BlackGround(displayWidth/2-300,displayHeight/2+100,10,200)
            blackGround5Level15 = new BlackGround(displayWidth/2,displayHeight/2+200,200,10)
            blackGround6Level15 = new BlackGround(displayWidth/2-100,displayHeight/2+100,10,200)
            blackGround7Level15 = new BlackGround(displayWidth/2,displayHeight/2,200,10)
            blackGround8Level15 = new BlackGround(displayWidth/2+100,displayHeight/2+100,10,200)
            blackGround9Level15 = new BlackGround(displayWidth/2+400,displayHeight/2+200,200,10)
            blackGround10Level15 = new BlackGround(displayWidth/2+500,displayHeight/2+100,10,200)
            blackGround11Level15 = new BlackGround(displayWidth/2+400,displayHeight/2,200,10)
            blackGround12Level15 = new BlackGround(displayWidth/2+300,displayHeight/2+100,10,200)
            playerLevel15 = new Player(displayWidth/2-400,displayHeight/2+150,80,80)
            starLevel15 = new Star(displayWidth/2+400,displayHeight/2+150,20,20)
            level = 15
            gameState1 = "play"
        })
    }
    hide()
    {
        backToMenu.hide()
        if(gameState>=1)
        {this.l1button.hide()}
        if(gameState>=2)
        {this.l2button.hide()}
        if(gameState>=3)
        {this.l3button.hide()}
        if(gameState>=4)
        {this.l4button.hide()}
        if(gameState>=5)
        {this.l5button.hide()}
        if(gameState>=6)
        {this.l6button.hide()}
        if(gameState>=7)
        {this.l7button.hide()}
        if(gameState>=8)
        {this.l8button.hide()}
        if(gameState>=9)
        {this.l9button.hide()}
        if(gameState>=10)
        {this.l10button.hide()}
        if(gameState>=11)
        {this.l11button.hide()}
        if(gameState>=12)
        {this.l12button.hide()}
        if(gameState>=13)
        {this.l13button.hide()}
        if(gameState>=14)
        {this.l14button.hide()}
        if(gameState>=15)
        {this.l15button.hide()}
    }

}