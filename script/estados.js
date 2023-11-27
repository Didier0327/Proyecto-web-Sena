import { update,deleteItem } from "/script/firestore-activos.js";

const buttonActualizar=document.querySelector("#actualizar-estado");
const buttonBorrar=document.querySelector("#borrar-activos");
const inputcodigo=document.querySelector("#codigo");
const inputestado=document.querySelector("#estado");
const inputubicacion=document.querySelector("#ubicacion");
const inputfecha=document.querySelector("#fecha");
const inputencargado=document.querySelector("#encargado");

function borrarInputs(){
    inputcodigo.value="";
    inputestado.value="";
    inputubicacion.value="";
    inputfecha.value="";
    inputencargado.value="";
}

buttonActualizar.addEventListener("click",async(e)=>{
    e.preventDefault();

    try {

        var codigo=inputcodigo.value
        var estado=inputestado.value
        var ubicacion=inputubicacion.value
        var fecha=inputfecha.value
        var encargado=inputencargado.value

        if(codigo !="" && estado !="" && ubicacion !="" && fecha !="" && encargado !=""){

            update(codigo,estado,ubicacion,fecha,encargado);
            borrarInputs();

        }else{alert("debe ingresar los datos correctamente")}

    } catch (error) {
        throw new Error(error);
    }
    
});

buttonBorrar.addEventListener("click",async(e)=>{
    e.preventDefault();

    try {

        var codigo=inputcodigo.value
        
        if(codigo !=""){

            deleteItem(codigo);
            borrarInputs();

        }else{alert("debe ingresar los datos correctamente")}
        
    } catch (error) {
        throw new Error(error);
    }
    
});
