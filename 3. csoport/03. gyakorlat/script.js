// 1. Az oldalon minden olyan hivatkozást tiltsunk le, amelyik nem ELTÉs címre mutat!

const cimek = document.querySelectorAll("a")

/* cimek.forEach(e => e.href.includes(".elte.hu") ? "" : e.addEventListener("click", (e)=>{
  e.preventDefault()
})) */

cimek.forEach(e => e.href.includes(".elte.hu") ? "" : e.classList.add("inaktiv"))

// 2. 

const div = document.querySelector("#t2div")
const hinput = document.querySelector("#height");
const winput = document.querySelector("#width");

div.style.height = hinput.value + "px";
div.style.width = winput.value + "px";

hinput.addEventListener("input", (e)=> {
  console.log(e)
  div.style.height = e.target.value + "px";
})

winput.addEventListener("input", (e)=> {
  console.log(e.target)
  div.style.width = e.target.value + "px";
})

// 3. TODOLIST

document.querySelector("ul").addEventListener("click", (e)=> {
  console.log(e.target)
 if(e.target.matches("li")) {
    //if(e.target.classList.contains("done")) e.target.classList.remove("done")
   // else e.target.classList.add("done")
   e.target.classList.toggle("done")
  }
})

// 4. 

const tablediv = document.querySelector("div#table")
let table = document.createElement("table")

for(let i = 0; i < 10; i++){
  let row = document.createElement("tr")
  for(let j = 0; j < 10; j++){
    let cell = document.createElement("td")
    row.append(cell)
  }
  table.append(row)
}
tablediv.append(table)

table.addEventListener("click", szinez)

function szinez(e) {
  if(e.altKey){
    let tds = e.target.parentElement.querySelectorAll("td")
    tds.forEach(e => e.style.backgroundColor = document.querySelector("#cinput").value)
  } //e.target.parentElement.style.backgroundColor = document.querySelector("#cinput").value
  if(e.target.matches("td")) e.target.style.backgroundColor = document.querySelector("#cinput").value
}