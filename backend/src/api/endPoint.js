const express = require('express');
const axios = require('axios');

const router= express.Router();

const {ping} = require('../controllers/pingController');
const {login} = require('../controllers/loginController');


router.get('/ping', ping);

router.post('/login', login);

router.get('/obtener', async(req, res) => {
    let data = {
        "numeroIdentificacion": "1003088679111", //Obligatorio, RUC delestablecimiento,
        "initialDate": "2020-07-08", //Obligatorio, fecha inicial,
        "finalDate": "2020-07-20", //Obligatorio, fecha final,
        "tipoPago": "unico", //Obligatorio, tipos de pago
        "estado": "aprobado", //Opcional, estado de la transacción
        "identificacionCliente": "09199223221" //Opcional, identificación delcliente.
    }

    try {
        const response = await axios.post('https://apipre.pagoplux.com/intv1/integrations/getTransactionsEstablishmentResource', data, {
            auth: {
                username: 'o3NXHGmfujN3Tyzp1cyCDu3xst',
                password: 'TkBhZQP3zwMyx3JwC5HeFqzXM4p0jzsXp0hTbWRnI4riUtJT'
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Hubo un error al obtener los datos');
    }
});


module.exports = router;
