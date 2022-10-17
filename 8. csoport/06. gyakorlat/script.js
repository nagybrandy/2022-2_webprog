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

// függények
function render(){
  // az előző állapotot törölni
  ctx.fillStyle = "lightblue"
  ctx.fillRect(0,0, canvas.width, canvas.height)

  // madár kirajzolása
  ctx.fillStyle = "brown"
  ctx.fillRect(madar.x, madar.y, madar.w, madar.h)

  // oszlopok kirajzolása
  ctx.fillStyle = "white"
  oszlopok.forEach(o => ctx.fillRect(o.x, o.y, o.w, o.h))
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
  const dt = (most - elozoIdo) / 1000
  elozoIdo = most
  update(dt)
  render()
  requestAnimationFrame(jatekCiklus)
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
  restart()
  if(points>hscore) hscore = points
  points = 0
  console.log("gameOver")
}

function restart(){
  madar.x = 50
  madar.y = canvas.height/2
  madar.vy = 0
  oszlopok.shift()
  oszlopok.shift()
  ujOszlop()
}

// futtatás
ujOszlop()
jatekCiklus()

// kiírni a posztszámítás
// kiírni a gameover
// kiírni a highscore
// localStorageba a highscore
// új játék gomb, ha rákattintunk, csak akkor induljon
// alakzatokat kicserélni a rendes képekre