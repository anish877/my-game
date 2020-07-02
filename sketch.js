const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var back
var backColor = 0
var level = 0
var c
var c1
var c2
var c3
var displayText
var rightButton
var winImage
var starAnimation
var starAnimationWhite
var gameState1 = "level" 
var menu
var myFont
var form
var fontColor
var jumpSound
var backSound
var levelUpSound
var gameOverSound
var deathSound
var deathValue = 0
var switchButton1
var switchButton2
var switchButton3
var switchButton4
var switchButton5
var switchButton6
var switchButton7
var switchButton8
var switchButton9
var switchButton10
var switchButton11
var switchButton12
var switchButton13
var switchButton14
var switchButton15
var upButton1
var upButton2
var upButton3
var upButton4
var upButton5
var upButton6
var upButton7
var upButton8
var upButton9
var upButton10
var upButton11
var upButton12
var upButton13
var upButton14
var upButton15
var joystick1
var joystick2
var joystick3
var joystick4
var joystick5
var joystick6
var joystick7
var joystick8
var joystick9
var joystick10
var joystick11
var joystick12
var joystick13
var joystick14
var joystick15
var levels
var particles = []
var backToMenu
var animate = 0
var playerMode = "right"
var deathWhite
var deathBlack
var level2Img
var level3Img
var level4Img
var level5Img
var level6Img
var level7Img
var level8Img
var level9Img
var level10Img
var level11Img
var level12Img
var level13Img
var level14Img
var level15Img
var playerRightImg
var playerLeftImg
var playerWhiteRight
var playerWhiteLeft
var playerAnimation
var backButtonImg
var starAnimation
var playerLevel1
var playerLevel1Collided
var starLevel1
var whiteGroundLevel1
var blackGroundLevel1
var playerLevel2
var playerLevel2Collided
var whiteGroundLevel2
var blackGround1Level2
var blackGround2Level2
var starLevel2
var whiteGround1Level3
var whiteGround2Level3
var blackGroundLevel3
var playerLevel3
var playerLevel3Collided
var starLevel3
var blackGround1Level4
var blackGround2Level4
var blackGround3Level4
var blackGround4Level4
var blackGround5Level4
var whiteGround1Level4
var whiteGround2Level4
var playerLevel4
var playerLevel4Collided
var starLevel4
var blackGround1Level5
var blackGround2Level5
var blackGround3Level5
var blackGround4Level5
var blackGround5Level5
var blackGround6Level5
var blackGround7Level5
var blackGround8Level5
var blackGround9Level5
var playerLevel5
var playerLevel5Collided
var starLevel5
var blackGround2Level6
var blackGround1Level6
var whiteGround1Level6
var whiteGround2Level6
var playerLevel6
var playerLevel6Collided
var starLevel6
var blackGround1Level7
var blackGround2Level7
var blackGround3Level7
var blackGround4Level7
var blackGround5Level7
var blackGround6Level7
var whiteGround1Level7
var whiteGround2Level7
var whiteGround3Level7
var whiteGround4Level7
var whiteGround5Level7
var playerLevel7
var playerLevel7Collided
var starLevel7
var blackGround1Level8
var blackGround2Level8
var blackGround3Level8
var whiteGround1Level8
var whiteGround2Level8
var playerLevel8
var playerLevel8Collided
var starLevel8
var blackGround1Level9
var blackGround2Level9
var playerLevel9
var playerLevel9Collided
var starLevel9
var blackGround1Level10
var blackGround2Level10
var blackGround3Level10
var whiteGround1Level10
var whiteGround2Level10
var whiteGround3Level10
var playerLevel10
var playerLevel10Collided
var starLevel10
var blackGround1Level11
var blackGround2Level11
var blackGround3Level11
var blackGround4Level11
var blackGround5Level11
var blackGround6Level11
var whiteGround1Level11
var whiteGround2Level11
var whiteGround3Level11
var whiteGround4Level11
var whiteGround5Level11
var playerLevel11
var playerLevel11Collided
var starLevel11
var blackGround1Level12
var blackGround2Level12
var blackGround3Level12
var blackGround4Level12
var whiteGround1Level12
var whiteGround2Level12
var playerLevel12
var playerLevel12Collided
var starLevel12
var blackGround1Level13
var blackGround2Level13
var blackGround3Level13
var blackGround4Level13
var whiteGround1Level13
var whiteGround2Level13
var whiteGround3Level13
var whiteGround4Level13
var playerLevel13
var playerLevel13Collided
var starLevel13
var blackGround1Level14
var blackGround2Level14
var blackGround3Level14
var blackGround4Level14
var blackGround5Level14
var blackGround6Level14
var blackGround7Level14
var blackGround8Level14
var blackGround9Level14
var whiteGround1Level14
var whiteGround2Level14
var whiteGround3Level14
var whiteGround4Level14
var playerLevel14
var playerLevel14Collided
var starLevel14
var blackGround1Level15
var blackGround2Level15
var blackGround3Level15
var blackGround4Level15
var blackGround5Level15
var blackGround6Level15
var blackGround7Level15
var blackGround8Level15
var blackGround9Level15
var blackGround10Level15
var blackGround11Level15
var blackGround12Level15
var playerLevel15
var playerLevel15Collided
var starLevel15
var gameState=0
function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-30);
    engine = Engine.create();
    world = engine.world;
    menu = new Menu()
}
function preload()
{
    back = color(255,255,255)
    c = (51,51,51)
    c1= (51,51,51)
    c2 = (235,235,235)
    fontColor = 2
    displayText = 1
    backgroundImg = loadImage('background.png')
    playerAnimation = loadAnimation('player1.png','player2.png','player3.png')
    starAnimation = loadAnimation('star1.png','star2.png','star3.png','star4.png','star5.png')
    starAnimationWhite = loadAnimation('star1White.png','star2White.png','star3White.png','star4White.png','star5White.png')
    playerRightImg = loadImage('playerRight.png')
    playerLeftImg = loadImage('playerLeft.png')
    playerWhiteLeft = loadImage('playerWhiteLeft.png')
    playerWhiteRight = loadImage('playerWhiteRight.png')
    level2Img = loadImage('level2Locked.png')
    level3Img = loadImage('level3Locked.png')
    level4Img = loadImage('level4Locked.png')
    level5Img = loadImage('level5Locked.png')
    level6Img = loadImage('level6Locked.png')
    level7Img = loadImage('level7Locked.png')
    level8Img = loadImage('level8Locked.png')
    level9Img = loadImage('level9Locked.png')
    level10Img = loadImage('level10Locked.png')
    level11Img = loadImage('level11Locked.png')
    level12Img = loadImage('level12Locked.png')
    level13Img = loadImage('level13Locked.png')
    level14Img = loadImage('level14Locked.png')
    level15Img = loadImage('level15Locked.png')
    deathWhite = loadImage('deathWhite.png')
    deathBlack = loadImage('deathBlack.png')
    myFont = loadFont('joystix monospace.ttf')
    jumpSound = loadSound('jumpSound.mp3')
    backSound = loadSound('backSound.mp3')
    levelUpSound = loadSound('levelComplete.mp3')
    gameOverSound = loadSound('gameOver.mp3')
    deathSound = loadSound('death.mp3')
}

