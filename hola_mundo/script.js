
nombre = prompt("¿Cúal es tu nombre?")
const saludo = document.getElementById("saludo");
const principal = document.getElementById("principal")
const instrucciones = document.getElementById("instrucciones")
saludo.addEventListener("click", () => {
saludo.classList.add("cwhite");
saludo.textContent="Hola "+ nombre ;
instrucciones.textContent="Continua dando click en el texto";
  instrucciones.classList.add("cwhite")
//principal.classList.add("color2");
     var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16); 
  principal.style.backgroundColor=myRandomColor;
  console.log(myRandomColor);
  saludo.addEventListener("click", () =>{
    saludo.classList.remove("cwhite")
    instrucciones.classList.remove("cwhite")
    saludo.textContent="Este script dice:"
    //principal.classList.add("color3")
     var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  principal.style.backgroundColor=myRandomColor;
    console.log(myRandomColor);
    saludo.addEventListener("click", () => {
      saludo.textContent="Hola mundo";
      //principal.classList.add("color4")
     var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  principal.style.backgroundColor=myRandomColor;
      console.log(myRandomColor);
      instrucciones.textContent="fin del script";
      saludo.addEventListener("click", () =>{
      
        location.reload();
      })
    })
  })

})
