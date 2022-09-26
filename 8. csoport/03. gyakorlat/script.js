// 1. Az oldalon minden olyan hivatkozást tiltsunk le, amelyik nem ELTÉs címre mutat!

const links = document.querySelectorAll("a")

links.forEach(e => e.href.includes("elte.hu") ? "" : e.classList.add("inaktiv"))

// Oldjuk meg, hogy a csúszkák segítségével változzon a div mérete!

const div = document.querySelector("#t2div")
const hinput = document.querySelector("#height")
const winput = document.querySelector("#width")

div.style.height = hinput.value + "px";
div.style.width = winput.value + "px";

hinput.addEventListener("input", ()=>{
  div.style.height = hinput.value + "px";
})

winput.addEventListener("input", ()=>{
  div.style.width = winput.value + "px";
})

// 3. TO-DO-LIST

document.querySelector("ul").addEventListener("click", (e)=> {
  if(e.target.matches("li")){
    //if(e.target.classList.contains("done")) e.target.classList.remove("done")
    //else e.target.classList.add("done")
    e.target.classList.toggle("done")
  } 
})

// 4. 

const tablediv = document.querySelector("#table")
const cinput = document.querySelector("#cinput")

const table = document.createElement("table")

tablediv.append(table)

for(let i = 0; i < 10; i++){
  const row = document.createElement("tr")
  for(let j = 0; j < 10; j++){
    const cell = document.createElement("td")
    // cell.innerHTML = 10*i + j+1
    row.append(cell)
  }
  table.append(row)
}

table.addEventListener("click", (e)=> {
  if(e.target.matches("td")) {
    if(e.altKey) 
    e.target.parentElement.querySelectorAll("td")
    .forEach(e => e.style.backgroundColor = cinput.value)

    else e.target.style.backgroundColor = cinput.value;
  }
  
})




