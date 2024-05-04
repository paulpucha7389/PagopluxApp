const connection = require('../database/conexion');

module.exports.ping = (req, res)=>{
    try {
        connection.query('SELECT * FROM usuarios', (err, results)=>{
            console.log(results);
            res.json(results);
        });
    } catch (error) {
        
    }
};

