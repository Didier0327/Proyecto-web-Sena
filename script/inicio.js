import { logOut } from "/script/auth.js";

const buttonLogOut=document.querySelector("#logOut");

window.addEventListener("load",(e)=>{
    try {
        const usersList=JSON.parse(localStorage.getItem('users')) || [];
        if(usersList.length==0){
            window.location.href='index.html';
        }
    } catch (error) {
        throw new Error(error);
    }
});

buttonLogOut.addEventListener("click",async(e)=>{
    e.preventDefault();
    try {     
        localStorage.removeItem('users');
        logOut();
        window.location.href='index.html';
    } catch (error) {
        throw new Error(error);
    }
});