const express = require('express');
const app = express();
const port = 3000;
const routes = require('./src/api/endPoint');
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST']
}));

app.use('/', routes);

app.listen(port,() => {
	console.log(`App ejecutandose en el puerto ${port}`);
});