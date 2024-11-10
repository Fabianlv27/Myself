
const elementos = document.getElementsByClassName('block');
var row
const fechaInicio = new Date();
const secs= fechaInicio.getSeconds();
console.log(secs)
function getSemana() {
    const fechaActual = new Date();
    const diasSemana = ["d", "l", "m", "mm", "j", "v", "s"];
const diaSemana = diasSemana[fechaActual.getDay()];
return diaSemana
}
function getHora(){
    const fechaActual = new Date();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const Hformat= (horas*3600) + (minutos*60)
    return Hformat
}
function GetInterval() {
    var semana= getSemana()
var hora= getHora()

 if (semana !="d" && semana != "s") {
   

    if  (hora >= 30600 && hora < 33900) {
      row=1
    } else if  (hora >= 33900 && hora < 37200 - 60  + secs) {
       row=2
    } else if  (hora >= 37200 - 60  + secs && hora < 40500 -60 + secs) {
        row=3
    } else if ( hora >= 40500 -60 + secs && hora < 42300 -60 + secs) {
       row=4
    } else if  (hora >= 42300 -60 + secs && hora < 45600 -60 + secs) {
       row=5
    } else if  (hora >= 45600 -60 + secs && hora < 48900-60 + secs) {
      row=6
    } else if (hora >= 48900 -60 + secs && hora < 52200-60 + secs) {
      row=7
    }
    
    var format= row + semana
    console.log(format)
    const bloque=document.getElementById(format)
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.color="rgb(127, 229, 255)"

    }
    bloque.style.color="red"
 }
}

GetInterval()
setTimeout(() => {
GetInterval() 
setInterval(() => {

    GetInterval()
    
        
    }, 60000 ); 
}, 60000 - (secs*1000));

