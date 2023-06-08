const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

const config = {
    host: 'sql10.freesqldatabase.com',
    user: 'sql10624647',
    password: 'Gy6Cl3VU13',
    database: 'sql10624647',
};

const connection = mysql.createConnection(config);

app.use(express.json());
app.use(cors({
    origin: 'https://viteportafoliojcmr.netlify.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.post('/', (req, res) => {
    const { nombre, edad } = req.body;

    // Consulta SQL para insertar un nuevo registro
    const insertQuery = `INSERT INTO ejemplo (nombre, edad) VALUES ('${nombre}', ${edad})`;

    connection.query(insertQuery, (err, result) => {
        if (err) {
            console.error('Error al ejecutar la consulta para insertar el nuevo registro: ', err);
            res.status(500).send('Error al ejecutar la consulta para insertar el nuevo registro');
            return;
        }

        res.status(200).send('Registro insertado correctamente');
    });
});

// Establecer la conexión con la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectarse a la base de datos: ', err);
        return;
    }

    // Iniciar el servidor después de establecer la conexión con la base de datos
    app.listen(port, () => {
        console.log(`API listening at http://localhost:${port}`);
    });
});
