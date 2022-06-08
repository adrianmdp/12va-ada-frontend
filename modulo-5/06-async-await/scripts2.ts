const laTareafueExitosa = true


const miFuncion = () => {

    const miPromesa = new Promise((resolve, reject) => {

        if(laTareafueExitosa) {
            resolve({
                success: true,
                data: "Cortado."
            })
        } else {
            reject({
                success: false,
                message: "La cafetería esta cerrada"
            })
        }

    })

    return miPromesa;

}

const comprarCafe = async () => {

    try {
        const resp = await miFuncion()
        console.log(resp);
    } catch(err) {
        console.log(err);
    }
}

comprarCafe()