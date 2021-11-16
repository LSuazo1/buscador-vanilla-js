const year=document.querySelector('#year')
const marca=document.querySelector('#marca')
const minimo=document.querySelector('#minimo')
const maximo=document.querySelector('#maximo')
const puertas=document.querySelector('#puertas')
const transmision=document.querySelector('#transmision')
const color=document.querySelector('#color')

///
const resultados=document.querySelector('#resultado');


const max=new Date().getFullYear();
const min=max-10;

const datosBusqueda={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',

}

//Eventos
document.addEventListener('DOMContentLoaded',()=>{
   mostrarAutos(autos);//muestras los automoviles al cargar
   //lenar select
   llenarSelect();
});

//marca
marca.addEventListener('change',e=>{
   datosBusqueda.marca=e.target.value;
   filtrarAuto();
});

year.addEventListener('change',e=>{
    datosBusqueda.year=e.target.value;
   filtrarAuto();
 });

 color.addEventListener('change',e=>{
    datosBusqueda.color=e.target.value;
   filtrarAuto();

 });

 puertas.addEventListener('change',e=>{
    datosBusqueda.puertas=e.target.value;
   filtrarAuto();

 });
 
minimo.addEventListener('change',e=>{
    datosBusqueda.minimo=e.target.value;
    filtrarAuto();

   });

 maximo.addEventListener('change',e=>{
    datosBusqueda.maximo=e.target.value;
    filtrarAuto();

   });
 transmision.addEventListener('change',e=>{
    datosBusqueda.transmision=e.target.value;
    filtrarAuto();
   
   });

 
//funciones

function mostrarAutos(autos){

   limpiarHtml();//Limpia el html previo

    autos.forEach(auto=>{
        const autoHtml=document.createElement('p');
    const {marca,modelo,year,puertas,transmision,precio,color}=auto;
        autoHtml.textContent=`
        ${marca}-${modelo}- ${year}-${puertas}Puertas-Transmicion:${transmision} -Precio:${precio} -Color:${color}
        `
        //insertar en el html para
        resultados.appendChild(autoHtml);
    });

}
function llenarSelect(){

for (let i = max;  i>min; i--) {
   const opcion=document.createElement('option');
   opcion.value=i;
   opcion.textContent=i;
   year.appendChild(opcion);
}
}

function filtrarAuto(){
   const resultado=autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision);
   
   if (resultado.length) {
      
      mostrarAutos(resultado);
   }else{
      noResultado();
   }
}
function filtrarMarca(auto){

   const {marca}=datosBusqueda;
   if (marca) {
      return auto.marca===marca;
   }

   return auto;
}

function filtrarYear(auto){
   const {year}=datosBusqueda;
   if (year) {
      return auto.year===parseInt(year);
   }

   return auto;

}
function filtrarMinimo(auto){
   const {minimo}=datosBusqueda;
   if ( minimo ) {
      return auto.precio>=minimo;
   }

   return auto;

}

function filtrarMaximo(auto){
   const { maximo }=datosBusqueda;
   if ( maximo ) {
      return auto.precio<=maximo;
   }
   return auto;
}

function filtrarPuertas(auto){
   const { puertas }=datosBusqueda;
   if ( puertas ) {
      return auto.puertas===parseInt(puertas);
   }
   return auto;
}

function filtrarTransmision(auto){
   const { transmision }=datosBusqueda;
   if ( transmision ) {
      return auto.transmision===transmision;
   }
   return auto;
}


function filtrarColor(auto){
   const { color }=datosBusqueda;
   if ( color ) {
      return auto.color===color;
   }
   return auto;
}


function limpiarHtml(){
   while (resultados.firstChild) {
      resultados.removeChild(resultados.firstChild);
   }
}

function noResultado() {
   limpiarHtml();
   const noResultado=document.createElement('div');
   noResultado.classList.add('alerta','error');
   noResultado.textContent="No hay resultados,Intenta con otros metodos de busqueda";

   resultados.appendChild(noResultado);


}