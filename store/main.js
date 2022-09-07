const URL = "./info.json";
let screen = document.documentElement.clientWidth;
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
              <h1 class="ms-4">$${precio}</h1> 
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
         elemento.classList.toggle("caja_activa_class");
         let bttn_value = elemento.classList[3]
         if ( bttn_value == "caja_activa_class" ){
          carrito_compras.push(respuesta[bttn_index]); 
          console.log(carrito_compras);
          let agregado = `<i class="fa-solid fa-check"></i><span>Added</span>`;
          elemento.innerHTML= agregado;
          console.log("aqui no");
         }
         else{
          let quitar_carrito = carrito_compras.indexOf(respuesta[bttn_index]);
          carrito_compras.splice(quitar_carrito,1);
          elemento.textContent ="+";
          console.log("aqui si");
          console.log(carrito_compras);
         }
         
         console.log(carrito_compras);
         
     });   
     }); 
     
     // click en carrito
     let nombres_productos = document.getElementById("lista_productos");
          /*let cantidad_productos = document.getElementById("cantidad_productos");*/
          let totales = document.getElementById("total_pagar_productos");
        let titulo_general = document.getElementById("titulo_nav");
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
          else if(carrito_compras.length >= 1){
          //console.log(caja_principal.classList);
        carrito_section.classList.add("carrito_compras_section_class", "d-flex", "flex-column", "justify-content-start", "align-items-center");
        carrito_section.classList.remove("hidden");
        //pago.classList.add("hidden"); 
        titulo_general.textContent="Mi carrito";
        nombres_productos.textContent="";
       /* cantidad_productos.textContent ="";*/
         totales.textContent ="";
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
         menos.forEach((elemento,index) =>{
         elemento.addEventListener("click",() =>{
          // se obtiene el precio el precio del arreglo
          let precio_final = carrito_compras[index].precio;
          // Se obtiene la cantidad del label
          let cantidad_carrito = parseInt(label[index].textContent);
          cantidad_carrito--;
          // Si la cantidad es igual a uno
          if (cantidad_carrito == 1){
            elemento.disabled = true;
            mas[index].disabled = false;
            label[index].textContent = cantidad_carrito;
            //  funciona? 
            carrito_compras[index].cantidad=cantidad_carrito;
          console.log(carrito_compras[index]);
          let total_pagar2 = cantidad_carrito * precio_final;
          precio[index].textContent = total_pagar2;
          carrito_compras[index].pagar =total_pagar2;
            //funciona?
          }
          // Si la cantidad es mayor a uno sigue el flujo normal
          else {
            //Se activa boton de menos
            elemento.disabled = false;
            //Se activa el boton de mas
            mas[index].disabled = false;

          console.log(cantidad_carrito);
          // Se escribe el nuevo valor  de cantidad_carrito
          label[index].textContent = cantidad_carrito;
          // Se sobre escribe la cantidad en el array del carrito
          carrito_compras[index].cantidad=cantidad_carrito;
          // Se obtiene el total cantidad por precio
          let total_pagar2 = cantidad_carrito * precio_final;
          // Se muestra el valor total 
          precio[index].textContent = total_pagar2;
          // Se sobre escribe la cantidad a pagar en el array
          carrito_compras[index].pagar =total_pagar2;
        };});});
         //boton_mas
         mas.forEach((element,index) =>{
          // Se obtiene la cantidad del label
         element.addEventListener("click",() =>{
          let cantidad_carrito = parseInt(label[index].textContent);
          cantidad_carrito++;
          // Si la cantidad es igual a uno
          if (cantidad_carrito == carrito_compras[index].stock){
            let precio_final = carrito_compras[index].precio; 
            menos[index].disabled = false;
            element.disabled = true;  
          label[index].textContent = cantidad_carrito;
            //  funciona? 
          let total_pagar2 = carrito_compras[index].stock * precio_final;
          precio[index].textContent = total_pagar2;
          carrito_compras[index].pagar =total_pagar2;
            //funciona?

          }
          else{
            // se activa el boton de menos
          menos[index].disabled = false;
          // se obtiene el prvio del carrito
          let precio_final = carrito_compras[index].precio; 
          label[index].textContent = cantidad_carrito;
          carrito_compras[index].cantidad=cantidad_carrito;
          console.log(carrito_compras[index]);
          let total_pagar2 = cantidad_carrito * precio_final;
          precio[index].textContent = total_pagar2;
          carrito_compras[index].pagar =total_pagar2;
        }
  
        ;}); });
        })
        let bote_basura = document.querySelectorAll(".bote_basura_i");
        let secciones_carrito = document.querySelectorAll(".container_carrito_class");
        bote_basura.forEach(bote => {
          
          bote.addEventListener("click", () =>{
            let indexb = bote.id.split("_")[1];
            carrito_compras.splice(indexb, 1);
           //delete(carrito_compras[indexb]);
           secciones_carrito[indexb].textContent=""; 
           console.log(carrito_compras);
          });
        });
 } });
        home.addEventListener("click", () => {
          nombres_productos.textContent ="";
        /*  cantidad_productos.textContent ="";*/
          totales.textContent ="";
          carrito_section.innerHTML="";
          li_home.click();
          titulo_general.textContent="Riro tecnology´s";
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
          else if(carrito_compras.length >= 1){
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
          titulo_general.textContent="Mi pago";
          let nombres_productos = document.getElementById("lista_productos");
         /* let cantidad_productos = document.getElementById("cantidad_productos");*/
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
          let nombre_section_pagar =
          `
          <li class="lista">Articulo</li>
           `;
           nombres_productos.innerHTML += nombre_section_pagar;
          carrito_compras.forEach(articulo =>{
          let section_pagar =  `
          <li class="lista">${articulo.nombre}</li>
           `;
          nombres_productos.innerHTML += section_pagar;
          });
          /*
          let cantidad_section_pagar =
          `
          <li class="lista">Cantidad</li>
           `;
           cantidad_productos.innerHTML += cantidad_section_pagar;
          carrito_compras.forEach(articulo =>{
            let section_cantidad =  `
            <li class="lista">${articulo.cantidad}</li>
             `;
            cantidad_productos.innerHTML += section_cantidad;
            });*/
            let pagar_section_total =  `
              <li class="lista">Total</li>
               `;
              totales.innerHTML += pagar_section_total;
            carrito_compras.forEach(articulo =>{
              let section_total =  `
              <li class="lista">$ ${articulo.pagar}</li>
               `;
              totales.innerHTML += section_total;
              });
           //console.log(carrito_compras[1].pagar);
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
              descuento = .10;
              console.log(descuento);
              label_descuento.textContent = "-10%";
              envio.textContent = envio_pago;
           let final_total = ((sub_total + envio_pago ) - ((sub_total + envio_pago )* descuento));
           final_final.textContent = final_total;
            }
            else if(text_code.value == ""){
              label_descuento.textContent = "0";
              let final_total = sub_total + envio_pago ;
           final_final.textContent = final_total;
            }
          }) ; 

        }});
        let reinicio = document.getElementById("bttn_final");
        reinicio.addEventListener("click", () => {
          location.reload();
        });
});