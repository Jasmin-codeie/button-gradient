let input1 = document.querySelector("#color");
let input2 = document.querySelector("#color2");
let button = document.querySelector("button");

function setBackground() {
  
  let inputs = document.querySelectorAll("input");
  let colors = [];
  
  inputs.forEach(function (input){
    colors.push(input.value);
   
  });
    document.body.style.background = "linear-gradient(" +  colors.join(',')+ ")";
};


input1.addEventListener("input", setBackground
);

input2.addEventListener("input", setBackground
);


setBackground();

button.addEventListener("click", addInput);
function addInput(){
  let input = document.createElement("input");
  input.type = "color";
  document.body.appendChild(input);
  input.oninput = setBackground;
  setBackground();
};