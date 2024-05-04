const express = require('express');
const app = express();
const port = 3000;
const routes = require('./src/api/endPoint');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/', routes);


// const dotenv = require('dotenv');
// dotenv.config({path: './env/.env'});

// app.use('/resources', express.static('public'));
// app.use('/resources', express.static(__dirname + '/public'));

//app.set('view engine', 'ejs');

//Variables de sesión
// const session = require('express-session');
// app.use(session({
// 	secret:'secret',
// 	resave: true,
// 	saveUninitialized: true	
// }));

// const connection = require('./database/conexion');



// app.get('/', (req, res) =>{
// 	res.render('login');
// })

// app.post('/auth', (req, res) =>{
	
// 	const user = req.body.user;
// 	const password = req.body.password;

// 	if(user && password) {
// 		if (user && password) {
// 			connection.query('SELECT * FROM usuarios WHERE identificacion = ? AND contraseña = ?', [user, password], (error, results, fields) => {
// 				if (results.length > 0) {
// 					req.session.loggedin = true;
// 					res.render('pagos'); // Redirige a la página del perfil del usuario
// 				} else {
// 					res.send('Nombre de usuario/contraseña incorrectos');
// 				}
// 				res.end();
// 			});
// 		} else {
// 			res.send('Ingresa nombre de usuario y contraseña');
// 			res.end();
// 		}
// 	}
// });

// app.get('/form', (req, res) =>{
	
// 	if (req.session.loggedin) {
// 		res.render('form');
// 	}
// })

app.listen(port,() => {
	console.log(`App ejecutandose en el puerto ${port}`);
});