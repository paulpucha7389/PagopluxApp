import './pagos.css'
import { BsCheckCircleFill } from "react-icons/bs";
import React from 'react';

//Redirecciona a payment.html para obtener el botón <ButtonPaybox>
const RedirectToHTMLPage = () => {
    window.location.href = '../../../payment.html';
}

/**
 * 
 * @returns <HTML>
 */

const Pagos = () => {
    return (
        <>
            <div className='container d-flex justify-content-end mx-2'>Bienvenido <BsCheckCircleFill/></div>
            <div className="container container-btn">
                <div>
                    <img src="https://img.freepik.com/vector-gratis/diseno-tarjeta-credito-realista_23-2149126088.jpg?size=338&ext=jpg&ga=GA1.1.1687694167.1714780800&semt=ais" alt="img-tarjetas" />
                </div>
                <button id='ButtonPaybox' onClick={RedirectToHTMLPage} type="button" className="btn btn-primary btn-pago d-flex justify-content-center text-align-center ms-auto">Realizar Pago</button>
            </div>
        </>
    );
}

export default Pagos;
