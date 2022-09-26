// 1. AZ OLDALON MINDEN OLYAN HIVATKOZÁST TILTSUNK LE, AMELYIK NEM ELTÉS CÍMRE MUTAT!

const links = document.querySelectorAll("a")

links.forEach(e => e.href.includes("elte.hu") ? "" : e.classList.add("inaktiv"))

// 2. 

const t2div = document.querySelector("#t2div")
const hinput = document.querySelector("#height")
const winput = document.querySelector("#width")

t2div.style.height = hinput.value + "px";
t2div.style.width = winput.value + "px";

/* hinput.addEventListener("change", ()=> {
  t2div.style.height = hinput.value + "px";
}) */

hinput.addEventListener("input", ()=> {
  t2div.style.height = hinput.value + "px";
})
winput.addEventListener("input", ()=> {
  t2div.style.width = winput.value + "px";
})

// 3. TO-DO-LIST

document.querySelector("ul").addEventListener("click", (e)=>{
  console.log(e.target)
  if(e.target.matches("li")){
    /* if(!e.target.classList.contains("done")) {
     e.target.classList.add("done")
    } else {
     e.target.classList.remove("done")
    }*/
    e.target.classList.toggle("done")
  }
})

// 4.

const div = document.querySelector("#table")
const table = document.createElement("table")
const color = document.querySelector("#cinput")

for (let index = 0; index < 10; index++) {
  let row = document.createElement("tr")
  for (let jindex = 0; jindex < 10; jindex++) {
    let cell = document.createElement("td")
    row.append(cell)
  }
  table.append(row)
}
div.append(table)

table.addEventListener("click", szinez)

function szinez(e){
  if(e.target.matches("td")){
    if(e.altKey) e.target.parentElement.querySelectorAll("td").forEach(e=> e.style.backgroundColor = cinput.value)
    else e.target.style.backgroundColor = cinput.value;
  }
}

// Akasztófa

// Gyűjtsétek azokat, amire már tippeltetek
// Vizuálisan megjelenítve a hibák száma képpel, svg-vel
// Hibák száma szöveggel is látszódjon
// 5 random szó közül válasszolon az oldal betöltésekor 1 szót
