let obj = {
  kecske : "sajt",
  mókus : "makk",
  kutya : "mindent",
  sáskanő : "hímsáska",
  kukac : "alma"
}

let obj1 = [
  {
    name: "kecske",
    kaja: "sajt"
  },
  {
    name: "mókus",
    kaja: "makk"
  }
]


generate()
function generate(){
  if(document.querySelector("table")){
    document.querySelector("table").remove()
  }
  let table = document.createElement("table")
  table.innerHTML += "<tr><th>Állat</th><th>Kaja</th></tr>"
  
  for(kulcs in obj){
    let row = document.createElement("tr")
    let cellstext = `<td>${kulcs}</td><td>${obj[kulcs]}</td>`
    row.innerHTML = cellstext
    table.append(row)
  }
  document.querySelector("body").prepend(table)
  
  let ths = document.querySelectorAll("th")
  console.log(table, ths)
  ths[0].addEventListener("click", keysorting)
  ths[1].addEventListener("click", valuesorting)

}
function keysorting(){
  obj = keysort(obj)
  generate()
}

function keysort(obj){
  return Object.keys(obj).sort().reduce(
    (p,n) => {
      p[n] = obj[n];
      return p;}, {}
  )}


  function valuesorting(){
    obj = valuesort(obj)
    generate()
  }

  function valuesort(obj){
    return Object.fromEntries(
      Object.entries(obj).sort( (a,b) => {
        a[1] - b[1]
      } )    
    )  
  }

let entri = Object.fromEntries(
  Object.entries(obj).sort( (a,b) => {
    a[1] - b[1]
  } )    
) 
console.log("asd", valueSort(obj))

function valueSort(obj) {
  return Object.entries(obj).sort((a, b) => a[1] > b[1]).reduce(
      (p,[key, value]) => {
          p[key] = obj[key]
          return p
          }
      , {}
  )
}




// 2. 

let groups = [...document.querySelectorAll("optgroup")].map(e => e.label)
console.log(groups)

let div = document.querySelector("#new")
let select1 = document.createElement("select")

groups.forEach(e => {
  option = document.createElement("option")
  option.value = e
  option.innerHTML = e
  select1.append(option)
})

div.append(select1)

let flying = document.querySelector("optgroup[label='Flying pets']").children
let _4legged = document.querySelector("optgroup[label='4-legged pets']").children

let select2 = document.querySelector("#select2")

select1.addEventListener("change", (e)=>{
  select2.innerHTML = ""
  if(e.target.value === 'Flying pets'){
    [...flying].forEach(e => select2.append(e))
  } else {
    [..._4legged].forEach(e => select2.append(e))
  }
})



