import Pagos from '../Pagos/Pagos';
import React, { useState } from 'react';


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

    return (
        <>{loginSuccessful ? <Pagos /> : <div className='form'>
         <form action="" method="post">
                <div className="container col-md-4 mt-4">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-2">User</label>
                    <input onChange={(event => { setUser(event.target.value) })} className="form-control mt-2" type="text" />

                    <label htmlFor="exampleInputEmail1" className="form-label mt-2">Password</label>
                    <input onChange={(event => { setPassword(event.target.value) })} className="form-control mt-2" type="password" />

                    <button className="btn d-flex btn-primary mt-2 mx-auto" type="submit" onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>} </>
    );

}

export default Login;