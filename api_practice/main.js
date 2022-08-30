let screen = document.documentElement.clientWidth;
window.addEventListener("load", () => {
  if (screen >= 700) {
    container_1.classList.remove("external_card_class");
    container_1.classList.add("external_card_class_desktop1");
    container_2.classList.remove("hidden");
    container_2.classList.add("d-flex", "flex-column", "justify-content-around", "align-items-center", "external_card_class_desktop2");
  }
  else {
    container_1.classList.remove("external_card_class_desktop1");
    container_1.classList.add("external_card_class");
    container_2.classList.add("hidden");
    container_2.classList.remove("d-flex", "flex-column", "justify-content-around", "align-items-center", "external_card_class_desktop2");
  }
});
window.addEventListener("resize", () => {
  if ((screen >= 700)||(screen<=700)) {
		location.reload();
  }
});
// Declarando elementos del documento
//const desktop =  window.matchMedia("(min-width: 1200px)"); 
//// console.log(desktop);

let container_1 = document.getElementById("external_card1");
let container_2 = document.getElementById("external_card2");
// resize pantalla
// console.log(screen);
const URL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(URL)
  .then(respuesta => respuesta.json())
  .then(respuesta => {

    //////////////mas y menos
    let menos = document.getElementById("izquierda");
    let mas = document.getElementById("derecha");
    let i = 0;
    let o = 0;
    let prophet = [];
    let fecha = [];
    let lugar = [];
    let imagen = [];
    let nuevo_prophet = "";
    let nueva_fecha = "";
    let nuevo_lugar = "";
    let nueva_imagen = "";
    let prophet2 = [];
    let fecha2 = [];
    let lugar2 = [];
    let imagen2 = [];
    let nuevo_prophet2 = "";
    let nueva_fecha2 = "";
    let nuevo_lugar2 = "";
    let nueva_imagen2 = "";
    ///////////
    o = i + 1;
    container_1.innerHTML = "";
    container_2.innerHTML = "";
    respuesta.prophets[i]
    // console.log(respuesta.prophets[+i].name + " " + respuesta.prophets[+i].lastname + " " + respuesta.prophets[+i].birthdate + " " + respuesta.prophets[+i].birthplace);
    prophet = respuesta.prophets[+i].name + " " + respuesta.prophets[+i].lastname;
    fecha = respuesta.prophets[+i].birthdate;
    lugar = respuesta.prophets[+i].birthplace;
    imagen = respuesta.prophets[+i].imageurl;
    // console.log(o);
    // console.log(prophet);
    // console.log(fecha);
    // console.log(lugar);
    // console.log(imagen);
    nuevo_prophet = document.createElement("h2");
    nuevo_prophet.classList.add("nombre");
    nuevo_prophet.textContent = prophet;
    container_1.appendChild(nuevo_prophet);
    //
    nueva_fecha = document.createElement("h4");
    nueva_fecha.classList.add("fecha");
    nueva_fecha.textContent = fecha;
    container_1.appendChild(nueva_fecha);
    //
    nuevo_lugar = document.createElement("h4");
    nuevo_lugar.classList.add("lugar");
    nuevo_lugar.textContent = lugar;
    container_1.appendChild(nuevo_lugar);
    //
    nueva_imagen = document.createElement("img");
    nueva_imagen.setAttribute("src", imagen);
    nueva_imagen.classList.add("imagenes_profetas");
    container_1.appendChild(nueva_imagen);
    ///////container pequeño
    prophet2 = respuesta.prophets[+o].name + " " + respuesta.prophets[+o].lastname;
    fecha2 = respuesta.prophets[+o].birthdate;
    lugar2 = respuesta.prophets[+o].birthplace;
    imagen2 = respuesta.prophets[+o].imageurl;
    // console.log(o);
    // console.log(prophet2);
    // console.log(fecha2);
    // console.log(lugar2);
    // console.log(imagen2);
    nuevo_prophet2 = document.createElement("h2");
    nuevo_prophet2.classList.add("nombre2");
    nuevo_prophet2.textContent = prophet2;
    container_2.appendChild(nuevo_prophet2);
    //
    nueva_fecha2 = document.createElement("h5");
    nueva_fecha2.classList.add("fecha2");
    nueva_fecha2.textContent = fecha2;
    container_2.appendChild(nueva_fecha2);
    //
    nuevo_lugar2 = document.createElement("h5");
    nuevo_lugar2.classList.add("lugar2");
    nuevo_lugar2.textContent = lugar2;
    container_2.appendChild(nuevo_lugar2);
    //
    nueva_imagen2 = document.createElement("img");
    nueva_imagen2.setAttribute("src", imagen2);
    nueva_imagen2.classList.add("imagenes_profetas");
    container_2.appendChild(nueva_imagen2);

     //******************** Here begins the menos funcion
    menos.addEventListener("click", () => {
      if (i == 0) {
        menos.disabled = true;
				mas.disabled = false;
      }
      else {
        menos.disabled = false;
        i--;
      };
      if ((i >= 0 && i <= 16)&&(screen>=700)) {
        container_2.classList.remove("hidden");
        container_2.classList.add("d-flex", "flex-column", "justify-content-around", "align-items-center", "external_card_class_desktop2");
				mas.disabled = false;
      }
			if((i>0 && i < 16)&&(screen<=699)){
				mas.disabled = false;
			}
      o = i + 1;
      container_1.innerHTML = "";
      container_2.innerHTML = "";
      respuesta.prophets[i]
      // console.log(respuesta.prophets[+i].name + " " + respuesta.prophets[+i].lastname + " " + respuesta.prophets[+i].birthdate + " " + respuesta.prophets[+i].birthplace);
      prophet = respuesta.prophets[+i].name + " " + respuesta.prophets[+i].lastname;
      fecha = respuesta.prophets[+i].birthdate;
      lugar = respuesta.prophets[+i].birthplace;
      imagen = respuesta.prophets[+i].imageurl;
      // console.log(o);
      // console.log(prophet);
      // console.log(fecha);
      // console.log(lugar);
      // console.log(imagen);
      nuevo_prophet = document.createElement("h2");
      nuevo_prophet.classList.add("nombre");
      nuevo_prophet.textContent = prophet;
      container_1.appendChild(nuevo_prophet);
      //
      nueva_fecha = document.createElement("h4");
      nueva_fecha.classList.add("fecha");
      nueva_fecha.textContent = fecha;
      container_1.appendChild(nueva_fecha);
      //
      nuevo_lugar = document.createElement("h4");
      nuevo_lugar.classList.add("lugar");
      nuevo_lugar.textContent = lugar;
      container_1.appendChild(nuevo_lugar);
      //
      nueva_imagen = document.createElement("img");
      nueva_imagen.setAttribute("src", imagen);
      nueva_imagen.classList.add("imagenes_profetas");
      container_1.appendChild(nueva_imagen);
      ///////container pequeño
      prophet2 = respuesta.prophets[+o].name + " " + respuesta.prophets[+o].lastname;
      fecha2 = respuesta.prophets[+o].birthdate;
      lugar2 = respuesta.prophets[+o].birthplace;
      imagen2 = respuesta.prophets[+o].imageurl;
      // console.log(o);
      // console.log(prophet2);
      // console.log(fecha2);
      // console.log(lugar2);
      // console.log(imagen2);
      nuevo_prophet2 = document.createElement("h2");
      nuevo_prophet2.classList.add("nombre2");
      nuevo_prophet2.textContent = prophet2;
      container_2.appendChild(nuevo_prophet2);
      //
      nueva_fecha2 = document.createElement("h5");
      nueva_fecha2.classList.add("fecha2");
      nueva_fecha2.textContent = fecha2;
      container_2.appendChild(nueva_fecha2);
      //
      nuevo_lugar2 = document.createElement("h5");
      nuevo_lugar2.classList.add("lugar2");
      nuevo_lugar2.textContent = lugar2;
      container_2.appendChild(nuevo_lugar2);
      //
      nueva_imagen2 = document.createElement("img");
      nueva_imagen2.setAttribute("src", imagen2);
      nueva_imagen2.classList.add("imagenes_profetas");
      container_2.appendChild(nueva_imagen2);
    });
    mas.addEventListener("click", () => {

      

      if (i == 15) {
        mas.disabled = true;
        container_2.classList.add("hidden");
        container_2.classList.remove("d-flex", "flex-column", "justify-content-around", "align-items-center", "external_card_class_desktop2");
        // cuando llegamos a 15, sumamos uno mas
        if (i == 15) {
          i++
        }
      }
      else {
        i++;
      };

      // Cuando i sea mayor a 0, se corrige el menos
      if (i > 0) {
        menos.disabled = false;
      }
      
      if (o > 15) {
        mas.dissabled = true;
        container_2.classList.add("hidden");
        container_2.classList.remove("d-flex", "flex-column", "justify-content-around", "align-items-center", "external_card_class_desktop2");
      }
      else {
				mas.dissabled = false;
        o = i + 1;
      }
      container_1.innerHTML = "";
      container_2.innerHTML = "";
      //// console.log(respuesta.prophets[+i].name + " " + respuesta.prophets[+i].lastname + " " + respuesta.prophets[+i].birthdate + " " + respuesta.prophets[+i].birthplace);
      prophet = respuesta.prophets[+i].name + " " + respuesta.prophets[+i].lastname;
      fecha = respuesta.prophets[+i].birthdate;
      lugar = respuesta.prophets[+i].birthplace;
      imagen = respuesta.prophets[+i].imageurl;
      console.log("Esto vale i ", +i);
      //// console.log(o);
      //// console.log(prophet);           
      //// console.log(fecha);
      //// console.log(lugar);	
      //// console.log(imagen);
      nuevo_prophet = document.createElement("h2");
      nuevo_prophet.classList.add("nombre");
      nuevo_prophet.textContent = prophet;
      container_1.appendChild(nuevo_prophet);
      //
      nueva_fecha = document.createElement("h4");
      nueva_fecha.classList.add("fecha");
      nueva_fecha.textContent = fecha;
      container_1.appendChild(nueva_fecha);
      //
      nuevo_lugar = document.createElement("h4");
      nuevo_lugar.classList.add("lugar");
      nuevo_lugar.textContent = lugar;
      container_1.appendChild(nuevo_lugar);
      //
      nueva_imagen = document.createElement("img");
      nueva_imagen.setAttribute("src", imagen);
      nueva_imagen.classList.add("imagenes_profetas");
      container_1.appendChild(nueva_imagen);

      ///////container pequeño
      prophet2 = respuesta.prophets[+o].name + " " + respuesta.prophets[+o].lastname;
      fecha2 = respuesta.prophets[+o].birthdate;
      lugar2 = respuesta.prophets[+o].birthplace;
      imagen2 = respuesta.prophets[+o].imageurl;
      // console.log(o);
      // console.log(prophet2);
      // console.log(fecha2);
      // console.log(lugar2);
      // console.log(imagen2);
      nuevo_prophet2 = document.createElement("h2");
      nuevo_prophet2.classList.add("nombre2");
      nuevo_prophet2.textContent = prophet2;
      container_2.appendChild(nuevo_prophet2);
      //
      nueva_fecha2 = document.createElement("h5");
      nueva_fecha2.classList.add("fecha2");
      nueva_fecha2.textContent = fecha2;
      container_2.appendChild(nueva_fecha2);
      //
      nuevo_lugar2 = document.createElement("h5");
      nuevo_lugar2.classList.add("lugar2");
      nuevo_lugar2.textContent = lugar2;
      container_2.appendChild(nuevo_lugar2);
      //
      nueva_imagen2 = document.createElement("img");
      nueva_imagen2.setAttribute("src", imagen2);
      nueva_imagen2.classList.add("imagenes_profetas");
      container_2.appendChild(nueva_imagen2);
    });

  });
// console.log(screen);