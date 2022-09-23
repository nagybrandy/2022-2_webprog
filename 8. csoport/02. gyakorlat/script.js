//1. Ha rákattintunk a gombra, akkor az XY-t cserélje ki a bemeneti mező TARTALMÁRA!
let t1 = document.querySelector("div#task1")

let t1_cim = t1.querySelector("h3")
let t1_in = t1.querySelector("input");
let t1_btn = t1.querySelector("button");

t1_btn.addEventListener("click", ()=>{
  console.log(t1_in.value)
  t1_cim.innerHTML = `Hello ${t1_in.value}!`;
})

// 2. A hello világ szövegeket változtassuk át pirosra, és egyre növekvő méretben jelenjenek meg!
console.log(document.querySelectorAll("div#task2 h3.t2"))
document.querySelectorAll("div#task2 h3.t2").forEach((e,i) => {
  console.log(e, i)
  e.style.color = "red";
  // font-size --> fontSize
  e.style.fontSize = `${i+5}px`;
})

// 3. Egy inputmezőben meg tudunk adni egy képnek a linkjét, és az oldalon lévő képet kicseréli arra egy gomb lenyomásakor!


let t3 = document.querySelector("div#task3")

let t3_kep = t3.querySelector("img")
let t3_in = t3.querySelector("input");
let t3_btn = t3.querySelector("button");

t3_btn.addEventListener("click", ()=>{
  t3_kep.src = t3_in.value;
})

//3.b Ha a kép fölé viszem a kurzort, legyen fekete-fehér

t3_kep.addEventListener("mouseover", ()=>{
  t3_kep.style.filter = "grayscale(100%)";
  t3_kep.style.width = "300px";
})

t3_kep.addEventListener("mouseleave", ()=>{
  t3_kep.style.filter = "grayscale(0%)";
  t3_kep.style.width = "100px";
})

//
let img = document.createElement("img")
img.src= "https://i.insider.com/60817ec5354dde0018c06960?width=700"

t3.append(img)