let numberOne = document.getElementById("number1")
let output = document.getElementById("output")
let button = document.getElementById("submit")
let h = document.getElementById("heading")
let result;

button.addEventListener('click', function () {
  // let value = numberOne.value
  let tr = document.createElement("TR")
  let td = document.createElement("TD")
  let text = document.createTextNode("Mamun")

  
  td.innerHTML= text
  tr.appendChild(td)
  output.appendChild(tr)

  // console.log("Mamun")
  output.innerHTML =tr;



  for (let i = 1; i <= 10; i++) {
  }

})