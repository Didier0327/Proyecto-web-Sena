import { leerUsuarios } from "/script/firestore-usuarios.js";
import { logIn } from "/script/auth.js";
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const buttonLogin=document.querySelector("#button-login");
const loginGoogle=document.querySelector("#login-google");

buttonLogin.addEventListener("click", async(e)=>{
    e.preventDefault();
    try {
        let usersList=[];
        const response=await leerUsuarios();
        usersList=[...response];
        console.log(usersList);
        const isUserRegistered=usersList.find(user=>user.correo==email.value && user.clave==password.value);
        if(!isUserRegistered){
            alert("usuario no registrado");
        }else{
            window.location.href='inicio.html';
            localStorage.setItem('users',"true");
        }
       
    } catch (error) {
        throw new Error(error);
    }
});

loginGoogle.addEventListener("click",async(e)=>{
    e.preventDefault();
    try {
        logIn();
    } catch (error) {
        throw new Error(error);
    }
});

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        console.log("usuario ",user.displayName," logueado con google")
        localStorage.setItem('users',"true");
        window.location.href='inicio.html';
    }else{
        console.log("no esta logueado con google")
    }
});