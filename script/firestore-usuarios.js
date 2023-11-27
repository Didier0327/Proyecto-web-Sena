const db=firebase.firestore();

export async function crearUsuario(item){
    try {
        const response=await db.collection("usuarios").add(item);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export async function leerUsuarios(){
    try {
        let items=[];
        const response=await db.collection("usuarios").get();
        response.forEach(element => {
            items.push(element.data())
        });
        return items;
    } catch (error) {
        throw new Error(error);
    }
}

export async function actualizarUsuario(email,password){
    let docId;
    try {
        const doc=await db.collection("usuarios").where("correo","==",email).get();
        doc.forEach(element => {
            docId=element.id;
        });

        await db.collection("usuarios").doc(docId).update({clave: password});

    } catch (error) {
        throw new Error(error);
    }
}

export async function borrarUsuario(email){
    let docId;
    try {
        const doc=await db.collection("usuarios").where("correo","==",email).get();
        doc.forEach(element => {
            docId=element.id;
        });

        await db.collection("usuarios").doc(docId).delete();

    } catch (error) {
        throw new Error(error);
    }
}