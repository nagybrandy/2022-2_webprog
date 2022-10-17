const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

// CANVAS ALAPOK


function draw() {
  ctx.fillStyle = "blue"
  ctx.fillRect(10,10,30,50)

  ctx.strokeStyle = "#00ff00"
  ctx.strokeRect(50,50,30,100)

  ctx.font = "25px Arial"
  ctx.fillText("HELo", 100, 100)

  ctx.beginPath()
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath()
  ctx.moveTo(200,200)
  ctx.lineTo(250,250)
  ctx.lineTo(300, 250)
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
  ay: 250
}

let elozoIdo = performance.now()

const oszlopok = []
const res = 150
const o_tav = 300
const o_seb = -200

let points = 0
let hscore = 0

// FÜGGVÉNYEK
function render(){
  // töröljük az előző állapotot
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
   // Oszlopok a végén?
   if(oszlopok[0].x < 0){
    oszlopok.shift()
    oszlopok.shift()
    ujOszlop()
    points++
   }

  // madár mozgása
  madar.vy += madar.ay * dt
  madar.y += madar.vy * dt

  // oszlopok mozgása
  oszlopok.forEach(o => o.x += o_seb * dt)
   if(isTheGameOver()) gameOver()
}

function isTheGameOver(){
  return madar.y < 0 ||
  madar.y > 400 ||
  utkozik(madar, oszlopok[0]) ||
  utkozik(madar, oszlopok[1])
}

function jatekciklus(most = performance.now()){
  const dt = (most - elozoIdo) / 1000
  elozoIdo = most
  update(dt)
  render()
  requestAnimationFrame(jatekciklus)
}

document.addEventListener("keydown", (e)=>{
  if(e.code === "Space") madar.vy = -250
})

function random(a,b){
  return Math.floor(Math.random() * (b-a+1) + a)
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
      h: canvas.height - res - h
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

function gameOver() {
  console.log("Game Over")
  if(hscore < points) hscore = points
  points = 0
  restart()
}

function restart(){
  madar.x = 50
  madar.y = canvas.width / 2
  madar.vy = 0

  oszlopok.shift()
  oszlopok.shift()

  ujOszlop()
}
// játék
ujOszlop()
jatekciklus()


// kiírni a posztszámítás
// kiírni a gameover
// kiírni a highscore
// localStorageba a highscore
// új játék gomb, ha rákattintunk, csak akkor induljon
// alakzatokat kicserélni a rendes képekre