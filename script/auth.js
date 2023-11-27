const auth = firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

auth.languageCode="es";

export async function logIn(){
    try {
        const response=await auth.signInWithPopup(provider);
        console.log(response);
        return response.user;
    } catch (error) {
        throw new Error(error);
    }
}

export function logOut(){
    try {
        auth.signOut();
    } catch (error) {
        throw new Error(error);
    }
    
}