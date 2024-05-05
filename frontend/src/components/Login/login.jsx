import './login.css';
import { IoPersonSharp } from "react-icons/io5";
import Pagos from '../Pagos/Pagos';
import React, { useState } from 'react';

//Funcion que permite obtener, enviar datos del usuario y el token de seguridad desde el Frontend hacia el Backend

const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            user: user,
            password: password
        };

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.token);
                if (result.token) {
                    localStorage.setItem('token', result.token);
                    setLoginSuccessful(true);
                }else{
                    setLoginSuccessful(false);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
//Envia al Componente Pagos si el usuario esta logeado caso contrario continua en formulario de login
    return (
        <>{loginSuccessful ? <Pagos /> : <div className='form'>
         <form action="" method="post">
            <h3 className="d-flex justify-content-center align-items-center mt-4 mx-auto">Iniciar sesión</h3>
                <div className="container col-md-3">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-2">User</label>
                    <input onChange={(event => { setUser(event.target.value) })} className="form-control mt-2" type="text"/>

                    <label htmlFor="exampleInputEmail1" className="form-label mt-2">Password</label>
                    <input onChange={(event => { setPassword(event.target.value) })} className="form-control mt-2" type="password" />

                    <button className="btn d-flex btn-primary mt-2 mx-auto" type="submit" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>} </>
    );

}

export default Login;

