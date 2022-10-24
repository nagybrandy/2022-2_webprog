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
document.querySelector("button").disabled = true;
let points = 0
let hscores = []

if(localStorage.hscores){
  hscores = JSON.parse(localStorage.hscores)
}

for(elem of hscores){
  let li = document.createElement("li")
  li.innerHTML = `${elem.name} - ${elem.points}`
  console.log(elem.name, elem.points)
  document.querySelector("ol").append(li)
}
const hscorefield = document.querySelector("h3")

let bg = new Image();
let madarkep = new Image()
let colkep = new Image()
bg.src = 'src/bg.png'
madarkep.src = 'src/bird.png'
colkep.src = 'src/column.png'

let game = true
// FÜGGVÉNYEK
function render(){
  if(game){
    // töröljük az előző állapotot
    ctx.fillStyle = "lightblue"
    ctx.drawImage(bg,0,0, canvas.width, canvas.height)

    // madár kirajzolása
    ctx.fillStyle = "brown"
    ctx.drawImage(madarkep, madar.x, madar.y, madar.w, madar.h)

    // oszlopok kirajzolása
    ctx.fillStyle = "white"
    oszlopok.forEach(o => ctx.drawImage(colkep, o.x, o.y, o.w, o.h))

    // pontszám kiírása
    ctx.fillStyle = 'darkgreen'
    ctx.font = '25px Arial'
    ctx.fillText(`Points: ${points}`, 10, 30)
  }
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
  if(game) requestAnimationFrame(jatekciklus)
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
  game = false
  ctx.font = '100px Arial'
  ctx.fillText("Game Over", 30, 225)
}

function restart(e){
  let newrecord = new Object()
  newrecord.name = document.querySelector("input").value
  newrecord.points = points
  hscores.push(newrecord)

  hscores.sort((a, b) => a.points - b.points);
  hscores = hscores.reverse()
  document.querySelector("ol").innerHTML = ""
  for(elem of hscores){
    let li = document.createElement("li")
    li.innerHTML = `${elem.name} - ${elem.points}`
    console.log(elem.name, elem.points)
    document.querySelector("ol").append(li)
  }
  localStorage.hscores = JSON.stringify(hscores)
  console.log(hscores)
  madar.x = 50
  madar.y = canvas.width / 2
  madar.vy = 0
  game = true 

  oszlopok.shift()
  oszlopok.shift()
  elozoIdo = performance.now()
  e.target.blur()
  points = 0

  ujOszlop()
  jatekciklus()
}
document.querySelector("input").addEventListener("input", (e)=>{
  if(e.target.value.length >= 3) {
    document.querySelector("button").disabled = false
  } else {
    document.querySelector("button").disabled = true
  }
})

document.querySelector("button").addEventListener("click", restart)
// játék
ujOszlop()
jatekciklus()


// kiírni a posztszámítás x
// kiírni a gameover x
// kiírni a highscore x
// localStorageba a highscore x
// új játék gomb, ha rákattintunk, csak akkor induljon x
// alakzatokat kicserélni a rendes képekre X 