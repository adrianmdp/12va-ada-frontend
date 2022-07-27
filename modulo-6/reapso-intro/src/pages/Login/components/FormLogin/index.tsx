import { FormEvent, useState } from "react"
import { AuthApi } from '../../../../api'

const FormLogin = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        AuthApi.login({email, pass})
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />
            </div>

            <div className="form-group">
                <label htmlFor="">Contraseña</label>
                <input 
                    type="password" 
                    name="pass" 
                    value={pass} 
                    onChange={e => setPass(e.target.value)}
                />
            </div>
            
            <button type="submit">Enviar</button>
        </form>
    )

}

export { FormLogin }