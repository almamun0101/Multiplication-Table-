let numberOne = document.getElementById("number1")
let output = document.getElementById("output")
let button = document.getElementById("submit")
let h = document.getElementById("heading")

numberOne.addEventListener("keydown", function (event) {
 if(event.key=="Enter"){
  multiple()
 }

});
button.addEventListener('click', multiple)
function multiple() {
  let value = numberOne.value;
  if (!value) {
    alert("Please Input A Number For Multiple")
  } else {
    output.innerHTML = ""
    for (let i = 1; i <=10; i++) {
      let li = document.createElement("li")
      let result = `${value} x ${i} = ${value*i}`
      li.innerHTML = result
      output.appendChild(li)
    }
  }

}