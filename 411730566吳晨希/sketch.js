var song
var songIsplay = false
var amp

function preload(){
	song = loadSound("NIKI - lowkey (Official Visualizer).mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  background(255);
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  push()
  ellipse(windowWidth/2,windowHeight*3/11,80)
  pop()
  push()
  beginShape()
    fill("#D3D3D3")
    translate(width/2,height/2)
    ellipse(0,0,400)  
    fill("#E6C3C3")
    ellipse(0,10,150) 
    fill("#E6C3C3")
    ellipse(-100,-230,100)
    fill("#E6C3C3")
    ellipse(100,-230,100)
    fill("#E60000")
    ellipse(0,0,50) 
    fill("#FFFFFF")
    ellipse(10,-8,15)
    fill("#FFFFFF")
    ellipse(-60,-60,100)
    fill("#000000")
    ellipse(-90+mouseX/20,-90+mouseY/20,20)
    noFill()
    fill("#FFFFFF")
    ellipse(60,-60,100)
    fill("#000000")
    ellipse(50+mouseX/50,-75+mouseY/50,20)
    
    fill("#000000")
    arc(0,100,200,100,0,180)
    fill(255)
    
    
    noFill()
  pop()
}

music_btn = createButton("音樂跳舞")
music_btn.position(10,10)
music_btn.size(200, 70);
music_btn.style('background-color', 'black');
music_btn.style('font-size', '35px');
music_btn.style('color', 'white');
music_btn.mousePressed(music_btn_pressed)

 mouse_btn  = createButton("暫停")
  mouse_btn.position(150,10)
  mouse_btn.size(200,70);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '35px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

Speech_btn  = createButton("語音辨識(音樂跳舞/暫停)")
  Speech_btn.position(150,10)
  Speech_btn.size(150,70);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '35px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)


if(songIsplay){
    
    m_x =map(vol,0,1,0,width) 
    m_y= map(vol,0,1,0,height)
    ellipse()
  }
  else
  if(mosueIsplay)
  {
    m_x = mouseX
    m_y= mouseY
    ellipse(map(vol))

  }
function music_btn_pressed(){
  song.play()
  songIsplay = true
  amp=new p5.Amplitude()  
  music_btn.style('background-color', '#ffafcc');
  mouse_btn.style('background-color', 'black');
}
function mouse_btn_pressed(){
  song.pause()
  songIsplay = false
  mouse_btn.style('background-color', '#ffafcc');
  music_btn.style('background-color', 'black');
  
}
function Speech_btn_pressed(){
  music_btn.style('background-color', 'black');
  mouse_btn.style('background-color', 'black');
  Speech_btn.style('background-color', '#ffafcc');
  myRec.onResult = showResult;
  myRec.start();  
}
