let screen = document.documentElement.clientWidth;
let section_2 = document.getElementById("section_2");
let section_3 = document.getElementById("section_3");
let section_4 = document.getElementById("section_4");
let section_5_3 = document.getElementById("section_5_3");
let section_2_1 = document.getElementById("section_2_1");
let section_2_2 = document.getElementById("section_2_2");
let section_2_3 = document.getElementById("section_2_3");
let section_2_4 = document.getElementById("section_2_4");
let section_3_1 = document.getElementById("section_3_1");
let section_3_2 = document.getElementById("section_3_2");
let section_3_3 = document.getElementById("section_3_3");
let section_4_1 = document.getElementById("section_4_1");
let section_4_2 = document.getElementById("section_4_2");
let section_4_3 = document.getElementById("section_4_3");
let section_4_4 = document.getElementById("section_4_4");
let h3_5_1 = document.getElementById("h3_section5_3_1");
let h3_5_2 = document.getElementById("h3_section5_3_3");
let h3_5_3 = document.getElementById("h3_section5_4_1");
let h3_5_4 = document.getElementById("h3_section5_4_2");
let h3_5_5 = document.getElementById("h3_section5_6_1");
let h3_5_6 = document.getElementById("h3_section5_6_2");
let h3_5_7 = document.getElementById("h3_section5_7_1");
let h3_5_8 = document.getElementById("h3_section5_7_3");
let h3_5_9 = document.getElementById("h3_section5_8_1");
let h3_5_10 = document.getElementById("h3_section5_8_2");
let h3_5_11 = document.getElementById("h3_section5_8_3");
let ventas = document.getElementById("section1_pictures_section3");
let imagen_ventas = document.getElementById("picture1_section_3");
window.addEventListener("load", () => {
  if (screen >= 700) {
    section_2.classList.add("section_2_class");
    section_2_1.classList.add("section_2_1_class");
    ventas.classList.add("section1_pictures_section3_class");
    imagen_ventas.classList.add("pictures_section_3_class");
    section_3.classList.add("section_3_class");
    section_3_1.classList.add("section_3_1_class","justify-content-around");
    section_3_2.classList.add("justify-content-around");
    section_4.classList.add("section_4_class");
    section_4_1.classList.add("section_4_1_class");
    h3_5_1.classList.add("h3_section5_3_class");
    h3_5_2.classList.add("h3_section5_3_class");
    h3_5_3.classList.add("h3_section5_3_class");
    h3_5_4.classList.add("h3_section5_3_class");
    h3_5_5.classList.add("h3_section5_3_class");
    h3_5_6.classList.add("h3_section5_3_class");
    h3_5_7.classList.add("h3_section5_3_class");
    h3_5_8.classList.add("h3_section5_3_class");
    h3_5_9.classList.add("h3_section5_3_class");
    h3_5_10.classList.add("h3_section5_3_class");
    h3_5_11.classList.add("h3_section5_3_class");
    

  }
  else {
    section_2.classList.add("section_2_class_movil");
    section_2_1.classList.add("section_2_1_class_movil");
    section_2_2.classList.add("flex-column");
    section_2_3.classList.add("flex-column");
    section_2_4.classList.add("flex-column");
    ventas.classList.add("section1_pictures_section3_class_movil");
    imagen_ventas.classList.add("pictures_section_3_class_movil");
    section_3.classList.add("section_3_class_movil");
    section_3_1.classList.add("section_3_1_class_movil");
    section_3_2.classList.add("flex-column","justify-content-evenly");
    section_3_3.classList.add("flex-column","justify-content-evenly");
    section_4.classList.add("section_4_class_movil");
    section_4_1.classList.add("section_4_1_class_movil");
    section_4_2.classList.add("flex-column");
    section_4_3.classList.add("flex-column");
    section_4_4.classList.add("flex-column");
    h3_5_1.classList.add("h3_section5_3_class_movil");
    h3_5_2.classList.add("h3_section5_3_class_movil");
    h3_5_3.classList.add("h3_section5_3_class_movil");
    h3_5_4.classList.add("h3_section5_3_class_movil");
    h3_5_5.classList.add("h3_section5_3_class_movil");
    h3_5_6.classList.add("h3_section5_3_class_movil");
    h3_5_7.classList.add("h3_section5_3_class_movil");
    h3_5_8.classList.add("h3_section5_3_class_movil");
    h3_5_9.classList.add("h3_section5_3_class_movil");
    h3_5_10.classList.add("h3_section5_3_class_movil");
    h3_5_11.classList.add("h3_section5_3_class_movil");
    section_5_3.classList.add("flex-column");

  }
});
window.addEventListener("resize", () => {
  if ((screen >= 700)||(screen<=700)) {
		location.reload();
  }
});
let saludo = document.getElementById("titulo_header");
let saludo2 = document.getElementById("sub_header");
let header = document.getElementById("header_id");
let section_1 = document.getElementById("section_1");

saludo.addEventListener("click", () => {
saludo.innerHTML="Mi nombre es"+"<br>"+"Ricardo Ramos";
saludo2.classList.remove("sub_header_class");
saludo2.classList.add("invisible");
setTimeout(() => {
saludo.innerHTML="Sean bienvenidos"+"<br>"+"a este sitio";
setTimeout(() => {
saludo.textContent="Comencemos";
setTimeout(() =>{
section_1.scrollIntoView( {
    behavior: "smooth",
});
setTimeout(() => {
    header.classList.remove("header", "d-flex", "flex-column",  "justify-content-center", "align-items-center");
    header.classList.add("none"); 
   },1000); 
   },2000);
},2000); 
},2000) 
});   
//  intersections observer
//comienza el observador labels
let h3_section1_1 = document.getElementById("h3_section1_1");
let h3_section1_2 = document.getElementById("h3_section1_2");
let h3_section1_3 = document.getElementById("h3_section1_3");
let h3_section1_4 = document.getElementById("h3_section1_4");
let h3_section1_5 = document.getElementById("h3_section1_5");
let h3_section1_6 = document.getElementById("h3_section1_6");
const cargar = (entradas,observador) =>{
            
  entradas.forEach((entrada) =>{
    if(entrada.isIntersecting){
      //alert("esta a la vista")
      entrada.target.classList.add("h3_section1_3_class");
      
    }
    else{
      entrada.target.classList.remove("none");
    }
  });
}

const observador = new IntersectionObserver(cargar, {
  root: null,
  rootMargin:"100px 100px 0px 0px",
  threshold:1.0
});
//observador.observe(h3_section1_1);
//observador.observe(h3_section1_2);
observador.observe(h3_section1_3);
//observador.observe(h3_section1_4);
//observador.observe(h3_section1_5);
//observador.observe(h3_section1_6);