// 1. Egy gomb megnyomására írd ki a h3-be írjuk ki, hogy Helló + input mező szövegét!

let t1 = document.querySelector("#task1")
let h2 = t1.querySelector("h2")

t1.querySelector("button").addEventListener("click", ()=>{
  console.log("asd")
  let t1val = t1.querySelector("input").value
  console.log(t1val)
  t1.querySelector("h3").innerHTML = `Hello ${t1val}!`
})

// 2. Változtassuk meg a Hello világ címek méretét egyre növekvőre!

document.querySelectorAll("div#task2 h3").forEach((e,i) => {
  e.style.color = "red"
  e.style.fontSize = `${(i+1)*3}px`;
})

// 3. Egy szöveges beviteli mezőben legyen lehetőség megadni egy interneten elérhető kép URL-jét. Egy mellette lévő gombra kattintva jelenítsd meg a képet a dokumentumban!

let t3 = document.querySelector("#task3")
let img = t3.querySelector("img")

t3.querySelector("button").addEventListener("click", ()=>{
  img.src = t3.querySelector("input").value;
})

// 3.b Ha ráviszem a kurzort a képre, legyen fekete-fehér, ha leviszem róla, már ne legyen az.

img.addEventListener("mouseover", ()=> {
  img.style.filter = "grayscale(100%)"
  img.style.width = "300px";
})

img.addEventListener("mouseout", ()=> {
  img.style.filter = "grayscale(0%)"
  img.style.width = "100px";
})

// 4. Adott egy három oszlopból álló táblázat! A táblázat felett 3 szöveges beviteli mezővel és egy gombbal. A gombra kattintva a 3 beviteli mező értéke új sorként szúródjon be a táblázatba.

document.querySelector("div#task4 button").addEventListener("click", (e)=>{
  let row = document.createElement("tr")
  //console.log(row)
  e.target.parentElement.querySelectorAll("input").forEach(e => {
      //row.innerHTML += `<td>${e.value}</td>`
      let cell = document.createElement("td")
      cell.innerHTML = e.value
      row.append(cell)
    })
    document.querySelector("table").append(row)
})