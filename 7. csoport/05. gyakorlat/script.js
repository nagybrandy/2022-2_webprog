let obj = [
  {szerzo: "Béla", cim: "Gombgyár", ev: 2003},
  {szerzo: "Peti", cim: "Én", ev: 2020},
  {szerzo: "Brandy", cim: "Au", ev: 2022},
  {szerzo: "Webprog", cim: "Js", ev: 1995}
]

console.log(obj[0].szerzo)

generate()


function generate(){
  if(document.querySelector("table").innerHTML) document.querySelector("table").innerHTML = ""
  let heading = document.createElement("tr")
  for(cim in obj[0]){
    let th = document.createElement("th")
    th.innerHTML = cim
    heading.append(th)
  }
  heading.children[2].addEventListener("click", sortingYear)
  heading.children[1].addEventListener("click", sortingCim)
  document.querySelector("table").append(heading)

  for(e in obj){
    let konyv = obj[e]
    let row = document.createElement("tr")
    for(p in konyv){
      let td = document.createElement("td")
      td.innerHTML = konyv[p]
      row.append(td)
    }
    document.querySelector("table").append(row)
  }
}

function sortingYear(){
  obj.sort((a, b) => a.ev - b.ev);
  generate()
}

function sortingCim(){
  obj.sort((a, b) => a.cim < b.cim ? -1 : 1);
  generate()
}



// 2. feladat

let select = document.querySelector("select") 
let types = [...select.children].map(e => e.label)
let div = document.querySelector("div")

let select1 = document.createElement("select")
let select2 = document.createElement("select")
types.forEach(e=>{
  let option = document.createElement("option")
  option.innerHTML = e;
  option.value = e
  select1.append(option)
})
const flying = [...select.querySelector("optgroup[label='Flying pets'").children]
const _4legged = [...select.querySelector("optgroup[label='4-legged pets'").children]

select1.addEventListener("change", (e)=>{
    select2.innerHTML = ""
    if(e.target.value === "Flying pets") [...flying].forEach(e=> select2.append(e))
    else [..._4legged].forEach(e=> select2.append(e))
})

div.append(select1)
div.append(select2)