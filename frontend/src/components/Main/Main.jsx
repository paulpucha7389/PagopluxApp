import Login from "../Login/login";
import Pagos from "../Pagos/Pagos";

//Función que converte el JWT en un token

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}


let tokenExistAndStillValid = (parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now());

//si el tokenExistAndStillValid envia al componente pagos caso contrario al componente login

const Pagos = () => {
    return (
        <>{tokenExistAndStillValid ? <Pagos/> : <Login/> }</>
    );
}