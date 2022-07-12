const AddTeam = () => {

    const handleSubmit = (e: any) => {
        e.preventDefault()        

        // setEquipo((prevState) => {
        //     return [
        //         ...prevState, 
        //         { 
        //             name: "Equipo 4", 
        //             city: "Motevideo", 
        //             country: "Uruguay" 
        //         }
        //     ]
        // })
   }   
   

    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="">Ciudad</label>
                <input type="text" name="city" id="city" />
            </div>
            <div>
                <label htmlFor="">País</label>
                <input type="text" name="country" id="country" />
            </div>

            <button type="submit">Agregar</button>
        </form>

    )

}

export { AddTeam }