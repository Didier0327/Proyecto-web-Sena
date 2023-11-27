import { insert } from "/script/firestore-activos.js";

const buttonCrear=document.querySelector("#guardar-activo");
const inputcodigo=document.querySelector("#codigo");
const inputserial=document.querySelector("#serial");
const inputequipo=document.querySelector("#equipo");
const inputmodelo=document.querySelector("#modelo");
const inputestado=document.querySelector("#estado");
const inputubicacion=document.querySelector("#ubicacion");
const inputfecha=document.querySelector("#fecha");
const inputencargado=document.querySelector("#encargado");

function borrarInputs(){
    inputcodigo.value="";
    inputserial.value="";
    inputequipo.value="";
    inputmodelo.value="";
    inputestado.value="";
    inputubicacion.value="";
    inputfecha.value="";
    inputencargado.value="";
}

buttonCrear.addEventListener("click",async(e)=>{
    e.preventDefault();
    try {

        var codigo=inputcodigo.value;
        var serial=inputserial.value;
        var equipo=inputequipo.value;
        var modelo=inputmodelo.value;
        var estado=inputestado.value;
        var ubicacion=inputubicacion.value;
        var fecha=inputfecha.value;
        var encargado=inputencargado.value;

        if(codigo!="" && serial !="" && equipo !="" && modelo !="" && estado !="" && ubicacion !="" && fecha !="" && encargado !=""){

            const activo={
                codigo: codigo,
                serial: serial,
                equipo: equipo,
                modelo: modelo,
                estado: estado,
                ubicacion: ubicacion,
                fecha: fecha,
                encargado: encargado,
            };
            insert(activo);
            borrarInputs();
        }else{alert("debe ingresar los datos correctamente")}

    } catch (error) {
        throw new Error(error);
    }
});