async function draw()
{
    background(back);
    Engine.update(engine);
    if(gameState===0)
    {
        menu.display()
    }
    if(gameState===1)
    {
    levels.l1()
    if(gameState1==="level")
    {
    image(level2Img,400,200)
    image(level3Img,600,200)
    image(level4Img,800,200)
    image(level5Img,1000,200)
    image(level6Img,200,400)
    image(level7Img,400,400)
    image(level8Img,600,400)
    image(level9Img,800,400)
    image(level10Img,1000,400)
    image(level11Img,200,600)
    image(level12Img,400,600)
    image(level13Img,600,600)
    image(level14Img,800,600)
    image(level15Img,1000,600)
    }}
    if(gameState===2)
    {
        levels.l1()
        levels.l2()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        image(level3Img,600,200)
        image(level4Img,800,200)
        image(level5Img,1000,200)
        image(level6Img,200,400)
        image(level7Img,400,400)
        image(level8Img,600,400)
        image(level9Img,800,400)
        image(level10Img,1000,400)
        image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===3)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        image(level4Img,800,200)
        image(level5Img,1000,200)
        image(level6Img,200,400)
        image(level7Img,400,400)
        image(level8Img,600,400)
        image(level9Img,800,400)
        image(level10Img,1000,400)
        image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===4)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        //image(level4Img,800,200)
        image(level5Img,1000,200)
        image(level6Img,200,400)
        image(level7Img,400,400)
        image(level8Img,600,400)
        image(level9Img,800,400)
        image(level10Img,1000,400)
        image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===5)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        image(level6Img,200,400)
        image(level7Img,400,400)
        image(level8Img,600,400)
        image(level9Img,800,400)
        image(level10Img,1000,400)
        image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===6)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        image(level7Img,400,400)
        image(level8Img,600,400)
        image(level9Img,800,400)
        image(level10Img,1000,400)
        image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===7)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        levels.l7()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        // image(level7Img,400,400)
        image(level8Img,600,400)
        image(level9Img,800,400)
        image(level10Img,1000,400)
        image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===8)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        levels.l7()
        levels.l8()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        // image(level7Img,400,400)
        // image(level8Img,600,400)
        image(level9Img,800,400)
        image(level10Img,1000,400)
        image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===9)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        levels.l7()
        levels.l8()
        levels.l9()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        // image(level7Img,400,400)
        // image(level8Img,600,400)
        // image(level9Img,800,400)
        image(level10Img,1000,400)
        image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===10)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        levels.l7()
        levels.l8()
        levels.l9()
        levels.l10()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        // image(level7Img,400,400)
        // image(level8Img,600,400)
        // image(level9Img,800,400)
        // image(level10Img,1000,400)
        image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===11)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        levels.l7()
        levels.l8()
        levels.l9()
        levels.l10()
        levels.l11()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        // image(level7Img,400,400)
        // image(level8Img,600,400)
        // image(level9Img,800,400)
        // image(level10Img,1000,400)
        // image(level11Img,200,600)
        image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===12)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        levels.l7()
        levels.l8()
        levels.l9()
        levels.l10()
        levels.l11()
        levels.l12()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        // image(level7Img,400,400)
        // image(level8Img,600,400)
        // image(level9Img,800,400)
        // image(level10Img,1000,400)
        // image(level11Img,200,600)
        // image(level12Img,400,600)
        image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===13)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        levels.l7()
        levels.l8()
        levels.l9()
        levels.l10()
        levels.l11()
        levels.l12()
        levels.l13()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        // image(level7Img,400,400)
        // image(level8Img,600,400)
        // image(level9Img,800,400)
        // image(level10Img,1000,400)
        // image(level11Img,200,600)
        // image(level12Img,400,600)
        // image(level13Img,600,600)
        image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===14)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        levels.l7()
        levels.l8()
        levels.l9()
        levels.l10()
        levels.l11()
        levels.l12()
        levels.l13()
        levels.l14()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        // image(level7Img,400,400)
        // image(level8Img,600,400)
        // image(level9Img,800,400)
        // image(level10Img,1000,400)
        // image(level11Img,200,600)
        // image(level12Img,400,600)
        // image(level13Img,600,600)
        // image(level14Img,800,600)
        image(level15Img,1000,600)
        }
    }
    if(gameState===15)
    {
        levels.l1()
        levels.l2()
        levels.l3()
        levels.l4()
        levels.l5()
        levels.l6()
        levels.l7()
        levels.l8()
        levels.l9()
        levels.l10()
        levels.l11()
        levels.l12()
        levels.l13()
        levels.l14()
        levels.l15()
        if(gameState1==="level")
        {
        //image(level2Img,400,200)
        // //image(level4Img,800,200)
        // image(level5Img,1000,200)
        // image(level6Img,200,400)
        // image(level7Img,400,400)
        // image(level8Img,600,400)
        // image(level9Img,800,400)
        // image(level10Img,1000,400)
        // image(level11Img,200,600)
        // image(level12Img,400,600)
        // image(level13Img,600,600)
        // image(level14Img,800,600)
        // image(level15Img,1000,600)
        }
    }
    if(gameState>0)
    {
        showDeathValue()
        
    }
    if(level===1)
    {

    if(backColor===0)
    {

        World.remove(world,whiteGroundLevel1.body)
    }
    if(keyIsDown(RIGHT_ARROW))
    {
        
        particles.push(new Particle(playerLevel1.body.position.x-30,random(playerLevel1.body.position.y+30,playerLevel1.body.position.y-30)))
        playerLevel1.moveRight()
    }
    else if(keyIsDown(LEFT_ARROW))
    {
        particles.push(new Particle(playerLevel1.body.position.x+30,random(playerLevel1.body.position.y+30,playerLevel1.body.position.y-30)))
        playerLevel1.moveLeft()
    }
    joyControl(joystick1,playerLevel1)
    upButton1.mousePressed(()=>{
        playerLevel1.moveUp()
        jumpSound.play()
    })
    switchButton1.mousePressed(async()=>{
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel1.image = playerWhiteRight
            }
            else{
             playerLevel1.image = playerWhiteLeft
            }
            await World.remove(world,blackGroundLevel1.body)
            await World.add(world,whiteGroundLevel1.body)
            backColor = 1
            
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel1.image = playerRightImg
            }
            else{
             playerLevel1.image = playerLeftImg
            }
            await World.remove(world,whiteGroundLevel1.body)
            await World.add(world,blackGroundLevel1.body)
            backColor = 0
        }
    })
    playerLevel1.display()
    whiteGroundLevel1.display()
    blackGroundLevel1.display()
    starLevel1.display()
    if(deathValue===10)
    {
        gameOverSound.play()
        textSize(72)
        textFont(myFont)
        text("GAME OVER",displayWidth/2-300,displayHeight/2)
        World.remove(world,whiteGroundLevel1.body)
        World.remove(world,blackGroundLevel1.body)
        World.remove(world,playerLevel1.body)
        World.remove(world,starLevel1.body)
        upButton1.hide()
        switchButton1.hide()
        backToMenu = createImg('backButton.png')
    backToMenu.position(30,30)
    backToMenu.mousePressed(()=>
    {
        backToMenu.hide()
        menu.playButton.hide()
        menu.howTo.hide()
        levels.hide()
        gameState=0
        menu = new Menu()
    })
        gameState=1
        gameState1 = 'level'
      levels = new Levels()
      back = color(255,255,255)
      c = (51,51,51)
      particles = []
      backColor = 0
      level = 0
      deathValue = 0
    }
    for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }
    playerLevel1Collided = Matter.SAT.collides(playerLevel1.body,starLevel1.body)
    if(playerLevel1Collided.collided)
    {
      levelUpSound.play()
      World.remove(world,whiteGroundLevel1.body)
      World.remove(world,blackGroundLevel1.body)
      World.remove(world,playerLevel1.body)
      World.remove(world,starLevel1.body)
      upButton1.hide()
      switchButton1.hide()
    backToMenu = createImg('backButton.png')
    backToMenu.position(30,30)
    backToMenu.mousePressed(()=>
    {
        backToMenu.hide()
        menu.playButton.hide()
        menu.howTo.hide()
        levels.hide()
        gameState=0
        menu = new Menu()
    })
    if(gameState<=1){
      gameState = 2}
      gameState1 = 'level'
      levels = new Levels()
      back = color(255,255,255)
      c = (51,51,51)
      particles = []
      backColor = 0
      level = 0
    }
    if(playerLevel1.body.position.y>displayHeight)
    {   deathSound.play()
        World.remove(world,playerLevel1)
        deathValue += 1
        playerLevel1 = new Player(displayWidth/2-600,displayHeight/2-90,80,80)
    }
    }
    if(level===2)
    {
    background(back)
    if(backColor===0)
    {

        World.remove(world,whiteGroundLevel2.body)
    }
    if(keyIsDown(RIGHT_ARROW))
    {      particles.push(new Particle(playerLevel2.body.position.x-30,random(playerLevel2.body.position.y+30,playerLevel2.body.position.y-30)))
        playerLevel2.moveRight()
    }
    if(keyIsDown(LEFT_ARROW))
    {
        particles.push(new Particle(playerLevel2.body.position.x+30,random(playerLevel2.body.position.y+30,playerLevel2.body.position.y-30)))
        playerLevel2.moveLeft()
    }
    joyControl(joystick2,playerLevel2)
    upButton2.mousePressed(()=>{
        playerLevel2.moveUp()
        jumpSound.play()
    })
    switchButton2.mousePressed(async()=>{
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel2.image = playerWhiteRight
            }
            else{
             playerLevel2.image = playerWhiteLeft
            }
            await World.remove(world,blackGround2Level2.body)
            await World.remove(world,blackGround1Level2.body)
            await World.add(world,whiteGroundLevel2.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel2.image = playerRightImg
            }
            else{
             playerLevel2.image = playerLeftImg
            }
            await World.remove(world,whiteGroundLevel2.body)
            await World.add(world,blackGround1Level2.body)
            await World.add(world,blackGround2Level2.body)
            backColor = 0
        } 
    })
    showDeathValue()
     whiteGroundLevel2.display()
     blackGround1Level2.display()
     blackGround2Level2.display()
     playerLevel2.display()
     starLevel2.display()
     if(deathValue===10)
     {
        gameOverSound.play()
        textSize(72)
        textFont(myFont)
        text("GAME OVER",displayWidth/2-300,displayHeight/2)
        World.remove(world,whiteGroundLevel2.body)
        World.remove(world,blackGround1Level2.body)
        World.remove(world,blackGround2Level2.body)
        World.remove(world,playerLevel2.body)
        World.remove(world,starLevel2.body)
        backToMenu = createImg('backButton.png')
        backToMenu.position(30,30)
        backToMenu.mousePressed(()=>
        {
            backToMenu.hide()
            menu.playButton.hide()
            menu.howTo.hide()
            levels.hide()
            gameState=0
            menu = new Menu()
        })
        upButton2.hide()
        switchButton2.hide()
        gameState=1
        gameState1 = 'level'
        levels = new Levels()
        back = color(255,255,255)
        c = (51,51,51)
        particles = []
        backColor = 0
        level = 0
        deathValue = 0
     }
     for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }
     playerLevel2Collided = Matter.SAT.collides(playerLevel2.body,starLevel2.body)
     if(playerLevel2Collided.collided)
     {
        levelUpSound.play()
       World.remove(world,whiteGroundLevel2.body)
       World.remove(world,blackGround1Level2.body)
       World.remove(world,blackGround2Level2.body)
       World.remove(world,playerLevel2.body)
       World.remove(world,starLevel2.body)
       upButton2.hide()
       switchButton2.hide()
       backToMenu = createImg('backButton.png')
       backToMenu.position(30,30)
       backToMenu.mousePressed(()=>
       {
           backToMenu.hide()
           menu.playButton.hide()
           menu.howTo.hide()
           levels.hide()
           gameState=0
           menu = new Menu()
       })
       if(gameState<=2){
       gameState = 3}
       gameState1 = 'level'
       levels = new Levels()
       back = color(255,255,255)
       c = (51,51,51)
       particles = []
       backColor = 0
       level = 0
     }
     if(playerLevel2.body.position.y>displayHeight+40)
     {  
        deathSound.play()
        World.remove(world,playerLevel2)
        deathValue += 1
         playerLevel2 = new Player(displayWidth/2,displayHeight/2 - 120,80,80)
     }
    }
    if(level===3)
    {   
        background(back)
        if(backColor===0)
        {
    
            World.remove(world,whiteGround1Level3.body)
            World.remove(world,whiteGround2Level3.body)
        }
        if(keyIsDown(RIGHT_ARROW))
        {      particles.push(new Particle(playerLevel3.body.position.x-30,random(playerLevel3.body.position.y+30,playerLevel3.body.position.y-30)))
            playerLevel3.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            particles.push(new Particle(playerLevel3.body.position.x+30,random(playerLevel3.body.position.y+30,playerLevel3.body.position.y-30)))
            playerLevel3.moveLeft()
        }
        joyControl(joystick3,playerLevel3)
        upButton3.mousePressed(()=>{
            playerLevel3.moveUp()
            jumpSound.play()
        })
        switchButton3.mousePressed(async()=>{
            if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel3.image = playerWhiteRight
            }
            else{
             playerLevel3.image = playerWhiteLeft
            }
            await World.remove(world,blackGroundLevel3.body)
            await World.add(world,whiteGround1Level3.body)
            await World.add(world,whiteGround2Level3.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel3.image = playerRightImg
            }
            else{
             playerLevel3.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level3.body)
            await World.remove(world,whiteGround2Level3.body)
            await World.add(world,blackGroundLevel3.body)
            backColor = 0
        }
        })
        showDeathValue()
         whiteGround1Level3.display()
         blackGroundLevel3.display()
         whiteGround2Level3.display()
         playerLevel3.display()
         starLevel3.display()
         if(deathValue===10)
         {
            gameOverSound.play()
            World.remove(world,whiteGround1Level3.body)
            World.remove(world,blackGroundLevel3.body)
            World.remove(world,whiteGround2Level3.body)
            World.remove(world,playerLevel3.body)
            World.remove(world,starLevel3.body)
            upButton3.hide()
            switchButton3.hide()
            
        backToMenu = createImg('backButton.png')
        backToMenu.position(30,30)
        backToMenu.mousePressed(()=>
        {
            backToMenu.hide()
            menu.playButton.hide()
            menu.howTo.hide()
            levels.hide()
            gameState=0
            menu = new Menu()
        })
        gameState=1
        gameState1 = 'level'
        levels = new Levels()
        back = color(255,255,255)
        c = (51,51,51)
        particles = []
        backColor = 0
        level = 0
        deathValue = 0
         }
         for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }
         playerLevel3Collided = Matter.SAT.collides(playerLevel3.body,starLevel3.body)
         if(playerLevel3Collided.collided)
         {
            levelUpSound.play()
           World.remove(world,whiteGround1Level3.body)
           World.remove(world,blackGroundLevel3.body)
           World.remove(world,whiteGround2Level3.body)
           World.remove(world,playerLevel3.body)
           World.remove(world,starLevel3.body)
           upButton3.hide()
           switchButton3.hide()
           backToMenu = createImg('backButton.png')
           backToMenu.position(30,30)
           backToMenu.mousePressed(()=>
           {
               backToMenu.hide()
               menu.playButton.hide()
               menu.howTo.hide()
               levels.hide()
               gameState=0
               menu = new Menu()
           })
           if(gameState<=3){
           gameState = 4}
           gameState1 = 'level'
           levels = new Levels()
           back = color(255,255,255)
           c = (51,51,51)
           particles = []
           backColor = 0
           level = 0
         }
         if(playerLevel3.body.position.y>displayHeight+40)
         {  
            deathSound.play()
            World.remove(world,playerLevel3)
            deathValue += 1
             playerLevel3 = new Player(displayWidth/2-500,0 + 20,80,80)
         }
    }
    if(level===4)
    {
        background(back)
        if(backColor===0)
        {
    
            World.remove(world,whiteGround1Level4.body)
            World.remove(world,whiteGround2Level4.body)
        }
        if(keyIsDown(RIGHT_ARROW))
        {      particles.push(new Particle(playerLevel4.body.position.x-30,random(playerLevel4.body.position.y+30,playerLevel4.body.position.y-30)))
            playerLevel4.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            particles.push(new Particle(playerLevel4.body.position.x+30,random(playerLevel4.body.position.y+30,playerLevel4.body.position.y-30)))
            playerLevel4.moveLeft()
        }
        joyControl(joystick4,playerLevel4)
        upButton4.mousePressed(()=>{
            playerLevel4.moveUp()
            jumpSound.play()
        })
        switchButton4.mousePressed(async()=>{
            if(backColor===0)
            {
             
                back = color(51,51,51)
                c = (235,235,235)
                if(playerMode==="right")
                {
                playerLevel4.image = playerWhiteRight
                }
                else{
                 playerLevel4.image = playerWhiteLeft
                }
                await World.remove(world,blackGround1Level4.body)
                await World.remove(world,blackGround2Level4.body)
                await World.remove(world,blackGround3Level4.body)
                await World.remove(world,blackGround4Level4.body)
                await World.remove(world,blackGround5Level4.body)
                await World.add(world,whiteGround1Level4.body)
                await World.add(world,whiteGround2Level4.body)
                backColor = 1
            }
            else
            {
    
                back = color(255,255,255)
                c = (51,51,51)
                if(playerMode==="right")
                {
                playerLevel4.image = playerRightImg
                }
                else{
                 playerLevel4.image = playerLeftImg
                }
                await World.remove(world,whiteGround1Level4.body)
                await World.remove(world,whiteGround2Level4.body)
                await World.add(world,blackGround1Level4.body)
                await World.add(world,blackGround2Level4.body)
                await World.add(world,blackGround3Level4.body)
                await World.add(world,blackGround4Level4.body)
                await World.add(world,blackGround5Level4.body)
                backColor = 0
            } 
        })
        showDeathValue()
         whiteGround1Level4.display()
         blackGround1Level4.display()
         blackGround2Level4.display()
         blackGround3Level4.display()
         blackGround4Level4.display()
         blackGround5Level4.display()
         whiteGround2Level4.display()
         playerLevel4.display()
         starLevel4.display()
         if(deathValue===10)
         {        gameOverSound.play()
            World.remove(world,whiteGround1Level4.body)
            World.remove(world,blackGround1Level4.body)
            World.remove(world,blackGround2Level4.body)
            World.remove(world,blackGround3Level4.body)
            World.remove(world,blackGround4Level4.body)
            World.remove(world,blackGround5Level4.body)
            World.remove(world,whiteGround2Level4.body)
            World.remove(world,playerLevel4.body)
            World.remove(world,starLevel4.body)
            upButton4.hide()
            switchButton4.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            gameState=1
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
            deathValue = 0

         }
         for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }
         playerLevel4Collided = Matter.SAT.collides(playerLevel4.body,starLevel4.body)
         if(playerLevel4Collided.collided)
         {
            levelUpSound.play()
           World.remove(world,whiteGround1Level4.body)
           World.remove(world,blackGround1Level4.body)
           World.remove(world,blackGround2Level4.body)
           World.remove(world,blackGround3Level4.body)
           World.remove(world,blackGround4Level4.body)
           World.remove(world,blackGround5Level4.body)
           World.remove(world,whiteGround2Level4.body)
           World.remove(world,playerLevel4.body)
           World.remove(world,starLevel4.body)
           upButton4.hide()
           switchButton4.hide()
           backToMenu = createImg('backButton.png')
           backToMenu.position(30,30)
           backToMenu.mousePressed(()=>
           {
               backToMenu.hide()
               menu.playButton.hide()
               menu.howTo.hide()
               levels.hide()
               gameState=0
               menu = new Menu()
           })
           if(gameState<=4){
           gameState = 5}
           gameState1 = 'level'
           levels = new Levels()
           back = color(255,255,255)
           c = (51,51,51)
           particles = []
           backColor = 0
           level = 0
         }
         if(playerLevel4.body.position.y>displayHeight+40)
         { deathSound.play()
             World.remove(world,playerLevel4)
             deathValue += 1
             playerLevel4 = new Player(80,displayWidth/2-20,80,80)
         }

    }
    if(level===5)
    {
        background(back)
  
        if(keyIsDown(RIGHT_ARROW))
        {      particles.push(new Particle(playerLevel5.body.position.x-30,random(playerLevel5.body.position.y+30,playerLevel5.body.position.y-30)))
            playerLevel5.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            particles.push(new Particle(playerLevel5.body.position.x+30,random(playerLevel5.body.position.y+30,playerLevel5.body.position.y-30)))
            playerLevel5.moveLeft()
        }
        joyControl(joystick5,playerLevel5)
        upButton5.mousePressed(()=>{
            playerLevel5.moveUp()
            jumpSound.play()
        })
        switchButton5.mousePressed(async()=>{
            if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel5.image = playerWhiteRight
            }
            else{
             playerLevel5.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level5.body)
            await World.remove(world,blackGround2Level5.body)
            await World.remove(world,blackGround3Level5.body)
            await World.remove(world,blackGround4Level5.body)
            await World.remove(world,blackGround5Level5.body)
            await World.remove(world,blackGround6Level5.body)
            await World.remove(world,blackGround7Level5.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel5.image = playerRightImg
            }
            else{
             playerLevel5.image = playerLeftImg
            }
            await World.add(world,blackGround1Level5.body)
            await World.add(world,blackGround2Level5.body)
            await World.add(world,blackGround3Level5.body)
            await World.add(world,blackGround4Level5.body)
            await World.add(world,blackGround5Level5.body)
            await World.add(world,blackGround6Level5.body)
            await World.add(world,blackGround7Level5.body)
            backColor = 0
        } 
        })

        blackGround1Level5.display()
        blackGround2Level5.display()
        blackGround3Level5.display()
        blackGround4Level5.display()
        blackGround5Level5.display()
        blackGround6Level5.display()
        blackGround7Level5.display()
        playerLevel5.display()
        starLevel5.display()
        showDeathValue()
        if(deathValue===10)
        {
            gameOverSound.play()
            World.remove(world,blackGround7Level5.body)
          World.remove(world,blackGround1Level5.body)
          World.remove(world,blackGround2Level5.body)
          World.remove(world,blackGround3Level5.body)
          World.remove(world,blackGround4Level5.body)
          World.remove(world,blackGround5Level5.body)
          World.remove(world,blackGround6Level5.body)
          World.remove(world,playerLevel5.body)
          World.remove(world,starLevel5.body)
          upButton5.hide()
          switchButton5.hide()
          backToMenu = createImg('backButton.png')
          backToMenu.position(30,30)
          backToMenu.mousePressed(()=>
          {
              backToMenu.hide()
              menu.playButton.hide()
              menu.howTo.hide()
              levels.hide()
              gameState=0
              menu = new Menu()
          })
          
          gameState=1
          gameState1 = 'level'
          levels = new Levels()
          back = color(255,255,255)
          c = (51,51,51)
          particles = []
          backColor = 0
          level = 0
          deathValue = 0
        }
        for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }
        //console.log(playerLevel5.body.speed)
        playerLevel5Collided = Matter.SAT.collides(playerLevel5.body,starLevel5.body)
        if(playerLevel5Collided.collided)
        {
            levelUpSound.play()
          World.remove(world,blackGround7Level5.body)
          World.remove(world,blackGround1Level5.body)
          World.remove(world,blackGround2Level5.body)
          World.remove(world,blackGround3Level5.body)
          World.remove(world,blackGround4Level5.body)
          World.remove(world,blackGround5Level5.body)
          World.remove(world,blackGround6Level5.body)
          World.remove(world,playerLevel5.body)
          World.remove(world,starLevel5.body)
          upButton5.hide()
          switchButton5.hide()
          backToMenu = createImg('backButton.png')
          backToMenu.position(30,30)
          backToMenu.mousePressed(()=>
          {
              backToMenu.hide()
              menu.playButton.hide()
              menu.howTo.hide()
              levels.hide()
              gameState=0
              menu = new Menu()
          })
          if(gameState<=5){
          gameState = 6}
          gameState1 = 'level'
          levels = new Levels()
          back = color(255,255,255)
          c = (51,51,51)
          particles = []
          backColor = 0
          level = 0
        }
        if(playerLevel5.body.position.y>displayHeight+40)
        {
            deathSound.play()
            World.remove(world,playerLevel5)
            deathValue += 1
            playerLevel5 = new Player(250,displayHeight-250,80,80)
        }
    }
    if(level===6)
    {
        background(back)
        if(backColor===0)
        {
    
            World.remove(world,whiteGround1Level6.body)
            World.remove(world,whiteGround2Level6.body)
        }

        if(keyIsDown(RIGHT_ARROW))
        {      particles.push(new Particle(playerLevel6.body.position.x-30,random(playerLevel6.body.position.y+30,playerLevel6.body.position.y-30)))
            playerLevel6.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            particles.push(new Particle(playerLevel6.body.position.x+30,random(playerLevel6.body.position.y+30,playerLevel6.body.position.y-30)))
            playerLevel6.moveLeft()
        }
        joyControl(joystick6,playerLevel6)
        upButton6.mousePressed(()=>{
            playerLevel6.moveUp()
            jumpSound.play()
        })
        switchButton6.mousePressed(async()=>{
            if(backColor===0)
            {
             
                back = color(51,51,51)
                c = (235,235,235)
                if(playerMode==="right")
                {
                playerLevel6.image = playerWhiteRight
                }
                else{
                 playerLevel6.image = playerWhiteLeft
                }
                await World.remove(world,blackGround1Level6.body)
                await World.remove(world,blackGround2Level6.body)
                await World.add(world,whiteGround1Level6.body)
                await World.add(world,whiteGround2Level6.body)
                backColor = 1
            }
            else
            {
    
                back = color(255,255,255)
                c = (51,51,51)
                if(playerMode==="right")
                {
                playerLevel6.image = playerRightImg
                }
                else{
                 playerLevel6.image = playerLeftImg
                }
                await World.remove(world,whiteGround1Level6.body)
                await World.remove(world,whiteGround2Level6.body)
                await  World.add(world,blackGround1Level6.body)
                await World.add(world,blackGround2Level6.body)
                backColor = 0
            } 
        })
        showDeathValue()
         blackGround1Level6.display()
         blackGround2Level6.display()
         whiteGround2Level6.display()
         whiteGround1Level6.display()
         playerLevel6.display()
         starLevel6.display()
         if(deathValue===10)
         {
            gameOverSound.play()
            World.remove(world,whiteGround1Level6.body)
            World.remove(world,whiteGround2Level6.body)
            World.remove(world,blackGround1Level6.body)
            World.remove(world,blackGround2Level6.body)
            World.remove(world,playerLevel6.body)
            World.remove(world,starLevel6.body)
            upButton6.hide()
            switchButton6.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
          
            gameState=1
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
            deathValue = 0

         }
         for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }
         playerLevel6Collided = Matter.SAT.collides(playerLevel6.body,starLevel6.body)
         if(playerLevel6Collided.collided)
         {
            levelUpSound.play()
           World.remove(world,whiteGround1Level6.body)
           World.remove(world,whiteGround2Level6.body)
           World.remove(world,blackGround1Level6.body)
           World.remove(world,blackGround2Level6.body)
           World.remove(world,playerLevel6.body)
           World.remove(world,starLevel6.body)
           upButton6.hide()
           switchButton6.hide()
           backToMenu = createImg('backButton.png')
           backToMenu.position(30,30)
           backToMenu.mousePressed(()=>
           {
               backToMenu.hide()
               menu.playButton.hide()
               menu.howTo.hide()
               levels.hide()
               gameState=0
               menu = new Menu()
           })
           if(gameState<=6){
           gameState = 7}
           gameState1 = 'level'
           levels = new Levels()
           back = color(255,255,255)
           c = (51,51,51)
           particles = []
           backColor = 0
           level = 0
         }
         if(playerLevel6.body.position.y>displayHeight+40)
         {
            deathSound.play()
            World.remove(world,playerLevel6)
             deathValue += 1
             playerLevel6 = new Player(displayWidth/2-400,displayHeight-100,80,80)
         }
    }
    if(level===7)
    {
        if(backColor===0)
        {
    
            World.remove(world,whiteGround1Level7.body)
            World.remove(world,whiteGround2Level7.body)
            World.remove(world,whiteGround3Level7.body)
            World.remove(world,whiteGround4Level7.body)
            World.remove(world,whiteGround5Level7.body)
            
        }

        if(keyIsDown(RIGHT_ARROW))
        {      particles.push(new Particle(playerLevel7.body.position.x-30,random(playerLevel7.body.position.y+30,playerLevel7.body.position.y-30)))
            playerLevel7.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            particles.push(new Particle(playerLevel7.body.position.x+30,random(playerLevel7.body.position.y+30,playerLevel7.body.position.y-30)))
            playerLevel7.moveLeft()
        }
        joyControl(joystick7,playerLevel7)
        upButton7.mousePressed(()=>{
            playerLevel7.moveUp()
            jumpSound.play()
        })
        switchButton7.mousePressed(async()=>{
            if(backColor===0)
            {
             
                back = color(51,51,51)
                c = (235,235,235)
                if(playerMode==="right")
                {
                playerLevel7.image = playerWhiteRight
                }
                else{
                 playerLevel7.image = playerWhiteLeft
                }
                await World.remove(world,blackGround1Level7.body)
                await World.remove(world,blackGround2Level7.body)
                await World.remove(world,blackGround3Level7.body)
                await World.remove(world,blackGround4Level7.body)
                await World.remove(world,blackGround5Level7.body)
                await World.remove(world,blackGround6Level7.body)
                await World.add(world,whiteGround1Level7.body)
                await World.add(world,whiteGround2Level7.body)
                await World.add(world,whiteGround3Level7.body)
                await World.add(world,whiteGround4Level7.body)
                await World.add(world,whiteGround5Level7.body)
                backColor = 1
            }
            else
            {
    
                back = color(255,255,255)
                c = (51,51,51)
                if(playerMode==="right")
                {
                playerLevel7.image = playerRightImg
                }
                else{
                 playerLevel7.image = playerLeftImg
                }
                await World.remove(world,whiteGround1Level7.body)
                await World.remove(world,whiteGround2Level7.body)
                await World.remove(world,whiteGround3Level7.body)
                await World.remove(world,whiteGround4Level7.body)
                await World.remove(world,whiteGround5Level7.body)
                await World.add(world,blackGround1Level7.body)
                await World.add(world,blackGround2Level7.body)
                await World.add(world,blackGround3Level7.body)
                await World.add(world,blackGround4Level7.body)
                await World.add(world,blackGround5Level7.body)
                await World.add(world,blackGround6Level7.body)
                backColor = 0
            } 
        })
        showDeathValue()
        blackGround1Level7.display()
        blackGround2Level7.display()
        blackGround3Level7.display()
        blackGround4Level7.display()
        blackGround5Level7.display()
        blackGround6Level7.display()
        whiteGround1Level7.display()
        whiteGround2Level7.display()
        whiteGround3Level7.display()
        whiteGround4Level7.display()
        whiteGround5Level7.display()
        playerLevel7.display()
        starLevel7.display()
        if(deathValue===10)
        {
            gameOverSound.play()
            World.remove(world,whiteGround1Level7.body)
            World.remove(world,whiteGround2Level7.body)
            World.remove(world,whiteGround3Level7.body)
            World.remove(world,whiteGround4Level7.body)
            World.remove(world,whiteGround5Level7.body)
            World.remove(world,blackGround1Level7.body)
            World.remove(world,blackGround2Level7.body)
            World.remove(world,blackGround3Level7.body)
            World.remove(world,blackGround4Level7.body)
            World.remove(world,blackGround5Level7.body)
            World.remove(world,blackGround6Level7.body)
            World.remove(world,playerLevel7.body)
            World.remove(world,starLevel7.body)
            upButton7.hide()
            switchButton7.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            gameState=1
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
            deathValue = 0
        }
        for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }
    playerLevel7Collided = Matter.SAT.collides(playerLevel7.body,starLevel7.body)
    if(playerLevel7Collided.collided)
    {
        levelUpSound.play()
            World.remove(world,whiteGround1Level7.body)
            World.remove(world,whiteGround2Level7.body)
            World.remove(world,whiteGround3Level7.body)
            World.remove(world,whiteGround4Level7.body)
            World.remove(world,whiteGround5Level7.body)
            World.remove(world,blackGround1Level7.body)
            World.remove(world,blackGround2Level7.body)
            World.remove(world,blackGround3Level7.body)
            World.remove(world,blackGround4Level7.body)
            World.remove(world,blackGround5Level7.body)
            World.remove(world,blackGround6Level7.body)
            World.remove(world,playerLevel7.body)
            World.remove(world,starLevel7.body)
            upButton7.hide()
            switchButton7.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            if(gameState<=7){
            gameState = 8}
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
        }
        if(playerLevel7.body.position.y>displayHeight+40)
        {
            deathSound.play()
            World.remove(world,playerLevel7)
            deathValue += 1
            playerLevel7 = new Player(displayWidth/2-300,displayHeight/2-125,80,80)
        }
    }
    if(level=== 8)
    {
        if(backColor===0)
        {
    
            World.remove(world,whiteGround1Level8.body)
            World.remove(world,whiteGround2Level8.body)
        }
        if(keyIsDown(RIGHT_ARROW))
        {      particles.push(new Particle(playerLevel8.body.position.x-30,random(playerLevel8.body.position.y+30,playerLevel8.body.position.y-30)))
            playerLevel8.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            particles.push(new Particle(playerLevel8.body.position.x+30,random(playerLevel8.body.position.y+30,playerLevel8.body.position.y-30)))
            playerLevel8.moveLeft()
        }
        joyControl(joystick8,playerLevel8)
        upButton8.mousePressed(()=>{
            playerLevel8.moveUp()
            jumpSound.play()
        })
        switchButton8.mousePressed(async()=>{
            if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel8.image = playerWhiteRight
            }
            else{
             playerLevel8.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level8.body)
            await World.remove(world,blackGround2Level8.body)
            await World.remove(world,blackGround3Level8.body)
            await World.add(world,whiteGround1Level8.body)
            await World.add(world,whiteGround2Level8.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel8.image = playerRightImg
            }
            else{
             playerLevel8.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level8.body)
            await World.remove(world,whiteGround2Level8.body)
            await World.add(world,blackGround1Level8.body)
            await World.add(world,blackGround2Level8.body)
            await World.add(world,blackGround3Level8.body)
            backColor = 0
        }   
        })
        showDeathValue()
        blackGround1Level8.display()
        blackGround2Level8.display()
        blackGround3Level8.display()
        whiteGround1Level8.display()
        whiteGround2Level8.display()
        playerLevel8.display()
        starLevel8.display()
        if(deathValue===10)
        {
            gameOverSound.play()
            World.remove(world,whiteGround1Level8.body)
            World.remove(world,whiteGround2Level8.body)
            World.remove(world,blackGround1Level8.body)
            World.remove(world,blackGround2Level8.body)
            World.remove(world,blackGround3Level8.body)
            World.remove(world,playerLevel8.body)
            World.remove(world,starLevel8.body)
            upButton8.hide()
            switchButton8.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            gameState=1
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
            deathValue = 0

        }
        for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }
    playerLevel8Collided = Matter.SAT.collides(playerLevel8.body,starLevel8.body)
    if(playerLevel8Collided.collided)
    {
        levelUpSound.play()
            World.remove(world,whiteGround1Level8.body)
            World.remove(world,whiteGround2Level8.body)
            World.remove(world,blackGround1Level8.body)
            World.remove(world,blackGround2Level8.body)
            World.remove(world,blackGround3Level8.body)
            World.remove(world,playerLevel8.body)
            World.remove(world,starLevel8.body)
            upButton8.hide()
            switchButton8.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            if(gameState<=8){
            gameState = 9}
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
        }
        if(playerLevel8.body.position.y>displayHeight+40)
        {
            deathSound.play()
            World.remove(world,playerLevel8)
            deathValue += 1
            playerLevel8 = new Player(displayWidth/2-400,displayHeight-110,80,80)
        }
    }
    if(level===9)
    {
        joyControl(joystick9,playerLevel9)
        upButton9.mousePressed(()=>{
            playerLevel9.moveUp()
            jumpSound.play()
        })
        switchButton9.mousePressed(async()=>{
            if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel9.image = playerWhiteRight
            }
            else{
             playerLevel9.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level9.body)
            await World.remove(world,blackGround2Level9.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel9.image = playerRightImg
            }
            else{
             playerLevel9.image = playerLeftImg
            }
            await World.add(world,blackGround1Level9.body)
            await World.add(world,blackGround2Level9.body)
            backColor = 0
        }  
        })
        showDeathValue()
       blackGround1Level9.display()
       blackGround2Level9.display()
       playerLevel9.display()
       starLevel9.display()
       if(deathValue===10)
       {
        gameOverSound.play()
        World.remove(world,blackGround1Level9.body)
        World.remove(world,blackGround2Level9.body)
        World.remove(world,playerLevel9.body)
        World.remove(world,starLevel9.body)
        upButton9.hide()
        switchButton9.hide()
        backToMenu = createImg('backButton.png')
        backToMenu.position(30,30)
        backToMenu.mousePressed(()=>
        {
            backToMenu.hide()
            menu.playButton.hide()
            menu.howTo.hide()
            levels.hide()
            gameState=0
            menu = new Menu()
        })
        gameState=1
        gameState1 = 'level'
        levels = new Levels()
        back = color(255,255,255)
        c = (51,51,51)
        particles = []
        backColor = 0
        level = 0
        deathValue = 0

       }
       for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }
       if(keyIsDown(RIGHT_ARROW))
       {      particles.push(new Particle(playerLevel9.body.position.x-30,random(playerLevel9.body.position.y+30,playerLevel9.body.position.y-30)))
           playerLevel9.moveRight()
       }
       if(keyIsDown(LEFT_ARROW))
       {
        particles.push(new Particle(playerLevel9.body.position.x+30,random(playerLevel9.body.position.y+30,playerLevel9.body.position.y-30)))
           playerLevel9.moveLeft()
       }
       playerLevel9Collided = Matter.SAT.collides(playerLevel9.body,starLevel9.body)
       if(playerLevel9Collided.collided)
       {
        levelUpSound.play()
           World.remove(world,blackGround1Level9.body)
           World.remove(world,blackGround2Level9.body)
           World.remove(world,playerLevel9.body)
           World.remove(world,starLevel9.body)
           upButton9.hide()
           switchButton9.hide()
           backToMenu = createImg('backButton.png')
           backToMenu.position(30,30)
           backToMenu.mousePressed(()=>
           {
               backToMenu.hide()
               menu.playButton.hide()
               menu.howTo.hide()
               levels.hide()
               gameState=0
               menu = new Menu()
           })
           if(gameState<=9){
           gameState = 10}
           gameState1 = 'level'
           levels = new Levels()
           back = color(255,255,255)
           c = (51,51,51)
           particles = []
           backColor = 0
           level = 0
       }
       if(playerLevel9.body.position.y>displayHeight+40)
       {
        deathSound.play()
        World.remove(world,playerLevel9)
           deathValue += 1
           playerLevel9 = new Player(40,displayHeight/2,80,80)
       }
    }
    if(level===10)
    {
        if(backColor===0)
        {
    
            World.remove(world,whiteGround1Level10.body)
            World.remove(world,whiteGround2Level10.body)
            World.remove(world,whiteGround3Level10.body)
        }
        if(keyIsDown(RIGHT_ARROW))
        {      particles.push(new Particle(playerLevel10.body.position.x-30,random(playerLevel10.body.position.y+30,playerLevel10.body.position.y-30)))
            playerLevel10.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            particles.push(new Particle(playerLevel10.body.position.x+30,random(playerLevel10.body.position.y+30,playerLevel10.body.position.y-30)))
            playerLevel10.moveLeft()
        }
        joyControl(joystick10,playerLevel10)
        upButton10.mousePressed(()=>{
            playerLevel10.moveUp()
            jumpSound.play()
        })
        switchButton10.mousePressed(async()=>{
            if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel10.image = playerWhiteRight
            }
            else{
             playerLevel10.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level10.body)
            await World.remove(world,blackGround2Level10.body)
            await World.remove(world,blackGround3Level10.body)
            await World.add(world,whiteGround1Level10.body)
            await World.add(world,whiteGround2Level10.body)
            await World.add(world,whiteGround3Level10.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel10.image = playerRightImg
            }
            else{
             playerLevel10.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level10.body)
            await World.remove(world,whiteGround2Level10.body)
            await World.remove(world,whiteGround3Level10.body)
            await World.add(world,blackGround1Level10.body)
            await World.add(world,blackGround2Level10.body)
            await World.add(world,blackGround3Level10.body)
            backColor = 0
        } 
        })
        showDeathValue()
        blackGround1Level10.display()
        blackGround2Level10.display()
        blackGround3Level10.display()
        whiteGround1Level10.display()
        whiteGround2Level10.display()
        whiteGround3Level10.display()
        playerLevel10.display()
        starLevel10.display()
        if(deathValue===10)
        {
            gameOverSound.play()
            World.remove(world,whiteGround1Level10.body)
            World.remove(world,whiteGround2Level10.body)
            World.remove(world,whiteGround3Level10.body)
            World.remove(world,blackGround1Level10.body)
            World.remove(world,blackGround2Level10.body)
            World.remove(world,blackGround3Level10.body)
            World.remove(world,playerLevel10.body)
            World.remove(world,starLevel10.body)
            upButton10.hide()
            switchButton10.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
        gameState=1
        gameState1 = 'level'
        levels = new Levels()
        back = color(255,255,255)
        c = (51,51,51)
        particles = []
        backColor = 0
        level = 0
        deathValue = 0
        }
        for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }playerLevel10Collided = Matter.SAT.collides(playerLevel10.body,starLevel10.body)
    if(playerLevel10Collided.collided)
    {
        levelUpSound.play()
            World.remove(world,whiteGround1Level10.body)
            World.remove(world,whiteGround2Level10.body)
            World.remove(world,whiteGround3Level10.body)
            World.remove(world,blackGround1Level10.body)
            World.remove(world,blackGround2Level10.body)
            World.remove(world,blackGround3Level10.body)
            World.remove(world,playerLevel10.body)
            World.remove(world,starLevel10.body)
            upButton10.hide()
            switchButton10.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            if(gameState<=10){
            gameState = 11}
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
        }
        if(playerLevel10.body.position.y>displayHeight+40)
        {
            deathSound.play()
            World.remove(world,playerLevel10)
            deathValue+=1
            playerLevel10 = new Player(displayWidth/2-400,displayHeight/2-100,80,80)
        }
    }
    if(level=== 11)
    {
        if(backColor===0)
        {
    
            World.remove(world,whiteGround1Level11.body)
            World.remove(world,whiteGround2Level11.body)
            World.remove(world,whiteGround3Level11.body)
            World.remove(world,whiteGround4Level11.body)
        }
        if(keyIsDown(RIGHT_ARROW))
        {      particles.push(new Particle(playerLevel11.body.position.x-30,random(playerLevel11.body.position.y+30,playerLevel11.body.position.y-30)))
            playerLevel11.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            particles.push(new Particle(playerLevel11.body.position.x+30,random(playerLevel11.body.position.y+30,playerLevel11.body.position.y-30)))
            playerLevel11.moveLeft()
        }
        joyControl(joystick11,playerLevel11)
        upButton11.mousePressed(()=>{
            playerLevel11.moveUp()
            jumpSound.play()
        })
        switchButton11.mousePressed(async()=>{
            if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel11.image = playerWhiteRight
            }
            else{
             playerLevel11.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level11.body)
            await World.remove(world,blackGround2Level11.body)
            await World.remove(world,blackGround3Level11.body)
            await World.remove(world,blackGround4Level11.body)
            await World.remove(world,blackGround5Level11.body)
            await World.remove(world,blackGround6Level11.body)
            await World.add(world,whiteGround1Level11.body)
            await World.add(world,whiteGround2Level11.body)
            await World.add(world,whiteGround3Level11.body)
            await World.add(world,whiteGround4Level11.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel11.image = playerRightImg
            }
            else{
             playerLevel11.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level11.body)
            await World.remove(world,whiteGround2Level11.body)
            await World.remove(world,whiteGround3Level11.body)
            await World.remove(world,whiteGround4Level11.body)
            await World.add(world,blackGround1Level11.body)
            await World.add(world,blackGround2Level11.body)
            await World.add(world,blackGround3Level11.body)
            await World.add(world,blackGround4Level11.body)
            await World.add(world,blackGround5Level11.body)
            await World.add(world,blackGround6Level11.body)
            backColor = 0
        } 
        })
        showDeathValue()
        blackGround1Level11.display()
        blackGround2Level11.display()
        blackGround3Level11.display()
        blackGround4Level11.display()
        blackGround5Level11.display()
        blackGround6Level11.display()
        whiteGround1Level11.display()
        whiteGround2Level11.display()
        whiteGround3Level11.display()
        whiteGround4Level11.display()
        playerLevel11.display()
        starLevel11.display()
        if(deathValue===10)
        {
            gameOverSound.play()
            World.remove(world,whiteGround1Level11.body)
            World.remove(world,whiteGround2Level11.body)
            World.remove(world,whiteGround3Level11.body)
            World.remove(world,whiteGround4Level11.body)
            World.remove(world,blackGround1Level11.body)
            World.remove(world,blackGround2Level11.body)
            World.remove(world,blackGround3Level11.body)
            World.remove(world,blackGround4Level11.body)
            World.remove(world,blackGround5Level11.body)
            World.remove(world,blackGround6Level11.body)
            World.remove(world,playerLevel11.body)
            World.remove(world,starLevel11.body)
            upButton11.hide()
            switchButton11.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            gameState=1
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
            deathValue = 0
        }
        for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }playerLevel11Collided = Matter.SAT.collides(playerLevel11.body,starLevel11.body)
    if(playerLevel11Collided.collided)
    {
        levelUpSound.play()
            World.remove(world,whiteGround1Level11.body)
            World.remove(world,whiteGround2Level11.body)
            World.remove(world,whiteGround3Level11.body)
            World.remove(world,whiteGround4Level11.body)
            World.remove(world,blackGround1Level11.body)
            World.remove(world,blackGround2Level11.body)
            World.remove(world,blackGround3Level11.body)
            World.remove(world,blackGround4Level11.body)
            World.remove(world,blackGround5Level11.body)
            World.remove(world,blackGround6Level11.body)
            World.remove(world,playerLevel11.body)
            World.remove(world,starLevel11.body)
            upButton11.hide()
            switchButton11.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            if(gameState<=11){
            gameState = 12}
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
        }
        if(playerLevel11.body.position.y>displayHeight+40)
        {
            deathSound.play()
            World.remove(world,playerLevel11)
            deathValue += 1
            playerLevel11 = new Player(displayWidth/2-600,displayHeight-140,80,80)
        }
    }
    if(level=== 12)
    {
        if(backColor===0)
        {
    
            World.remove(world,whiteGround1Level12.body)
            World.remove(world,whiteGround2Level12.body)
        }
        if(keyIsDown(RIGHT_ARROW))
        {      particles.push(new Particle(playerLevel12.body.position.x-30,random(playerLevel12.body.position.y+30,playerLevel12.body.position.y-30)))
            playerLevel12.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            particles.push(new Particle(playerLevel12.body.position.x+30,random(playerLevel12.body.position.y+30,playerLevel12.body.position.y-30)))
            playerLevel12.moveLeft()
        }
        joyControl(joystick12,playerLevel12)
        upButton12.mousePressed(()=>{
            playerLevel12.moveUp()
            jumpSound.play()
        })
        switchButton12.mousePressed(async()=>{
            if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel12.image = playerWhiteRight
            }
            else{
             playerLevel12.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level12.body)
            await World.remove(world,blackGround2Level12.body)
            await World.remove(world,blackGround3Level12.body)
            await World.add(world,whiteGround1Level12.body)
            await World.add(world,whiteGround2Level12.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel12.image = playerRightImg
            }
            else{
             playerLevel12.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level12.body)
            await World.remove(world,whiteGround2Level12.body)
            await World.add(world,blackGround1Level12.body)
            await World.add(world,blackGround2Level12.body)
            await World.add(world,blackGround3Level12.body)
            backColor = 0
        } 
        })
        showDeathValue()
        blackGround1Level12.display()
        blackGround2Level12.display()
        blackGround3Level12.display()
        whiteGround1Level12.display()
        whiteGround2Level12.display()
        playerLevel12.display()
        starLevel12.display()
        if (deathValue===10) {
            gameOverSound.play()
            World.remove(world,whiteGround1Level12.body)
            World.remove(world,whiteGround2Level12.body)
            World.remove(world,blackGround1Level12.body)
            World.remove(world,blackGround2Level12.body)
            World.remove(world,blackGround3Level12.body)
            World.remove(world,playerLevel12.body)
            World.remove(world,starLevel12.body)
            upButton12.hide()
            switchButton12.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            gameState=1
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
            deathValue = 0
        }
        for(var i = particles.length-1;i>=0;i--)
        {particles[i].show()
            particles[i].update()
            if(particles[i].finished())
            {
              particles.splice(i,1)
            }
        }playerLevel12Collided = Matter.SAT.collides(playerLevel12.body,starLevel12.body)
        if(playerLevel12Collided.collided)
        {
            levelUpSound.play()
            World.remove(world,whiteGround1Level12.body)
            World.remove(world,whiteGround2Level12.body)
            World.remove(world,blackGround1Level12.body)
            World.remove(world,blackGround2Level12.body)
            World.remove(world,blackGround3Level12.body)
            World.remove(world,playerLevel12.body)
            World.remove(world,starLevel12.body)
            upButton12.hide()
            switchButton12.hide()
            backToMenu = createImg('backButton.png')
            backToMenu.position(30,30)
            backToMenu.mousePressed(()=>
            {
                backToMenu.hide()
                menu.playButton.hide()
                menu.howTo.hide()
                levels.hide()
                gameState=0
                menu = new Menu()
            })
            if(gameState<=12){
            gameState = 13}
            gameState1 = 'level'
            levels = new Levels()
            back = color(255,255,255)
            c = (51,51,51)
            particles = []
            backColor = 0
            level = 0
        }
        if(playerLevel12.body.position.y>displayHeight+40)
        {
            deathSound.play()
            World.remove(world,playerLevel12)
            deathValue += 1
            playerLevel12 = new Player(displayWidth/2,displayHeight/2-250,80,80)
        }
    }
        if(level=== 13)
        {
            if(backColor===0)
            {
        
                World.remove(world,whiteGround1Level13.body)
                World.remove(world,whiteGround2Level13.body)
                World.remove(world,whiteGround3Level13.body)
                World.remove(world,whiteGround4Level13.body)
            }
            if(keyIsDown(RIGHT_ARROW))
            {      particles.push(new Particle(playerLevel13.body.position.x-30,random(playerLevel13.body.position.y+30,playerLevel13.body.position.y-30)))
                playerLevel13.moveRight()
            }
            if(keyIsDown(LEFT_ARROW))
            {
                particles.push(new Particle(playerLevel13.body.position.x+30,random(playerLevel13.body.position.y+30,playerLevel13.body.position.y-30)))
                playerLevel13.moveLeft()
            }
            joyControl(joystick13,playerLevel13)
            upButton13.mousePressed(()=>{
                playerLevel13.moveUp()
                jumpSound.play()
            })
            switchButton13.mousePressed(async()=>{
                if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel13.image = playerWhiteRight
            }
            else{
             playerLevel13.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level13.body)
            await World.remove(world,blackGround2Level13.body)
            await World.remove(world,blackGround3Level13.body)
            await World.remove(world,blackGround4Level13.body)
            await World.add(world,whiteGround1Level13.body)
            await World.add(world,whiteGround2Level13.body)
            await World.add(world,whiteGround3Level13.body)
            await World.add(world,whiteGround4Level13.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel13.image = playerRightImg
            }
            else{
             playerLevel13.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level13.body)
            await World.remove(world,whiteGround2Level13.body)
            await World.remove(world,whiteGround3Level13.body)
            await World.remove(world,whiteGround4Level13.body)
            await World.add(world,blackGround1Level13.body)
            await World.add(world,blackGround2Level13.body)
            await World.add(world,blackGround3Level13.body)
            await World.add(world,blackGround4Level13.body)
            backColor = 0
        }  
            })
            showDeathValue()
            blackGround1Level13.display()
            blackGround2Level13.display()
            blackGround3Level13.display()
            blackGround4Level13.display()
            whiteGround1Level13.display()
            whiteGround2Level13.display()
            whiteGround3Level13.display()
            whiteGround4Level13.display()
            playerLevel13.display()
            starLevel13.display()
            if (deathValue===10) {
                gameOverSound.play()
                World.remove(world,whiteGround1Level13.body)
                World.remove(world,whiteGround2Level13.body)
                World.remove(world,whiteGround3Level13.body)
                World.remove(world,whiteGround4Level13.body)
                World.remove(world,blackGround1Level13.body)
                World.remove(world,blackGround2Level13.body)
                World.remove(world,blackGround3Level13.body)
                World.remove(world,blackGround4Level13.body)
                World.remove(world,playerLevel13.body)
                World.remove(world,starLevel13.body)
                upButton13.hide()
                switchButton13.hide()
                backToMenu = createImg('backButton.png')
                backToMenu.position(30,30)
                backToMenu.mousePressed(()=>
                {
                    backToMenu.hide()
                    menu.playButton.hide()
                    menu.howTo.hide()
                    levels.hide()
                    gameState=0
                    menu = new Menu()
                })
                gameState=1
                gameState1 = 'level'
                levels = new Levels()
                back = color(255,255,255)
                c = (51,51,51)
                particles = []
                backColor = 0
                level = 0
                deathValue = 0
            }
            for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }playerLevel13Collided = Matter.SAT.collides(playerLevel13.body,starLevel13.body)
    if(playerLevel13Collided.collided)
    {
        levelUpSound.play()
                World.remove(world,whiteGround1Level13.body)
                World.remove(world,whiteGround2Level13.body)
                World.remove(world,whiteGround3Level13.body)
                World.remove(world,whiteGround4Level13.body)
                World.remove(world,blackGround1Level13.body)
                World.remove(world,blackGround2Level13.body)
                World.remove(world,blackGround3Level13.body)
                World.remove(world,blackGround4Level13.body)
                World.remove(world,playerLevel13.body)
                World.remove(world,starLevel13.body)
                upButton13.hide()
                switchButton13.hide()
                backToMenu = createImg('backButton.png')
                backToMenu.position(30,30)
                backToMenu.mousePressed(()=>
                {
                    backToMenu.hide()
                    menu.playButton.hide()
                    menu.howTo.hide()
                    levels.hide()
                    gameState=0
                    menu = new Menu()
                })
                if(gameState<=13){
                gameState = 14}
                gameState1 = 'level'
                levels = new Levels()
                back = color(255,255,255)
                c = (51,51,51)
                particles = []
                backColor = 0
                level = 0
            }
            if(playerLevel13.body.position.y>displayHeight+40)
            {
                deathSound.play()
                World.remove(world,playerLevel13)
                deathValue +=1
                playerLevel13 = new Player(displayWidth/2-400,displayHeight/2,80,80)
            }
        }
        if(level=== 14)
        {
            if(backColor===0)
            {
        
                World.remove(world,whiteGround1Level14.body)
                World.remove(world,whiteGround2Level14.body)
                World.remove(world,whiteGround3Level14.body)
                World.remove(world,whiteGround4Level14.body)
            }
            if(keyIsDown(RIGHT_ARROW))
            {      particles.push(new Particle(playerLevel14.body.position.x-30,random(playerLevel14.body.position.y+30,playerLevel14.body.position.y-30)))
                playerLevel14.moveRight()
            }
            if(keyIsDown(LEFT_ARROW))
            {
                particles.push(new Particle(playerLevel14.body.position.x+30,random(playerLevel14.body.position.y+30,playerLevel14.body.position.y-30)))
                playerLevel14.moveLeft()
            }
            joyControl(joystick14,playerLevel14)
            upButton14.mousePressed(()=>{
                playerLevel14.moveUp()
                jumpSound.play()
            })
            switchButton14.mousePressed(async()=>{
                if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel14.image = playerWhiteRight
            }
            else{
             playerLevel14.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level14.body)
            await World.remove(world,blackGround2Level14.body)
            await World.remove(world,blackGround3Level14.body)
            await World.remove(world,blackGround4Level14.body)
            await World.remove(world,blackGround5Level14.body)
            await World.remove(world,blackGround6Level14.body)
            await World.remove(world,blackGround7Level14.body)
            await World.remove(world,blackGround8Level14.body)
            await World.remove(world,blackGround9Level14.body)
            await World.add(world,whiteGround1Level14.body)
            await World.add(world,whiteGround2Level14.body)
            await World.add(world,whiteGround3Level14.body)
            await World.add(world,whiteGround4Level14.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel14.image = playerRightImg
            }
            else{
             playerLevel14.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level14.body)
            await World.remove(world,whiteGround2Level14.body)
            await World.remove(world,whiteGround3Level14.body)
            await World.remove(world,whiteGround4Level14.body)
            await World.add(world,blackGround1Level14.body)
            await World.add(world,blackGround2Level14.body)
            await World.add(world,blackGround3Level14.body)
            await World.add(world,blackGround4Level14.body)
            await World.add(world,blackGround5Level14.body)
            await World.add(world,blackGround6Level14.body)
            await World.add(world,blackGround7Level14.body)
            await World.add(world,blackGround8Level14.body)
            await World.add(world,blackGround9Level14.body)
            backColor = 0
        } 
            })
            showDeathValue()
            blackGround1Level14.display()
            blackGround2Level14.display()
            blackGround3Level14.display()
            blackGround4Level14.display()
            blackGround5Level14.display()
            blackGround6Level14.display()
            blackGround7Level14.display()
            blackGround8Level14.display()
            blackGround9Level14.display()
            whiteGround1Level14.display()
            whiteGround2Level14.display()
            whiteGround3Level14.display()
            whiteGround4Level14.display()
            playerLevel14.display()
            starLevel14.display()
            if (deathValue===10) {
                gameOverSound.play()
                World.remove(world,blackGround1Level14.body)
                World.remove(world,blackGround2Level14.body)
                World.remove(world,blackGround3Level14.body)
                World.remove(world,blackGround4Level14.body)
                World.remove(world,blackGround5Level14.body)
                World.remove(world,blackGround6Level14.body)
                World.remove(world,blackGround7Level14.body)
                World.remove(world,blackGround8Level14.body)
                World.remove(world,blackGround9Level14.body)
                World.remove(world,whiteGround1Level14.body)
                World.remove(world,whiteGround2Level14.body)
                World.remove(world,whiteGround3Level14.body)
                World.remove(world,whiteGround4Level14.body)
                World.remove(world,playerLevel14.body)
                World.remove(world,starLevel14.body)
                upButton14.hide()
                switchButton14.hide()
                backToMenu = createImg('backButton.png')
                backToMenu.position(30,30)
                backToMenu.mousePressed(()=>
                {
                    backToMenu.hide()
                    menu.playButton.hide()
                    menu.howTo.hide()
                    levels.hide()
                    gameState=0
                    menu = new Menu()
                })
                gameState=1
                gameState1 = 'level'
                levels = new Levels()
                back = color(255,255,255)
                c = (51,51,51)
                particles = []
                backColor = 0
                level = 0
                deathValue = 0
            }
            for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }playerLevel14Collided = Matter.SAT.collides(playerLevel14.body,starLevel14.body)
    if(playerLevel14Collided.collided)
    {
        levelUpSound.play()
                World.remove(world,blackGround1Level14.body)
                World.remove(world,blackGround2Level14.body)
                World.remove(world,blackGround3Level14.body)
                World.remove(world,blackGround4Level14.body)
                World.remove(world,blackGround5Level14.body)
                World.remove(world,blackGround6Level14.body)
                World.remove(world,blackGround7Level14.body)
                World.remove(world,blackGround8Level14.body)
                World.remove(world,blackGround9Level14.body)
                World.remove(world,whiteGround1Level14.body)
                World.remove(world,whiteGround2Level14.body)
                World.remove(world,whiteGround3Level14.body)
                World.remove(world,whiteGround4Level14.body)
                World.remove(world,playerLevel14.body)
                World.remove(world,starLevel14.body)
                upButton14.hide()
                switchButton14.hide()
                backToMenu = createImg('backButton.png')
                backToMenu.position(30,30)
                backToMenu.mousePressed(()=>
                {
                    backToMenu.hide()
                    menu.playButton.hide()
                    menu.howTo.hide()
                    levels.hide()
                    gameState=0
                    menu = new Menu()
                })
                if(gameState<=14){
                gameState = 15}
                gameState1 = 'level'
                levels = new Levels()
                back = color(255,255,255)
                c = (51,51,51)
                particles = []
                backColor = 0
                level = 0
            }
            if(playerLevel14.body.position.y>displayHeight+40)
            {
                deathSound.play()
                World.remove(world,playerLevel14)
                deathValue += 1
                playerLevel14 = new Player(displayWidth/2-425,displayHeight/2+150,80,80)
            }
        }
        if(level=== 15)
        {
            if(keyIsDown(RIGHT_ARROW))
            {      particles.push(new Particle(playerLevel15.body.position.x-30,random(playerLevel15.body.position.y+30,playerLevel15.body.position.y-30)))
                playerLevel15.moveRight()
            }
            if(keyIsDown(LEFT_ARROW))
            {
                particles.push(new Particle(playerLevel15.body.position.x+30,random(playerLevel15.body.position.y+30,playerLevel15.body.position.y-30)))
                playerLevel15.moveLeft()
            }
            joyControl(joystick15,playerLevel15)
            upButton15.mousePressed(()=>{
                playerLevel15.moveUp()
                jumpSound.play()
            })
            switchButton15.mousePressed(async()=>{
                if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel15.image = playerWhiteRight
            }
            else{
             playerLevel5.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level15.body)
            await World.remove(world,blackGround2Level15.body)
            await World.remove(world,blackGround3Level15.body)
            await World.remove(world,blackGround4Level15.body)
            await World.remove(world,blackGround5Level15.body)
            await World.remove(world,blackGround6Level15.body)
            await World.remove(world,blackGround7Level15.body)
            await World.remove(world,blackGround8Level15.body)
            await World.remove(world,blackGround9Level15.body)
            await World.remove(world,blackGround10Level15.body)
            await World.remove(world,blackGround11Level15.body)
            await World.remove(world,blackGround12Level15.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel15.image = playerRightImg
            }
            else{
             playerLevel15.image = playerLeftImg
            }
            await World.add(world,blackGround1Level15.body)
            await World.add(world,blackGround2Level15.body)
            await World.add(world,blackGround3Level15.body)
            await World.add(world,blackGround4Level15.body)
            await World.add(world,blackGround5Level15.body)
            await World.add(world,blackGround6Level15.body)
            await World.add(world,blackGround7Level15.body)
            await World.add(world,blackGround8Level15.body)
            await World.add(world,blackGround9Level15.body)
            await World.add(world,blackGround10Level15.body)
            await World.add(world,blackGround11Level15.body)
            await World.add(world,blackGround12Level15.body)
            backColor = 0
        } 
            })
            showDeathValue()
            blackGround1Level15.display()
            blackGround2Level15.display()
            blackGround3Level15.display()
            blackGround4Level15.display()
            blackGround5Level15.display()
            blackGround6Level15.display()
            blackGround7Level15.display()
            blackGround8Level15.display()
            blackGround9Level15.display()
            blackGround10Level15.display()
            blackGround11Level15.display()
            blackGround12Level15.display()
            playerLevel15.display()
            starLevel15.display()
            if(deathValue===10)
            {
                gameOverSound.play()
                World.remove(world,blackGround1Level15.body)
                World.remove(world,blackGround2Level15.body)
                World.remove(world,blackGround3Level15.body)
                World.remove(world,blackGround4Level15.body)
                World.remove(world,blackGround5Level15.body)
                World.remove(world,blackGround6Level15.body)
                World.remove(world,blackGround7Level15.body)
                World.remove(world,blackGround8Level15.body)
                World.remove(world,blackGround9Level15.body)
                World.remove(world,blackGround10Level15.body)
                World.remove(world,blackGround11Level15.body)
                World.remove(world,blackGround12Level15.body)
                World.remove(world,playerLevel15.body)
                World.remove(world,starLevel15.body)
                upButton15.hide()
                switchButton15.hide()
                backToMenu = createImg('backButton.png')
                backToMenu.position(30,30)
                backToMenu.mousePressed(()=>
                {
                    backToMenu.hide()
                    menu.playButton.hide()
                    menu.howTo.hide()
                    levels.hide()
                    gameState=0
                    menu = new Menu()
                })
                gameState=1
                gameState1 = 'level'
                levels = new Levels()
                back = color(255,255,255)
                c = (51,51,51)
                particles = []
                backColor = 0
                level = 0
                deathValue = 0
            }
            for(var i = particles.length-1;i>=0;i--)
    {particles[i].show()
        particles[i].update()
        if(particles[i].finished())
        {
          particles.splice(i,1)
        }
    }playerLevel15Collided = Matter.SAT.collides(playerLevel15.body,starLevel15.body)
    if(playerLevel15Collided.collided)
    {
        levelUpSound.play()
                World.remove(world,blackGround1Level15.body)
                World.remove(world,blackGround2Level15.body)
                World.remove(world,blackGround3Level15.body)
                World.remove(world,blackGround4Level15.body)
                World.remove(world,blackGround5Level15.body)
                World.remove(world,blackGround6Level15.body)
                World.remove(world,blackGround7Level15.body)
                World.remove(world,blackGround8Level15.body)
                World.remove(world,blackGround9Level15.body)
                World.remove(world,blackGround10Level15.body)
                World.remove(world,blackGround11Level15.body)
                World.remove(world,blackGround12Level15.body)
                World.remove(world,playerLevel15.body)
                World.remove(world,starLevel15.body)
                upButton15.hide()
                switchButton15.hide()
                backToMenu = createImg('backButton.png')
                backToMenu.position(30,30)
                backToMenu.mousePressed(()=>
                {
                    backToMenu.hide()
                    menu.playButton.hide()
                    menu.howTo.hide()
                    levels.hide()
                    gameState=0
                    menu = new Menu()
                })
                gameState = 1
                gameState1 = 'level'
                levels = new Levels()
                back = color(255,255,255)
                c = (51,51,51)
                particles = []
                backColor = 0
                level = 0
            }
            if(playerLevel15.body.position.y>displayHeight+40)
            {
                deathSound.play()
                World.remove(world,playerLevel15)
                deathValue += 1
                playerLevel15 = new Player(displayWidth/2-400,displayHeight/2+150,80,80)
            }
        }

}
 async function keyPressed(){
    if(keyCode===32)
    {   if(level === 1)
        {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel1.image = playerWhiteRight
            }
            else{
             playerLevel1.image = playerWhiteLeft
            }
            await World.remove(world,blackGroundLevel1.body)
            await World.add(world,whiteGroundLevel1.body)
            backColor = 1
            
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel1.image = playerRightImg
            }
            else{
             playerLevel1.image = playerLeftImg
            }
            await World.remove(world,whiteGroundLevel1.body)
            await World.add(world,blackGroundLevel1.body)
            backColor = 0
        }
    }
       if(level===2)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel2.image = playerWhiteRight
            }
            else{
             playerLevel2.image = playerWhiteLeft
            }
            await World.remove(world,blackGround2Level2.body)
            await World.remove(world,blackGround1Level2.body)
            await World.add(world,whiteGroundLevel2.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel2.image = playerRightImg
            }
            else{
             playerLevel2.image = playerLeftImg
            }
            await World.remove(world,whiteGroundLevel2.body)
            await World.add(world,blackGround1Level2.body)
            await World.add(world,blackGround2Level2.body)
            backColor = 0
        }
       }
       if(level===3)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel3.image = playerWhiteRight
            }
            else{
             playerLevel3.image = playerWhiteLeft
            }
            await World.remove(world,blackGroundLevel3.body)
            await World.add(world,whiteGround1Level3.body)
            await World.add(world,whiteGround2Level3.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel3.image = playerRightImg
            }
            else{
             playerLevel3.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level3.body)
            await World.remove(world,whiteGround2Level3.body)
            await World.add(world,blackGroundLevel3.body)
            backColor = 0
        }
       }
       if(level===4)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel4.image = playerWhiteRight
            }
            else{
             playerLevel4.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level4.body)
            await World.remove(world,blackGround2Level4.body)
            await World.remove(world,blackGround3Level4.body)
            await World.remove(world,blackGround4Level4.body)
            await World.remove(world,blackGround5Level4.body)
            await World.add(world,whiteGround1Level4.body)
            await World.add(world,whiteGround2Level4.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel4.image = playerRightImg
            }
            else{
             playerLevel4.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level4.body)
            await World.remove(world,whiteGround2Level4.body)
            await World.add(world,blackGround1Level4.body)
            await World.add(world,blackGround2Level4.body)
            await World.add(world,blackGround3Level4.body)
            await World.add(world,blackGround4Level4.body)
            await World.add(world,blackGround5Level4.body)
            backColor = 0
        } 
       }
       if(level===5)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel5.image = playerWhiteRight
            }
            else{
             playerLevel5.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level5.body)
            await World.remove(world,blackGround2Level5.body)
            await World.remove(world,blackGround3Level5.body)
            await World.remove(world,blackGround4Level5.body)
            await World.remove(world,blackGround5Level5.body)
            await World.remove(world,blackGround6Level5.body)
            await World.remove(world,blackGround7Level5.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel5.image = playerRightImg
            }
            else{
             playerLevel5.image = playerLeftImg
            }
            await World.add(world,blackGround1Level5.body)
            await World.add(world,blackGround2Level5.body)
            await World.add(world,blackGround3Level5.body)
            await World.add(world,blackGround4Level5.body)
            await World.add(world,blackGround5Level5.body)
            await World.add(world,blackGround6Level5.body)
            await World.add(world,blackGround7Level5.body)
            backColor = 0
        } 
       }
       if(level=== 6)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel6.image = playerWhiteRight
            }
            else{
             playerLevel6.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level6.body)
            await World.remove(world,blackGround2Level6.body)
            await World.add(world,whiteGround1Level6.body)
            await World.add(world,whiteGround2Level6.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel6.image = playerRightImg
            }
            else{
             playerLevel6.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level6.body)
            await World.remove(world,whiteGround2Level6.body)
            await  World.add(world,blackGround1Level6.body)
            await World.add(world,blackGround2Level6.body)
            backColor = 0
        }  
       }
       if(level=== 7)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel7.image = playerWhiteRight
            }
            else{
             playerLevel7.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level7.body)
            await World.remove(world,blackGround2Level7.body)
            await World.remove(world,blackGround3Level7.body)
            await World.remove(world,blackGround4Level7.body)
            await World.remove(world,blackGround5Level7.body)
            await World.remove(world,blackGround6Level7.body)
            await World.add(world,whiteGround1Level7.body)
            await World.add(world,whiteGround2Level7.body)
            await World.add(world,whiteGround3Level7.body)
            await World.add(world,whiteGround4Level7.body)
            await World.add(world,whiteGround5Level7.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel7.image = playerRightImg
            }
            else{
             playerLevel7.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level7.body)
            await World.remove(world,whiteGround2Level7.body)
            await World.remove(world,whiteGround3Level7.body)
            await World.remove(world,whiteGround4Level7.body)
            await World.remove(world,whiteGround5Level7.body)
            await World.add(world,blackGround1Level7.body)
            await World.add(world,blackGround2Level7.body)
            await World.add(world,blackGround3Level7.body)
            await World.add(world,blackGround4Level7.body)
            await World.add(world,blackGround5Level7.body)
            await World.add(world,blackGround6Level7.body)
            backColor = 0
        } 
       }
       if(level=== 8)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel8.image = playerWhiteRight
            }
            else{
             playerLevel8.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level8.body)
            await World.remove(world,blackGround2Level8.body)
            await World.remove(world,blackGround3Level8.body)
            await World.add(world,whiteGround1Level8.body)
            await World.add(world,whiteGround2Level8.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel8.image = playerRightImg
            }
            else{
             playerLevel8.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level8.body)
            await World.remove(world,whiteGround2Level8.body)
            await World.add(world,blackGround1Level8.body)
            await World.add(world,blackGround2Level8.body)
            await World.add(world,blackGround3Level8.body)
            backColor = 0
        }   
       }
       if(level=== 9)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel9.image = playerWhiteRight
            }
            else{
             playerLevel9.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level9.body)
            await World.remove(world,blackGround2Level9.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel9.image = playerRightImg
            }
            else{
             playerLevel9.image = playerLeftImg
            }
            await World.add(world,blackGround1Level9.body)
            await World.add(world,blackGround2Level9.body)
            backColor = 0
        }   
       }
       if(level=== 10)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel10.image = playerWhiteRight
            }
            else{
             playerLevel10.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level10.body)
            await World.remove(world,blackGround2Level10.body)
            await World.remove(world,blackGround3Level10.body)
            await World.add(world,whiteGround1Level10.body)
            await World.add(world,whiteGround2Level10.body)
            await World.add(world,whiteGround3Level10.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel10.image = playerRightImg
            }
            else{
             playerLevel10.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level10.body)
            await World.remove(world,whiteGround2Level10.body)
            await World.remove(world,whiteGround3Level10.body)
            await World.add(world,blackGround1Level10.body)
            await World.add(world,blackGround2Level10.body)
            await World.add(world,blackGround3Level10.body)
            backColor = 0
        } 
       }
       if(level=== 11)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel11.image = playerWhiteRight
            }
            else{
             playerLevel11.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level11.body)
            await World.remove(world,blackGround2Level11.body)
            await World.remove(world,blackGround3Level11.body)
            await World.remove(world,blackGround4Level11.body)
            await World.remove(world,blackGround5Level11.body)
            await World.remove(world,blackGround6Level11.body)
            await World.add(world,whiteGround1Level11.body)
            await World.add(world,whiteGround2Level11.body)
            await World.add(world,whiteGround3Level11.body)
            await World.add(world,whiteGround4Level11.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel11.image = playerRightImg
            }
            else{
             playerLevel11.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level11.body)
            await World.remove(world,whiteGround2Level11.body)
            await World.remove(world,whiteGround3Level11.body)
            await World.remove(world,whiteGround4Level11.body)
            await World.add(world,blackGround1Level11.body)
            await World.add(world,blackGround2Level11.body)
            await World.add(world,blackGround3Level11.body)
            await World.add(world,blackGround4Level11.body)
            await World.add(world,blackGround5Level11.body)
            await World.add(world,blackGround6Level11.body)
            backColor = 0
        } 
       }
       if(level===12)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel12.image = playerWhiteRight
            }
            else{
             playerLevel12.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level12.body)
            await World.remove(world,blackGround2Level12.body)
            await World.remove(world,blackGround3Level12.body)
            await World.add(world,whiteGround1Level12.body)
            await World.add(world,whiteGround2Level12.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel12.image = playerRightImg
            }
            else{
             playerLevel12.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level12.body)
            await World.remove(world,whiteGround2Level12.body)
            await World.add(world,blackGround1Level12.body)
            await World.add(world,blackGround2Level12.body)
            await World.add(world,blackGround3Level12.body)
            backColor = 0
        } 
       }
       if(level=== 13)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel13.image = playerWhiteRight
            }
            else{
             playerLevel13.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level13.body)
            await World.remove(world,blackGround2Level13.body)
            await World.remove(world,blackGround3Level13.body)
            await World.remove(world,blackGround4Level13.body)
            await World.add(world,whiteGround1Level13.body)
            await World.add(world,whiteGround2Level13.body)
            await World.add(world,whiteGround3Level13.body)
            await World.add(world,whiteGround4Level13.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel13.image = playerRightImg
            }
            else{
             playerLevel13.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level13.body)
            await World.remove(world,whiteGround2Level13.body)
            await World.remove(world,whiteGround3Level13.body)
            await World.remove(world,whiteGround4Level13.body)
            await World.add(world,blackGround1Level13.body)
            await World.add(world,blackGround2Level13.body)
            await World.add(world,blackGround3Level13.body)
            await World.add(world,blackGround4Level13.body)
            backColor = 0
        }  
       }
       if(level=== 14)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel14.image = playerWhiteRight
            }
            else{
             playerLevel14.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level14.body)
            await World.remove(world,blackGround2Level14.body)
            await World.remove(world,blackGround3Level14.body)
            await World.remove(world,blackGround4Level14.body)
            await World.remove(world,blackGround5Level14.body)
            await World.remove(world,blackGround6Level14.body)
            await World.remove(world,blackGround7Level14.body)
            await World.remove(world,blackGround8Level14.body)
            await World.remove(world,blackGround9Level14.body)
            await World.add(world,whiteGround1Level14.body)
            await World.add(world,whiteGround2Level14.body)
            await World.add(world,whiteGround3Level14.body)
            await World.add(world,whiteGround4Level14.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel14.image = playerRightImg
            }
            else{
             playerLevel14.image = playerLeftImg
            }
            await World.remove(world,whiteGround1Level14.body)
            await World.remove(world,whiteGround2Level14.body)
            await World.remove(world,whiteGround3Level14.body)
            await World.remove(world,whiteGround4Level14.body)
            await World.add(world,blackGround1Level14.body)
            await World.add(world,blackGround2Level14.body)
            await World.add(world,blackGround3Level14.body)
            await World.add(world,blackGround4Level14.body)
            await World.add(world,blackGround5Level14.body)
            await World.add(world,blackGround6Level14.body)
            await World.add(world,blackGround7Level14.body)
            await World.add(world,blackGround8Level14.body)
            await World.add(world,blackGround9Level14.body)
            backColor = 0
        } 

       }
       if(level=== 15)
       {
        if(backColor===0)
        {
         
            back = color(51,51,51)
            c = (235,235,235)
            if(playerMode==="right")
            {
            playerLevel15.image = playerWhiteRight
            }
            else{
             playerLevel5.image = playerWhiteLeft
            }
            await World.remove(world,blackGround1Level15.body)
            await World.remove(world,blackGround2Level15.body)
            await World.remove(world,blackGround3Level15.body)
            await World.remove(world,blackGround4Level15.body)
            await World.remove(world,blackGround5Level15.body)
            await World.remove(world,blackGround6Level15.body)
            await World.remove(world,blackGround7Level15.body)
            await World.remove(world,blackGround8Level15.body)
            await World.remove(world,blackGround9Level15.body)
            await World.remove(world,blackGround10Level15.body)
            await World.remove(world,blackGround11Level15.body)
            await World.remove(world,blackGround12Level15.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
            c = (51,51,51)
            if(playerMode==="right")
            {
            playerLevel15.image = playerRightImg
            }
            else{
             playerLevel15.image = playerLeftImg
            }
            await World.add(world,blackGround1Level15.body)
            await World.add(world,blackGround2Level15.body)
            await World.add(world,blackGround3Level15.body)
            await World.add(world,blackGround4Level15.body)
            await World.add(world,blackGround5Level15.body)
            await World.add(world,blackGround6Level15.body)
            await World.add(world,blackGround7Level15.body)
            await World.add(world,blackGround8Level15.body)
            await World.add(world,blackGround9Level15.body)
            await World.add(world,blackGround10Level15.body)
            await World.add(world,blackGround11Level15.body)
            await World.add(world,blackGround12Level15.body)
            backColor = 0
        } 
       }
    }
    if(keyCode===38)
    {
        jumpSound.play()
        if(level === 1)
        {

            playerLevel1.moveUp()

        }
        if(level === 2)
        {
            playerLevel2.moveUp()
            
        }
        if(level === 3)
        {
            playerLevel3.moveUp()
        }
        if(level === 4)
        {
            playerLevel4.moveUp()
        }
        if(level === 5)
        {
            playerLevel5.moveUp()
        }
        if(level=== 6)
        {
            playerLevel6.moveUp()
        }
        if(level=== 7)
        {
            playerLevel7.moveUp()
        }
        if(level=== 8)
        {
            playerLevel8.moveUp()
        }
        if(level=== 9)
        {
            playerLevel9.moveUp()
        }
        if(level=== 10)
        {
            playerLevel10.moveUp()
        }
        if(level=== 11)
        {
            playerLevel11.moveUp()
        }
        if(level=== 12)
        {
            playerLevel12.moveUp()
        }
        if(level=== 13)
        {
            playerLevel13.moveUp()
        }
        if(level=== 14)
        {
            playerLevel14.moveUp()
        }
        if(level=== 15)
        {
            playerLevel15.moveUp()
        }
    }
}
class Particle {

