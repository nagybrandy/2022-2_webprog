// 1. feladat: NÉV  kiírása a címbe input mezőből!

let t1value = document.querySelector("#task1")

document.querySelector("#t1but").addEventListener("click", () => {
    document.querySelector("h3").innerHTML = `Hello ${t1value.value}!`;
})

//2. Kérj be egy számot, és annyiszor írd ki egymás alá egyre növekvő betűméretekkel a "Hello világ!" szöveget! (szöveges beviteli mező, gomb)

let task2 = document.querySelectorAll("h3.nov")
console.log(task2)

task2.forEach((e,i) => {
  let size = (i+1) * 7.5
  e.style.fontSize = size + "px";
})

// 3. Egy szöveges beviteli mezőben legyen lehetőség megadni egy interneten elérhető kép URL-jét. Egy mellette lévő gombra kattintva jelenítsd meg a képet a dokumentumban!
let t3value = document.querySelector("#task3")
let kep = document.querySelector("img")

document.querySelector("#t3but").addEventListener("click", () => {
    kep.src = t3value.value;
})

kep.addEventListener("mouseover", () => {
  kep.style.filter = "grayscale(100%)"
  kep.style.width = "300px";
})
kep.addEventListener("mouseout", () => {
  kep.style.filter = "grayscale(0%)"
  kep.style.width = "100px";
})

// 4. Adott egy három oszlopból álló táblázat! A táblázat felett 3 szöveges beviteli mezővel és egy gombbal. A gombra kattintva a 3 beviteli mező értéke új sorként szúródjon be a táblázatba.

document.querySelector("#t4btn").addEventListener("click", ()=>{
  document.querySelector("table").innerHTML += "<tr style='border: 1px solid green'><td>---</td><td>---</td><td>---</td></tr>";
  let row = document.createElement("tr")
  document.querySelectorAll(".t4in").forEach(e => {
    let cell = document.createElement("td")
    cell.innerHTML = e.value;
    row.append(cell)
  })
  console.log(row)
  document.querySelector("table").append(row);
})
