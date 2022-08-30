let entrada1 = document.getElementById("word");
let palabraAlreves = document.getElementById("drow");
let button = document.getElementById("button");
let output = document.getElementById("confirmacion");

button.addEventListener("click", function() {
    let largo = entrada1.value.split(" ");
    console.log(largo.length);
    let arreglo = entrada1.value.split(" ").join("").split("");
  let arreglo2 = arreglo.slice().reverse();
    
  palabraAlreves.value = arreglo.join("");

  if(arreglo.join("").toLowerCase()  == arreglo2.join("").toLowerCase()) {
    output.textContent = "Es palindromo";
  } else {
    output.textContent = "No es palindromo";
  }
});