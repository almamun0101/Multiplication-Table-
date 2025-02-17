let numberOne = document.getElementById("1")
let output = document.getElementById("output")
let button = document.getElementById("submit")
const li = document.createElement("li")
let result;

button.addEventListener('click',function (){

  for (let i = 1; i <=10; i++) {
    // const element = array[i];
    output.innerHTML=i;
    console.log(i) 
    
  }

})
