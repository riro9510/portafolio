const URL = "./info.json";

fetch(URL)
.then(respuesta => respuesta.json())
.then(respuesta =>{
console.log(respuesta);
let i = 1;
respuesta.map(elemento =>{
  let caja_principal = document.getElementById("main");  
    let nombre = elemento.nombre;
let descripcion = elemento.descripcion;
let stock = elemento.stock;
let precio = elemento.precio;
let imagen = elemento.imagen;
let card = `
<div id="card${i}" class="d-flex justify-content-center align-items-center">
<div class="d-flex flex-column justify-content-start align-items-center container_class container${i}_class">
            <div class="container_img_label d-flex flex-column justify-content-start align-items-center color${i}_class">
              <div class="container_img">
                <img class="imagen" src="${imagen}">
              </div>
              <div class="container_label_class d-flex justify-content-end">
              <label class="texto">En Stock &nbsp;${stock}&nbsp;</label>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-around align-items-center cuerpo">
            <div class="d-flex justify-content-between align-items-center cuerpo1">
              <h4 class="ms-4">${nombre}</h4> 
              <div class="d-flex justify-content-center align-items-center like me-4 rounded-circle"><i class="fa-solid fa-heart like_i"></i></div>
            </div>
            <div class="d-flex justify-content-evenly align-items-center cuerpo2">
              <p class="color_text">${descripcion}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center cuerpo1">
              <h1 class="ms-4">${precio}</h1> 
              <button class="me-4 caja_mas_class rounded">+</button>
            </div>
          </div>

          </div>
        </div>
          `
i++;
caja_principal.innerHTML+=card;
});

    let boton_like = document.querySelectorAll(".like_i");
    let circulo_like = document.querySelectorAll(".like");
    let carrito_compras = []
    boton_like.forEach(element =>{
     element.addEventListener("click", () =>{
        circulo_like.forEach(element =>{
        element.classList.toggle("like_rojo")});
        element.classList.toggle("like_i_rojo");
     });  
    let boton_agregar = document.querySelectorAll(".caja_mas_class");
    boton_agregar.forEach(elemento =>{
     elemento.addEventListener("click", () =>{
      carrito_compras.push(i);
        console.log(carrito_compras);
        elemento.classList.toggle("caja_activa_class");
    });   
    }); 
    });
})