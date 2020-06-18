const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var back
var backColor = 0
var level = 0
var winImage
var menu
var levels
var backToMenu
var backButtonImg
var playerLevel1
var starLevel1
var whiteGroundLevel1
var blackGroundLevel1
var playerLevel2
var whiteGroundLevel2
var blackGround1Level2
var blackGround2Level2
var whiteGround1Level3
var whiteGround2Level3
var blackGroundLevel3
var playerLevel3
var blackGround1Level4
var blackGround2Level4
var blackGround3Level4
var blackGround4Level4
var blackGround5Level4
var whiteGround1Level4
var whiteGround2Level4
var playerLevel4
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
var blackGround2Level6
var blackGround1Level6
var whiteGround1Level6
var whiteGround2Level6
var playerLevel6
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
var blackGround1Level8
var blackGround2Level8
var blackGround3Level8
var whiteGround1Level8
var whiteGround2Level8
var playerLevel8
var blackGround1Level9
var blackGround2Level9
var playerLevel9
var blackGround1Level10
var blackGround2Level10
var blackGround3Level10
var blackGround4Level10
var blackGround5Level10
var whiteGround1Level10
var whiteGround2Level10
var whiteGround3Level10
var whiteGround4Level10
var whiteGround5Level10
var playerLevel10
var gameState=0
function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    menu = new Menu()
}
function preload()
{
    back = color(255,255,255)
    backgroundImg = loadImage('Image/background.png')

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
    levels.l2()
    levels.l3()
    levels.l4()
    levels.l5()
    levels.l6()
    levels.l7()
    levels.l8()
    levels.l9()
    levels.l10()
    }
    if(level===1)
    {

    if(backColor===0)
    {

        World.remove(world,whiteGroundLevel1.body)
    }
    if(keyIsDown(RIGHT_ARROW))
    {
        playerLevel1.moveRight()
    }
    if(keyIsDown(LEFT_ARROW))
    {
        playerLevel1.moveLeft()
    }

    playerLevel1.display()
    whiteGroundLevel1.display()
    blackGroundLevel1.display()
    // starLevel1.display()
    if(playerLevel1.body.position.x>displayWidth-20)
    {
      World.remove(world,whiteGroundLevel1.body)
      World.remove(world,blackGroundLevel1.body)
      World.remove(world,playerLevel1.body)
    //   World.remove(world,starLevel1.body)
    backToMenu = createImg('Image/backButton.png')
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
      levels = new Levels()
      back = color(255,255,255)
      backColor = 0
      level = 0
    }
    if(playerLevel1.body.position.y>displayHeight)
    {   World.remove(world,playerLevel1)
        playerLevel1 = new Player(displayWidth/2-600,displayHeight/2-90,60,100)
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
    {
        playerLevel2.moveRight()
    }
    if(keyIsDown(LEFT_ARROW))
    {
        playerLevel2.moveLeft()
    }

     whiteGroundLevel2.display()
     blackGround1Level2.display()
     blackGround2Level2.display()
     playerLevel2.display()
     if(playerLevel2.body.position.x>displayWidth-20)
     {
       World.remove(world,whiteGroundLevel2.body)
       World.remove(world,blackGround1Level2.body)
       World.remove(world,blackGround2Level2.body)
       World.remove(world,playerLevel2.body)
       backToMenu = createImg('Image/backButton.png')
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
       levels = new Levels()
       back = color(255,255,255)
       backColor = 0
       level = 0
     }
     if(playerLevel2.body.position.y>displayHeight+40)
     {  World.remove(world,playerLevel2)
         playerLevel2 = new Player(displayWidth/2,displayHeight/2 - 120,60,100)
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
        {
            playerLevel3.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            playerLevel3.moveLeft()
        }

         whiteGround1Level3.display()
         blackGroundLevel3.display()
         whiteGround2Level3.display()
         playerLevel3.display()
         if(playerLevel3.body.position.x>displayWidth-20)
         {
           World.remove(world,whiteGround1Level3.body)
           World.remove(world,blackGroundLevel3.body)
           World.remove(world,whiteGround2Level3.body)
           World.remove(world,playerLevel3.body)
           backToMenu = createImg('Image/backButton.png')
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
           levels = new Levels()
           back = color(255,255,255)
           backColor = 0
           level = 0
         }
         if(playerLevel3.body.position.y>displayHeight+40)
         {  World.remove(world,playerLevel3)
             playerLevel3 = new Player(displayWidth/2-500,0 + 20,60,100)
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
        {
            playerLevel4.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            playerLevel4.moveLeft()
        }

         whiteGround1Level4.display()
         blackGround1Level4.display()
         blackGround2Level4.display()
         blackGround3Level4.display()
         blackGround4Level4.display()
         blackGround5Level4.display()
         whiteGround2Level4.display()
         playerLevel4.display()
         if(playerLevel4.body.position.x>displayWidth-5)
         {
           World.remove(world,whiteGround1Level4.body)
           World.remove(world,blackGround1Level4.body)
           World.remove(world,blackGround2Level4.body)
           World.remove(world,blackGround3Level4.body)
           World.remove(world,blackGround4Level4.body)
           World.remove(world,blackGround5Level4.body)
           World.remove(world,whiteGround2Level4.body)
           World.remove(world,playerLevel4.body)
           backToMenu = createImg('Image/backButton.png')
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
           levels = new Levels()
           back = color(255,255,255)
           backColor = 0
           level = 0
         }
         if(playerLevel4.body.position.y>displayHeight+40)
         {
             World.remove(world,playerLevel4)
             playerLevel4 = new Player(80,displayWidth/2-20,60,100)
         }

    }
    if(level===5)
    {
        background(back)
  
        if(keyIsDown(RIGHT_ARROW))
        {
            playerLevel5.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            playerLevel5.moveLeft()
        }

        blackGround1Level5.display()
        blackGround2Level5.display()
        blackGround3Level5.display()
        blackGround4Level5.display()
        blackGround5Level5.display()
        blackGround6Level5.display()
        blackGround7Level5.display()
        playerLevel5.display()
        console.log(playerLevel5.body.speed)
        if(playerLevel5.body.position.x>displayWidth-5)
        {
          World.remove(world,blackGround7Level5.body)
          World.remove(world,blackGround1Level5.body)
          World.remove(world,blackGround2Level5.body)
          World.remove(world,blackGround3Level5.body)
          World.remove(world,blackGround4Level5.body)
          World.remove(world,blackGround5Level5.body)
          World.remove(world,blackGround6Level5.body)
          World.remove(world,playerLevel5.body)
          backToMenu = createImg('Image/backButton.png')
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
          levels = new Levels()
          back = color(255,255,255)
          backColor = 0
          level = 0
        }
        if(playerLevel5.body.position.y>displayHeight+40)
        {
            World.remove(world,playerLevel5)
            playerLevel5 = new Player(250,displayHeight-250,60,100)
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
        {
            playerLevel6.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            playerLevel6.moveLeft()
        }
         blackGround1Level6.display()
         blackGround2Level6.display()
         whiteGround2Level6.display()
         whiteGround1Level6.display()
         playerLevel6.display()
         if(playerLevel6.body.position.x>displayWidth-5)
         {
           World.remove(world,whiteGround1Level6.body)
           World.remove(world,whiteGround2Level6.body)
           World.remove(world,blackGround1Level6.body)
           World.remove(world,blackGround2Level6.body)
           World.remove(world,playerLevel6.body)
           backToMenu = createImg('Image/backButton.png')
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
           levels = new Levels()
           back = color(255,255,255)
           backColor = 0
           level = 0
         }
         if(playerLevel6.body.position.y>displayHeight+40)
         {
             World.remove(world,playerLevel6)
             playerLevel6 = new Player(displayWidth/2-400,displayHeight-100,60,100)
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
        {
            playerLevel7.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            playerLevel7.moveLeft()
        }
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
        if(playerLevel7.body.position.x>displayWidth-5)
        {
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
            backToMenu = createImg('Image/backButton.png')
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
            levels = new Levels()
            back = color(255,255,255)
            backColor = 0
            level = 0
        }
        if(playerLevel7.body.position.y>displayHeight+40)
        {
            World.remove(world,playerLevel7)
            playerLevel7 = new Player(displayWidth/2-300,displayHeight/2-125,60,100)
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
        {
            playerLevel8.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            playerLevel8.moveLeft()
        }
        blackGround1Level8.display()
        blackGround2Level8.display()
        blackGround3Level8.display()
        whiteGround1Level8.display()
        whiteGround2Level8.display()
        playerLevel8.display()
        if(playerLevel8.body.position.x>displayWidth-5)
        {
            World.remove(world,whiteGround1Level8.body)
            World.remove(world,whiteGround2Level8.body)
            World.remove(world,blackGround1Level8.body)
            World.remove(world,blackGround2Level8.body)
            World.remove(world,blackGround3Level8.body)
            World.remove(world,playerLevel8.body)
            backToMenu = createImg('Image/backButton.png')
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
            levels = new Levels()
            back = color(255,255,255)
            backColor = 0
            level = 0
        }
        if(playerLevel8.body.position.y>displayHeight+40)
        {
            World.remove(world,playerLevel8)
            playerLevel8 = new Player(displayWidth/2-400,displayHeight-110,60,100)
        }
    }
    if(level===9)
    {
       blackGround1Level9.display()
       blackGround2Level9.display()
       playerLevel9.display()
       if(keyIsDown(RIGHT_ARROW))
       {
           playerLevel9.moveRight()
       }
       if(keyIsDown(LEFT_ARROW))
       {
           playerLevel9.moveLeft()
       }
       if(playerLevel9.body.position.x>displayWidth-5)
       {
           World.remove(world,blackGround1Level9.body)
           World.remove(world,blackGround2Level9.body)
           World.remove(world,playerLevel9.body)
           backToMenu = createImg('Image/backButton.png')
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
           levels = new Levels()
           back = color(255,255,255)
           backColor = 0
           level = 0
       }
       if(playerLevel9.body.position.y>displayHeight+40)
       {
           World.remove(world,playerLevel9)
           playerLevel9 = new Player(40,displayHeight/2,60,100)
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
        {
            playerLevel10.moveRight()
        }
        if(keyIsDown(LEFT_ARROW))
        {
            playerLevel10.moveLeft()
        }
        blackGround1Level10.display()
        blackGround2Level10.display()
        blackGround3Level10.display()
        whiteGround1Level10.display()
        whiteGround2Level10.display()
        whiteGround3Level10.display()
        playerLevel10.display()
        if(playerLevel10.body.position.x>displayWidth-5)
        {
            World.remove(world,whiteGround1Level10.body)
            World.remove(world,whiteGround2Level10.body)
            World.remove(world,whiteGround3Level10.body)
            World.remove(world,blackGround1Level10.body)
            World.remove(world,blackGround2Level10.body)
            World.remove(world,blackGround3Level10.body)
            World.remove(world,playerLevel10.body)
            backToMenu = createImg('Image/backButton.png')
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
            levels = new Levels()
            back = color(255,255,255)
            backColor = 0
            level = 0
        }
        if(playerLevel10.body.position.y>displayHeight+40)
        {
            World.remove(world,playerLevel10)
            playerLevel10 = new Player(displayWidth/2-400,displayHeight/2-100,60,100)
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
            await World.remove(world,blackGroundLevel1.body)
            await World.add(world,whiteGroundLevel1.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
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
            await World.remove(world,blackGround2Level2.body)
            await World.remove(world,blackGround1Level2.body)
            await World.add(world,whiteGroundLevel2.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
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
            await World.remove(world,blackGroundLevel3.body)
            await World.add(world,whiteGround1Level3.body)
            await World.add(world,whiteGround2Level3.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
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
            await World.remove(world,blackGround1Level6.body)
            await World.remove(world,blackGround2Level6.body)
            await World.add(world,whiteGround1Level6.body)
            await World.add(world,whiteGround2Level6.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
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
            await World.remove(world,blackGround1Level9.body)
            await World.remove(world,blackGround2Level9.body)
            backColor = 1
        }
        else
        {

            back = color(255,255,255)
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
            await World.remove(world,whiteGround1Level10.body)
            await World.remove(world,whiteGround2Level10.body)
            await World.remove(world,whiteGround3Level10.body)
            await World.add(world,blackGround1Level10.body)
            await World.add(world,blackGround2Level10.body)
            await World.add(world,blackGround3Level10.body)
            backColor = 0
        } 
       }
    }
    if(keyCode===38)
    {
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
    }
}






