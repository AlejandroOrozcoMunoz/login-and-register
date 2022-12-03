import React, {useState} from "react";
import axios from "axios";
import {useHistory,Link} from "react-router-dom";

const LoginRegistro = () => {



    //Para Formulario de Inicio de Sesión
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");


    const [errorLogin, setErrorLogin] = useState("");

    const history = useHistory();
     const login = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', {
            email: emailLogin,
            password: passwordLogin
        }, {withCredentials: true})
            .then(res => {
                if(res.data.error) {
                    setErrorLogin(res.data.message);
                } else {
                    history.push('/');
                }
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="row">

            
                <h2>Iniciar Sesión</h2>
                <form onSubmit={login}>
                    <div className="form-group">
                        <label htmlFor="emailLogin">E-mail</label>
                        <input type="email" name="emailLogin" id="emailLogin" className="form-control" value={emailLogin} onChange={e=>setEmailLogin(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordLogin">Password</label>
                        <input type="password" name="passwordLogin" id="passwordLogin" className="form-control" value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)} />
                    </div>
                    <div>
                        {errorLogin !== "" ? <span className="text-danger">{errorLogin}</span> : null }
                    </div>
                     
                    <input type="submit" value="Iniciar Sesión" className="btn btn-info" />
                    |
                    <Link to="/register" className="btn btn-primary">Registrarse</Link>
                    
                </form>
            </div>
    )
    
}

export default LoginRegistro;