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
section_1.classList.remove("none2");
section_1.classList.add("d-flex","section_1_class");
section_1.scrollIntoView( {
  behavior: "smooth",
});
section_2.classList.remove("none2");
section_2.classList.add("d-flex");
section_3.classList.remove("none2");
section_3.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
section_4.classList.remove("none2");
section_4.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
setTimeout(() => {
    header.classList.remove("header", "d-flex", "flex-column",  "justify-content-center", "align-items-center");
    header.classList.add("none2"); 
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
      setTimeout(() => {
        h3_section1_2.classList.add("h3_section1_3_class");
        h3_section1_2.classList.remove("none");
      setTimeout(() =>{
        h3_section1_5.classList.add("h3_section1_3_class");
        h3_section1_5.classList.remove("none");
        setTimeout(() =>{
          h3_section1_1.classList.add("h3_section1_3_class");
          h3_section1_1.classList.remove("none");
          setTimeout(() =>{
            h3_section1_6.classList.add("h3_section1_3_class");
            h3_section1_6.classList.remove("none");
            setTimeout(() =>{
              h3_section1_3.classList.add("h3_section1_3_class");
              h3_section1_3.classList.remove("none");
              setTimeout(() =>{
                h3_section1_4.classList.add("h3_section1_3_class");
                h3_section1_4.classList.remove("none");
        
              },1000);
            },1000);
          },1000);
        },1000);
      },1000);
    },1000);
  }
    else{
      entrada.target.classList.remove("h3_section1_3_class");
      h3_section1_1.classList.add("none");
      h3_section1_2.classList.add("none");
      h3_section1_3.classList.add("none");
      h3_section1_4.classList.add("none");
      h3_section1_5.classList.add("none");
      h3_section1_6.classList.add("none");
    }
  });
}

const observador = new IntersectionObserver(cargar, {
  root: null,
  rootMargin:"100px 100px 0px 0px",
  threshold:1.0
});
observador.observe(h3_section1_3);

// segundo Observardor
let funval = document.getElementById("h1_section_4_1");
let funval2 = document.getElementById("h1_section_4_2");
let funval3 = document.getElementById("h1_section_4_21");
let funval4 = document.getElementById("h1_section_4_22");
let funval5 = document.getElementById("h1_section_4_3");
let funval6 = document.getElementById("h1_section_4_3_2");
let link_a = document.querySelector(".link_a");
const cargar2 = (entradas,observador2) =>{
            
  entradas.forEach((entrada) =>{
    if(entrada.isIntersecting){
      //alert("esta a la vista")
      entrada.target.classList.remove("none");
      entrada.target.classList.add("active");
      setTimeout( () => {
        funval2.classList.remove("none");
      funval2.classList.add("active");
      setTimeout( () => {
        funval3.classList.remove("none");
        funval3.classList.add("active");
      setTimeout( () => {
        funval4.classList.remove("none");
      funval4.classList.add("active");
      setTimeout( () => {
        funval6.classList.remove("none");
        funval6.classList.add("active");
      setTimeout( () => {
        funval5.classList.remove("none");
        funval5.classList.add("active");
      setTimeout( () => {
        funval5.classList.add("boton_resultados");
      },3000);
      },2000);
      },1000);
      },1000);
      },1000);
      },1000);
      

     
    }
    else{
      entrada.target.classList.add("none");
      funval2.classList.add("none");
      funval3.classList.add("none");
      funval4.classList.add("none");4
      funval5.classList.add("none");
    }
  });
}

const observador2 = new IntersectionObserver(cargar2, {
  root: null,
  rootMargin:"100px 0px 0px 0px",
  threshold:1.0
});
observador2.observe(funval);
// boton section 4
  funval5.addEventListener("click",() => {
    link_a.click();
    let section_5 = document.getElementById("section_5_1");
    let section_6 = document.getElementById("section_6");
    section_5.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
    section_5.classList.remove("none2");
    section_6.classList.add("d-flex","flex-column","justify-content-center","align-items-center");
    section_6.classList.remove("none2");
    });
