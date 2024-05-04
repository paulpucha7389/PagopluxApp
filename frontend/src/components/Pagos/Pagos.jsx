import './pagos.css'

const handlePagos = (e) => {
    e.preventDefault();

}

const Pagos = () => {
    return (
        <>
            <div className='container d-flex justify-content-end mx-2'>You are logged</div>
            <div className="container container-btn">
                <button onClick={handlePagos} type="button" className="btn btn-primary btn-pago d-flex justify-content-center text-align-center ms-auto">Realizar Pago</button>
            </div>
        </>
    );
}

export default Pagos;