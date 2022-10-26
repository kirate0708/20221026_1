  var mic
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  mic= new p5.AudioIn();
  mic.start();
}

function draw() {
  background(225);
  textSize(40)
  text("X:"+mouseX+"Y:"+mouseY,50,50)
  text(width/2+","+height/2,50,100)
  var micLevel=mic.getLevel()
  console.log(micLevel)

  push()
    translate(width/2,height/2) //讓(0,0)變成我設定的座標，在push()~pop()的範圍內
    //臉
    ellipse(0,0,400)
    //鼻子
    ellipse(0,0,100,50)
    ellipse(-30,0,20)
    ellipse(+30,0,20)
    //眼睛
    ellipse(-80,-80,60)
    ellipse(+80,-80,60)
    //眼黑
    fill(0)
    ellipse(-80+map(mouseX,0,width,-15,15),-80+map(mouseY,0,height,-15,15),30) //map(A,B,C,D,E) mouseX為A，設定0(B)到width或height(C)為數值範圍，算B-A和A-C等比值為多少
    ellipse(+80+map(mouseX,0,width,-15,15),-80+map(mouseY,0,height,-15,15),30) //套入D-?或?-E，求出?值

    //嘴巴
    // if(mouseIsPressed)
    // {
      // fill(255,0,0)
      // arc(0,80,200,150,0,180)
    // }
    // else
    // {
      // fill(255,0,0)
      // arc(0,80,200,75,0,180)
    // }
    
    arc(0,80,200,75+micLevel*1000,0,180) //讓嘴巴會跟著麥克風聲音大小變大或變小

    fill(255)
    arc(0,79,200,50,0,180)
  pop()

}
