const FormLogin = () => {

    return (
        <form action="">
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="email" name="email" />
            </div>

            <div className="form-group">
                <label htmlFor="">Contraseña</label>
                <input type="password" name="pass" />
            </div>

            <button type="submit">Enviar</button>
        </form>
    )

}

export { FormLogin }