    constructor(x,y){
      this.x = x
      this.y = y
      this.vy = random(-2,0)
      this.vx = random(-1,1)
      this.alpha = 255
      var y = random(1,10)
      this.width = y
      this.height = y
    }
    finished(){
      return this.alpha<0
       
    }
    show(){
      noStroke()
      fill(c,this.alpha)
      rect(this.x,this.y,this.width,this.height)
    }
    
    update()
    {
      this.x += this.vy
      this.y += this.vx 
      this.alpha -= 7
      this.width -= 0.5
      this.height -= 0.5
    }
    }

function joyControl(joystick,player){
    if( joystick.right() ){
        particles.push(new Particle(player.body.position.x-30,random(player.body.position.y+30,player.body.position.y-30)))
        player.moveRight()   
		}
		if( joystick.left() ){
            particles.push(new Particle(player.body.position.x+30,random(player.body.position.y+30,player.body.position.y-30)))
            player.moveLeft()    
		}
}
function showDeathValue()
{
    if(backColor===0)
        {
            c3 = color(35,35,35)
            image(deathBlack,displayWidth/2-75,15,50,50)
        }
        else{
            c3 = color(235,235,235)
            image(deathWhite,displayWidth/2-75,15,50,50)
        }
        fill(c3)
        textSize(20)
        textFont(myFont)
        text(":"+deathValue,displayWidth/2-25,50)
}
