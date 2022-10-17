const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")



// MIT TUD A CANVAS?

function draw(){
  ctx.fillStyle = "#00FF00"
  ctx.strokeStyle = "red"
  ctx.fillRect(10,10,20,50)
  ctx.strokeRect(10,10,20,50)
  ctx.beginPath()
  ctx.moveTo(20,30)
  ctx.lineTo(50,60)
  ctx.closePath()
  // ctx.arc
  // ctx.ellipse
  ctx.stroke()
}

// A JÁTÉK VÁLTOZÓI
const madar = {
  x: 50,
  y: canvas.height / 2,
  w: 30,
  h: 50,
  vy: 0, // px/s
  ay: 250
}

const oszlopok = []
const res = 150
const o_tavolsag = 300
const o_sebesseg = -200

let points = 0
let hscore = 0

let elozoIdo = performance.now()
ujOszlop()
// FÜGGVÉNYEK
function render(){ 
  ctx.fillStyle = "lightblue"
  ctx.fillRect(0,0,canvas.width, canvas.height)
  // kirajzolja a képernyőre az aktuális állapotot
  ctx.fillStyle = "brown"
  ctx.fillRect(madar.x, madar.y, madar.w, madar.h)
  ctx.fillStyle = "white"
  oszlopok.forEach(o => ctx.fillRect(o.x, o.y, o.w, o.h))
}

function update(dt) {
  
  // oszlopok beérnek, új oszlopok létrehozása, +1 pont
  if(oszlopok[0].x < 0){
    oszlopok.shift()
    oszlopok.shift()
    ujOszlop()

    points++
  }

  // madár esése
  madar.vy += madar.ay * dt
  madar.y += madar.vy * dt

  // oszlop mozgása
  oszlopok.forEach(o => o.x += o_sebesseg * dt)

  // gameover
  if(madar.y < 0 || madar.y > 400) gameOver()
  if(utkozik(madar, oszlopok[0])) gameOver()
  if(utkozik(madar, oszlopok[1])) gameOver()
}

function jatekciklus(most = performance.now()) {
  const dt = (most-elozoIdo) / 1000
  elozoIdo = most

  update(dt)
  render()

  requestAnimationFrame(jatekciklus)
}

document.addEventListener("keydown", (e)=>{
  if(e.code === 'Space') madar.vy = -250
})

function random(a,b) {
  return Math.floor(Math.random()*(b-a+1) + a)
}

function ujOszlop(){
  const h = random(10, canvas.height / 2)
  oszlopok.push(
    {
      x: canvas.width -30,
      y:0,
      w:30,
      h: h
    },
    {
      x: canvas.width -30,
      y: h + res,
      w:30,
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


function gameOver(){
  console.log("GameOver")
  restart()
}

function restart(){

  madar.x = 50
  madar.y = canvas.height / 2,
  madar.vy = 0

  oszlopok.shift()
  oszlopok.shift()
  ujOszlop()

  if(points > hscore) hscore = points
  points = 0

  elozoIdo = performance.now()
}

// JÁTÉK
jatekciklus()


// localStorageba elmenteni a highscoret
// kiírja pontszámot
// kicserélni képekre az alakzatokat
// kiírni a highscoret
// Játék végét a canvasen jelezni, és új játékra kattintva induljon újra