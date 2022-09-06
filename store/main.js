const URL = "./info.json";

fetch(URL)
.then(respuesta => respuesta.json())
.then(respuesta =>{
console.log(respuesta);
let i = 1;
// Creacion de las cards
respuesta.map(elemento =>{
  let caja_principal = document.getElementById("main");  
    let nombre = elemento.nombre;
let descripcion = elemento.descripcion;
let stock = elemento.stock;
let precio = elemento.precio;
let imagen = elemento.imagen;
let card = `
<div id="card${i}" class="d-flex justify-content-center align-items-center cards_h">
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
              <button id="btnadd_${i-1}" class="me-4 caja_mas_class rounded">+</button>
            </div>

          </div>
        </div>
          `
i++;
caja_principal.innerHTML+=card;
});
      // boton like
    let boton_like = document.querySelectorAll(".like_i");
    let circulo_like = document.querySelectorAll(".like");
    let carrito_compras = [];
    boton_like.forEach(element =>{
     element.addEventListener("click", () =>{
        element.classList.toggle("like_i_rojo");
        circulo_like.forEach(element =>{
          element.classList.toggle("like_rojo")});
     });  
    });
     // boton de agregar elemento
     let boton_agregar = document.querySelectorAll(".caja_mas_class");
     boton_agregar.forEach(elemento =>{
      elemento.addEventListener("click", () =>{
         //console.log(carrito_compras);
         console.log("elemento");
         console.log(elemento);
         // Agregar al carrito_compras
         let bttn_index = elemento.id.split("_")[1];
         console.log(elemento.id);
         console.log(bttn_index);
         carrito_compras.push(respuesta[bttn_index]);
         console.log(carrito_compras);
         elemento.classList.toggle("caja_activa_class");
     });   
     }); 
     
     // click en carrito
        let carrito = document.getElementById("b_tienda_a");
        let li_carrito = document.getElementById("b_tienda");
        let carrito_section = document.getElementById("carrito_compras_section");
        let home = document.getElementById("b_home_a");
        let li_home = document.getElementById("b_home");
        let home_section = document.getElementById("main");
        let p_section_card = document.querySelectorAll(".cards_h");
        let pago = document.getElementById("b_payment");
        let section_pago = document.getElementById("pagar");
        let section_pago_1 = document.getElementById("pagar_section1");
        //let pago = document.getElementById("pagar");   

        carrito.addEventListener("click", () => {
          if (carrito_compras.length == 0 )
          {alert("selecciona al menos un articulo")}
          else if(carrito_compras.length > 1){
        carrito_section.classList.add("carrito_compras_section_class", "d-flex", "flex-column", "justify-content-start", "align-items-center");
        carrito_section.classList.remove("hidden");
        //pago.classList.add("hidden"); 
        p_section_card.forEach(element =>{
        element.classList.add("hidden");
        element.classList.remove("d-flex", "justify-content-center", "align-items-center");
      });
      section_pago.classList.remove("d-flex", "flex-column", "justify-content-around", "align-items-center", "pagar_section_class");
        section_pago.classList.add("hidden"); 
        section_pago_1.classList.remove("pagar_section1_class", "rounded", "d-flex", "justify-content-around", "align-items-center");
        section_pago_1.classList.add("hidden");
        home_section.classList.add("hidden");
        console.log(carrito_compras);
        carrito_compras.forEach((element,index) =>{
          let nombre_carrito = element.nombre;
          let descripcion_carrito = element.descripcion;
          let imagen_carrito = element.imagen;
         // let stock_carrito = element.stock;
          let precio_carrito = element.precio;
          let elementos_carrito = `
          <div id="contenedor_${index}" class="container_carrito_class">
          <div class="container_carrito_imagen d-flex flex-column justify-content-center align-items-center">
            <div class="container2_carrito_imagen color1_class rounded d-flex flex-column justify-content-center align-items-center">
            <img class="carrito_imagen" src="${imagen_carrito}">
            </div>
          </div>
          <div class="container_nombre d-flex flex-column justify-content-center">
          <h3 class="titulo">${nombre_carrito}</h3>
        </div>
        <div id ="precio_${index}" class="container_precio d-flex flex-column justify-content-center">
          <h3 class="precio_carrito">$${precio_carrito}</h3>
        </div>
        <div class="container_descripcion d-flex flex-column justify-content-center align-items-center">
          <p>${descripcion_carrito}</p>
        </div>
        <div id="botones_${index}" class="container_cantidad d-flex justify-content-around align-items-center"> 
          <button disabled=true id="bttnmenos_${index}" class="btn btn-outline-success menos">-</button><label class="cantidad">1</label><button id="bttnmas_${index}" class="btn btn-success mas">+</button>
        </div>
        <div class="eliminar_i d-flex justify-content-center align-items-center">
          <i id="bote_${index}"class="fa-solid fa-trash bote_basura_i"></i>
        </div>
        </div>
          `
          carrito_section.innerHTML +=  elementos_carrito;
         let menos = document.querySelectorAll(".menos");
         let mas = document.querySelectorAll(".mas");
         let label = document.querySelectorAll(".cantidad");
         let precio =document.querySelectorAll(".precio_carrito");
         /// boton menos 
         menos.forEach(elemento =>{
          let index_elemento = elemento.id.split("_")[1];
          let label2 = label[index_elemento];
         elemento.addEventListener("click",() =>{
          label2; 
          console.log(label[index_elemento]);
          index_elemento;
          let precio_final = carrito_compras[index_elemento].precio;
          let cantidad_carrito = parseInt(label2.textContent);
          cantidad_carrito--;
          if (cantidad_carrito == 1){
            elemento.disabled = true;
            let suma2 = mas[index_elemento];
            suma2.disabled = false;
            label2.textContent = cantidad_carrito;
          }
          else if(cantidad_carrito >1 ){
            elemento.disabled = false;
            let suma2 = mas[index_elemento];
            suma2.disabled = false;
           cantidad_carrito;
          console.log(cantidad_carrito);
          label2.textContent = cantidad_carrito;
          carrito_compras[index_elemento].cantidad=cantidad_carrito;
          cantidad_a_pagar = precio[elemento.parentElement.id.split("_")[1]];
          let total_pagar2 = cantidad_carrito * precio_final;
          cantidad_a_pagar.textContent = total_pagar2;
          carrito_compras[index_elemento].pagar =total_pagar2;
        };});});
         //boton_mas
         mas.forEach(element =>{
          let index_elemento = element.id.split("_")[1];
          let menos_2 = menos[index_elemento];
          let label2 = label[index_elemento]; 
          let cantidad_carrito = parseInt(label2.textContent);
         element.addEventListener("click",() =>{
          console.log("cantidad de stock");
          console.log(carrito_compras[index_elemento].stock);
          cantidad_carrito++;
          console.log("cantidad solicitada");
          console.log(cantidad_carrito);
          if (cantidad_carrito == carrito_compras[index_elemento].stock){
            menos_2.disabled = false;
            element.disabled = true;  
          label2.textContent = cantidad_carrito;
            //cantidad_carrito = carrito_compras[bttn_index2].stock;
          }
          else{
          //element.disabled = true;
          index_elemento;
          menos_2;
          menos_2.disabled = false;
          let precio_final = carrito_compras[index_elemento].precio;
          label2 = label[index_elemento]; 
          console.log(label2);
          label2.textContent = cantidad_carrito;
          carrito_compras[index_elemento].cantidad=cantidad_carrito;
          console.log(carrito_compras[index_elemento]);
          let cantidad_a_pagar = precio[element.parentElement.id.split("_")[1]];
          let total_pagar2 = cantidad_carrito * precio_final;
          cantidad_a_pagar.textContent = total_pagar2;
          carrito_compras[index_elemento].pagar =total_pagar2;
        }
  
        ;}); });
        })
        let bote_basura = document.querySelectorAll(".bote_basura_i");
        let secciones_carrito = document.querySelectorAll(".container_carrito_class");
        bote_basura.forEach(bote => {
          
          bote.addEventListener("click", () =>{
            let indexb = bote.id.split("_")[1];;
           delete(carrito_compras[indexb]);
           secciones_carrito[indexb].textContent=""; 
           console.log(carrito_compras);
          });
        });
 } });
        home.addEventListener("click", () => {
          carrito_section.innerHTML="";
          li_home.click();
        carrito_section.classList.remove("carrito_compras_section_class", "d-flex", "flex-column", "justify-content-center", "align-items-center");
        carrito_section.classList.add("hidden");
        home_section.classList.remove("hidden");
        section_pago.classList.remove("d-flex", "flex-column", "justify-content-around", "align-items-center", "pagar_section_class");
        section_pago.classList.add("hidden"); 
        section_pago_1.classList.remove("pagar_section1_class", "rounded", "d-flex", "justify-content-around", "align-items-center");
        section_pago_1.classList.add("hidden");
        p_section_card.forEach(element =>{
        element.classList.add("d-flex", "justify-content-center", "align-items-center");
        element.classList.remove("hidden");
        });

        
});
        // Payment section
        
        pago.addEventListener("click", () => {
          if (carrito_compras.length == 0 )
          {alert("selecciona al menos un articulo")}
          else if(carrito_compras.length > 1){
        section_pago.classList.remove("hidden");
        section_pago.classList.add("d-flex", "flex-column", "justify-content-around", "align-items-center", "pagar_section_class");
        section_pago_1.classList.remove("hidden");
        section_pago_1.classList.add("pagar_section1_class", "rounded", "d-flex", "justify-content-around", "align-items-center");
        carrito_section.innerHTML="";
        carrito_section.classList.remove("carrito_compras_section_class", "d-flex", "flex-column", "justify-content-center", "align-items-center");
        carrito_section.classList.add("hidden");
        home_section.classList.add("hidden");
        p_section_card.forEach(element =>{
        element.classList.remove("d-flex", "justify-content-center", "align-items-center");
        element.classList.add("hidden");
          });
          let nombres_productos = document.getElementById("lista_productos");
          let cantidad_productos = document.getElementById("cantidad_productos");
          let totales = document.getElementById("total_pagar_productos");
          let subtotal_final2 = document.getElementById("sub_total_final2");
          let envio = document.getElementById("envio");
          let final_final = document.getElementById("monto_total");
          let text_code = document.getElementById("code");
          let label_descuento = document.getElementById("descuento");
          const envio_pago = 50;
          let descuento = 1;
          label_descuento.textContent ="0"; 
          console.log(descuento);    
          carrito_compras.forEach(articulo =>{
          let section_pagar =  `
          <li class="lista">${articulo.nombre}</li>
           `;
          nombres_productos.innerHTML += section_pagar;
          });
          carrito_compras.forEach(articulo =>{
            let section_cantidad =  `
            <li class="lista">${articulo.cantidad}</li>
             `;
            cantidad_productos.innerHTML += section_cantidad;
            });
            carrito_compras.forEach(articulo =>{
              let section_total =  `
              <li class="lista">$ ${articulo.pagar}</li>
               `;
              totales.innerHTML += section_total;
              });
           console.log(carrito_compras[1].pagar);
           let sub_total = 0;
           carrito_compras.forEach(articulo =>{
            sub_total += articulo.pagar;
           });
           console.log(sub_total);
           subtotal_final2.innerHTML = sub_total;
           envio.textContent = envio_pago;
           let final_total = (sub_total + envio_pago )* descuento;
           final_final.textContent = final_total;
           console.log(descuento);

           text_code.addEventListener("input", () => {
            if (text_code.value == "DISCOUNT10"){
              descuento = .90;
              console.log(descuento);
              label_descuento.textContent = "-10%";
              envio.textContent = envio_pago;
           let final_total = (sub_total + envio_pago )* descuento;
           final_final.textContent = final_total;
            }
            else if(text_code.value == ""){
              descuento = 1;
              label_descuento.textContent = "0";
              let final_total = (sub_total + envio_pago )* descuento;
           final_final.textContent = final_total;
            }
          }) ; 

        }});
        let reinicio = document.getElementById("bttn_final");
        reinicio.addEventListener("click", () => {
          location.reload();
        });
});