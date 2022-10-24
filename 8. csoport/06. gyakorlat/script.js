const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

function draw(){
  ctx.fillStyle = "red"
  ctx.fillRect(10,10,30,50)

  ctx.strokeStyle = "#00ff00"
  ctx.strokeRect(50,50,50,50)

  ctx.beginPath()
  ctx.arc(100, 100, 20, 0, 2 * Math.PI);
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(150,150)
  ctx.lineTo(300,300)
  ctx.lineTo(300,150)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
}

// FLAPPY BIRD


// változók
const madar = {
  x: 50,
  y: canvas.height / 2,
  w: 30,
  h: 30,
  vy: 0, //px/s
  ay: 250 //px/s^2
}

let elozoIdo = performance.now()

const oszlopok = []
const res = 150
const o_seb = -200

let points = 0
let hscore = 0

let bird = new Image()
let col = new Image()
let bg = new Image()
bird.src = 'src/bird.png'
col.src = 'src/column.png'
bg.src = 'src/bg.png'

let game = true
let highscores = []
// függények
function render(){
  if(game){
    // az előző állapotot törölni
    ctx.fillStyle = "lightblue"
    ctx.drawImage(bg, 0,0, canvas.width, canvas.height)

    // madár kirajzolása
    ctx.fillStyle = "brown"
    ctx.drawImage(bird, madar.x, madar.y, madar.w, madar.h)

    // oszlopok kirajzolása
    ctx.fillStyle = "white"
    oszlopok.forEach(o => ctx.drawImage(col,o.x, o.y, o.w, o.h))

    // szöveg
    ctx.font = "25px Comic Sans"
    ctx.fillStyle = "darkgreen"
    ctx.fillText(`Pontok: ${points}`, 10,30)
  }
}

function update(dt){
  // ha beért az oszlop, új oszlop
  if(oszlopok[0].x < 0){
    oszlopok.shift()
    oszlopok.shift()
    ujOszlop()
    points++
  }

  //madár mozgása - madár értékeinek változtatása
  madar.vy += madar.ay * dt
  madar.y += madar.vy * dt

  // oszlop mozgatása
  oszlopok.forEach(o => o.x += o_seb * dt)
  if( madar.y < 0 ||
    madar.y > 400 ||
    utkozik(madar, oszlopok[0]) ||
    utkozik(madar, oszlopok[1])) gameOver()
}

function jatekCiklus(most = performance.now()){
  console.log("Start!")
  const dt = (most - elozoIdo) / 1000
  elozoIdo = most
  update(dt)
  render()
  if(game) requestAnimationFrame(jatekCiklus)
}

document.addEventListener("keydown", (e)=>{
  if(e.code === "Space") madar.vy = -250
})

function random(a,b){
  return Math.floor(Math.random() * (b-a+1)+a)
}

function ujOszlop(){
  const h = random(10, canvas.height/2)
  oszlopok.push(
    {
      x: canvas.width,
      y: 0,
      w: 30,
      h: h
    },
    {
      x: canvas.width,
      y: h + res,
      w: 30,
      h: canvas.height - (res + h)
    }
  )
}

function utkozik(a,b){
  return !(
    b.y + b.h < a.y ||
    a.x + a.w < b.x ||
    a.y + a.h < b.y ||
    b.x + b.w < a.x 
  )
}

function gameOver(){

  // kiírás
  ctx.fillStyle = "lightblue"
  ctx.drawImage(bg, 0,0, canvas.width, canvas.height)
  ctx.fillStyle = "darkgreen"
  ctx.font = "100px Arial"
  ctx.fillText("Game Over", 30,225)
  game = false
  if(points>hscore) hscore = points

}

document.querySelector("button").addEventListener("click", restart)

function restart(){
  game = true
  madar.x = 50
  madar.y = canvas.height/2
  madar.vy = 0
  elozoIdo = performance.now()
  oszlopok.shift()
  oszlopok.shift()

  let newrec = new Object()
  newrec.name = document.querySelector("input").value
  newrec.points = points
  highscores.push(newrec)
  console.log(highscores)
  points = 0
  ujOszlop()
  jatekCiklus()
}

// futtatás
ujOszlop()
jatekCiklus()

// kiírni a posztszámítás x
// kiírni a gameover x
// kiírni a highscoret x
// localStorageba a highscore x
// új játék gomb, ha rákattintunk, csak akkor induljon x
// alakzatokat kicserélni a rendes képekre x