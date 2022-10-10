let adatok = new Object();

[...document.querySelector("select").children]
.forEach(e => {
  let allatok = [...e.querySelectorAll("option")].map(e => e.innerHTML)
  adatok[e.label] = allatok
});


// HOZZÁADÁS

let select1 = document.createElement("select")
let select2 = document.createElement("select")

console.log(adatok)
for(elem in adatok){
  let option = document.createElement("option")
  option.innerHTML = elem
  select1.append(option)
}

document.querySelector("div").append(select1)
document.querySelector("div").append(select2)

select1.addEventListener("change", (e)=>{
  select2.innerHTML = "";
  adatok[e.target.value].forEach(k=>{
    let option = document.createElement("option")
    option.innerHTML = k
    select2.append(option)
  })
})
