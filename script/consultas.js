import { getItems } from "/script/firestore-activos.js";

const buttonBuscar=document.querySelector("#buscar-activos");
const fechaInicial=document.querySelector("#fecha-inicial");
const fechaFinal=document.querySelector("#fecha-final");
const entradaFiltro=document.querySelector("#entradaFiltro");
const checkTodo=document.querySelector("#checkTodo");
const tituloResultados=document.querySelector("#titulo-resultados");
const tablaHead=document.querySelector("#tabla-head");
const filaTabla=document.querySelector("#tabla-body");

buttonBuscar.addEventListener("click",async(e)=>{
    e.preventDefault();

    let todos=[];
    let lista=[];
    
    try {

        var filtro=entradaFiltro.value;
       
        const response=await getItems();
        todos=[...response];
        todos.forEach(element => {

            if (fechaInicial.value!="" && fechaFinal.value!="") {

                if(filtro!=""){
                
                    if((new Date(element.fecha.replace("-","/")) >= new Date(fechaInicial.value.replace("-","/")) && new Date(element.fecha.replace("-",'\/')) <= new Date(fechaFinal.value.replace("-",'\/')))&&
                    (element.codigo==filtro||element.serial==filtro||element.equipo==filtro||element.modelo==filtro||element.estado==filtro||element.ubicacion==filtro||element.encargado==filtro)){
                        lista.push(element);
                
                    }
                }else if(filtro==""){
                    if(new Date(element.fecha.replace("-",'\/')) >= new Date(fechaInicial.value.replace("-",'\/')) && new Date(element.fecha.replace("-",'\/')) <= new Date(fechaFinal.value.replace("-",'\/'))){
                        lista.push(element);
                
                    }
                }
                

            } else if (filtro!="") {
                if(element.codigo==filtro||element.serial==filtro||element.equipo==filtro||element.modelo==filtro||element.estado==filtro||element.ubicacion==filtro||element.encargado==filtro){
                    lista.push(element);
                }
            } else {
                lista=todos;
            }
           
        });
        leerLista(lista);
    } catch (error) {
        throw new Error(error);
    }

});

function leerLista(lista){
    tituloResultados.innerHTML="Resultado Consultas";
    let htmlHead="";
    let htmlBody="";

    if(lista.length!=0){
        htmlHead+=`
            <tr>
                <th>Codigo</th>
                <th>Serial</th>
                <th>Equipo</th>
                <th>modelo</th>
                <th>Estado</th>
                <th>Ubicacion</th>
                <th>Fecha</th>
                <th>Encargado</th>
            </tr>
        `;
        tablaHead.innerHTML=htmlHead
    
        lista.forEach(element => {
            console.log(element);
            htmlBody+=`
                <tr>
                    <td>${element.codigo}</td>
                    <td>${element.serial}</td>
                    <td>${element.equipo}</td>
                    <td>${element.modelo}</td>
                    <td>${element.estado}</td>
                    <td>${element.ubicacion}</td>
                    <td>${element.fecha}</td>
                    <td>${element.encargado}</td>
                </tr>
            `; 
        });
        filaTabla.innerHTML=htmlBody;
    }
    else{tablaHead.innerHTML="No hay resultados";filaTabla.innerHTML="";}
}