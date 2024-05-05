const connection = require('../database/conexion');
const jwt = require('jsonwebtoken');


module.exports.login = (req, res) => {

    const {user, password} = req.body;
    
     try {
        connection.query('SELECT * FROM usuarios WHERE identificacion = ? AND contraseña = ?', [user, password],
            (err, result) =>{
                if (err) {
                    res.send(err);
                }

                if(result.length > 0) {
                    const token = jwt.sign({user, password}, "Stack", {expiresIn:'3m'
                });
                console.log("Exist user");
                res.send({token});
                } else {
                    console.log('wrong result');
                    res.send({msg: 'Wrong result'});
                }

            });
        
     } catch (error) {
        res.status(500).msg('An error occurred: ' + error);
     }
};