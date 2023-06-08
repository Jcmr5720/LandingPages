const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 3001;

const config = {
    user: 'playersito',
    password: 't5720ateneaWMA',
    server: 'servidorpruebasjc.database.windows.net',
    database: 'base0',
    options: {
        encrypt: true,
    },
};

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5174',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.post('/', (req, res) => {
    // Establecer la configuración de conexión
    sql.connect(config, (err) => {
        if (err) {
            console.error('Error al conectarse a la base de datos: ', err);
            res.status(500).send('Error al conectarse a la base de datos');
            return;
        }

        // Consulta SQL para obtener el último ID guardado
        const getLastIdQuery = 'SELECT MAX(id) as lastId FROM dbo.ejemplo';

        // Ejecutar la consulta para obtener el último ID
        new sql.Request().query(getLastIdQuery, (err, result) => {
            if (err) {
                console.error('Error al ejecutar la consulta para obtener el último ID: ', err);
                res.status(500).send('Error al ejecutar la consulta para obtener el último ID');
                return;
            }

            const lastId = result.recordset[0].lastId;
            const newId = lastId + 1;
            const id = newId;
            const { nombre, edad } = req.body;

            // Aquí puedes utilizar el valor del nuevo ID y los otros datos para insertarlos en la tabla
            const insertQuery = `INSERT INTO dbo.ejemplo (id, nombre, edad) VALUES (${id}, '${nombre}', ${edad})`;

            // Ejecutar la consulta para insertar el nuevo registro
            new sql.Request().query(insertQuery, (err, result) => {
                if (err) {
                    console.error('Error al ejecutar la consulta para insertar el nuevo registro: ', err);
                    res.status(500).send('Error al ejecutar la consulta para insertar el nuevo registro');
                    return;
                }

                res.status(200).send('Registro insertado correctamente');
            });
        });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});