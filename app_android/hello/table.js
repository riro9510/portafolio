let URL = "./asistencia.json";
fetch(URL)
.then(respuesta => respuesta.json())
.then(respuesta =>{
    console.log(respuesta.empleado.Ricardo_Ramos);
    respuesta.empleado.Ricardo_Ramos.map(elemento => {
        console.log(elemento.fecha);
    });
})