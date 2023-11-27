const db=firebase.firestore();

export async function insert(item){
    try {
        const response=await db.collection("activos").add(item);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getItems(){
    try {
        let items=[];
        const response=await db.collection("activos").get();
        response.forEach(element => {
            items.push(element.data())
        });
        return items;
    } catch (error) {
        throw new Error(error);
    }
}

export async function update(cod,est,ubi,fec,enc){
    let docId;
    try {
        const doc=await db.collection("activos").where("codigo","==",cod).get();
        doc.forEach(element => {
            docId=element.id;
        });

        await db.collection("activos").doc(docId).update({estado: est, ubicacion: ubi, fecha: fec, encargado: enc});

    } catch (error) {
        throw new Error(error);
    }
}

export async function deleteItem(cod){
    let docId;
    try {
        const doc=await db.collection("activos").where("codigo","==",cod).get();
        doc.forEach(element => {
            docId=element.id;
        });

        await db.collection("activos").doc(docId).delete();

    } catch (error) {
        throw new Error(error);
    }
}