// tercer observador
let aqui = document.getElementById("h1_section5_5_1");
let java = document.getElementById("h1_section5_3_2");
let cs = document.getElementById("h1_section5_7_2");
let h3_section5_1 = document.getElementById("h3_section5_2_1");
let h3_section5_2 = document.getElementById("h3_section5_3_3");
let h3_section5_3 = document.getElementById("h3_section5_4_1");
let h3_section5_4 = document.getElementById("h3_section5_4_2");
let h3_section5_5 = document.getElementById("h3_section5_6_1");
let h3_section5_6 = document.getElementById("h3_section5_6_2");
let h3_section5_7 = document.getElementById("h3_section5_7_1");
let h3_section5_8 = document.getElementById("h3_section5_7_3");
let h3_section5_9 = document.getElementById("h3_section5_8_1");
let h3_section5_10 = document.getElementById("h3_section5_8_2");
let h3_section5_11 = document.getElementById("h3_section5_8_3");
let h3_section5_12 = document.getElementById("h3_section5_2_2");
let h3_section5_13 = document.getElementById("h3_section5_3_1");


const cargar3 = (entradas,observador) =>{
            
  entradas.forEach((entrada) =>{
    if(entrada.isIntersecting){
      //alert("esta a la vista")
      entrada.target.classList.remove("none");
      entrada.target.classList.add("active");
      setTimeout(() =>{
        h3_section5_11.classList.remove("none");
        h3_section5_11.classList.add("active");
      setTimeout( () => {
        h3_section5_2.classList.remove("none");
        h3_section5_2.classList.add("active");
      setTimeout( () => {
        h3_section5_10.classList.remove("none");
        h3_section5_10.classList.add("active");
      setTimeout( () => {
        h3_section5_4.classList.remove("none");
        h3_section5_4.classList.add("active");
        setTimeout( () => {
        h3_section5_4.classList.add("boton_resultados2");
      setTimeout( () => {
        h3_section5_9.classList.remove("none");
        h3_section5_9.classList.add("active");
      setTimeout( () => {
        h3_section5_6.classList.remove("none");
        h3_section5_6.classList.add("active");
      setTimeout( () => {
        h3_section5_7.classList.remove("none");
        h3_section5_7.classList.add("active");
      setTimeout( () => {
        h3_section5_7.classList.add("boton_resultados2");
      setTimeout( () => {
        h3_section5_8.classList.remove("none");
        h3_section5_8.classList.add("active");
      setTimeout( () => {
        h3_section5_5.classList.remove("none");
        h3_section5_5.classList.add("active");
      setTimeout( () => {
        h3_section5_3.classList.remove("none");
        h3_section5_3.classList.add("active");
      setTimeout( () => {
        h3_section5_1.classList.remove("none");
        h3_section5_1.classList.add("active");
      setTimeout( () => {
        h3_section5_1.classList.add("boton_resultados2");
        setTimeout( () => {
        h3_section5_12.classList.remove("none");
        h3_section5_12.classList.add("active");
        setTimeout( () => {
        h3_section5_13.classList.remove("none");
        h3_section5_13.classList.add("active");
        },500);
        },500);
        },2500);
        },500);
        },500);
      },500);
      },500);
      },2500);
      },500);
      },500);
      },500);
      },2500);
      },500);
      },500);
      },500);
      },500);
      
    }
    else{
      entrada.target.classList.remove("active");
      entrada.target.classList.add("none");
    }
  });
}

const observador3 = new IntersectionObserver(cargar3, {
  root: null,
  rootMargin:"100px 100px 0px 0px",
  threshold:1.0
});
observador3.observe(aqui);
observador3.observe(java);
observador3.observe(cs);
// observador 4
let mundo = document.getElementById("imagen_section_6");
let titulo_6 = document.getElementById("h1_section6");
let paises = document.getElementById("h3_section_6_1_2");
let colombia = document.getElementById("li_section6_1");
let usa = document.getElementById("li_section6_2"); 
let ecuador = document.getElementById("li_section6_3");
let peru = document.getElementById("li_section6_4");
let argentina = document.getElementById("li_section6_5");
let uganda = document.getElementById("li_section6_6");
let detener = document.getElementById("h1_section6_7");
let meta = document.getElementById("h1_section6_8");


const cargar4 = (entradas,observador) =>{
            
  entradas.forEach((entrada) =>{
    if(entrada.isIntersecting){
      //alert("esta a la vista")
      entrada.target.classList.add("active");
      entrada.target.classList.remove("none");
    }
    else{
      entrada.target.classList.remove("active");
      entrada.target.classList.add("none");
    }
  });
}

const observador4 = new IntersectionObserver(cargar4, {
  root: null,
  rootMargin:"0px 0px 0px 0px",
  threshold:1.0
});
observador4.observe(titulo_6);
observador4.observe(paises);
observador4.observe(colombia);
observador4.observe(usa);
observador4.observe(ecuador);
observador4.observe(peru);
observador4.observe(argentina);
observador4.observe(uganda);
observador4.observe(detener);
observador4.observe(meta);