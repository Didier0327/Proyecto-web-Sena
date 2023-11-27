import { leerUsuarios,crearUsuario,borrarUsuario } from "/script/firestore-usuarios.js";

const email=document.querySelector("#email");
const password=document.querySelector("#password");

const buttonRegistro=document.querySelector("#button-registro");

function redirigir(){
    window.location.assign("ingresar.html")

}

function nuevoUsuario(){
    const usuario={
        correo: email.value,
        clave: password.value,
    };
    crearUsuario(usuario);
    
}

buttonRegistro.addEventListener("click",async(e)=>{
    e.preventDefault();
    try {
 
        if(email.value !="" && password.value!=""){          
      
            let usersList=[];
            const response=await leerUsuarios();
            usersList=[...response];
            const isUserRegistered=usersList.find(user=>user.correo==email.value);
            
            if(!isUserRegistered){
                               
                nuevoUsuario();
                
                localStorage.setItem('users',"true");              
                
                alert("registro de usuario exitoso"); 
                
                if(isUserRegistered){
                    redirigir()
                }

            }else{
                alert("el usuario ya esta registrado");

                //borrarUsuario(email.value);

                redirigir()
                
            }
        }else{alert("debe ingresar los datos correctamente")}
        
    } catch (error) {
        throw new Error(error);
    }
});