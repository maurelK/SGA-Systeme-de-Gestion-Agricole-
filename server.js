const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project_agri'
};

const stats = {
    riz: { requetes: 120 },
    manioc: { requetes: 90 },
    mais: { requetes: 150 },
    tomate: { requetes: 80 },
    haricot: { requetes: 60 }
};

let db;
mysql.createConnection(dbConfig).then(connection => {
    db = connection;
    console.log('Connected to the database');
}).catch(err => {
    console.error('Error connecting to the database:', err);
});


app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page.html'));
});



// Endpoint pour récupérer les statistiques
app.get('/stats', (req, res) => {
    res.json(stats);
  });  

/*------------------Partie dédiée à la registration et aux logins-------------------------*/
app.post('/register', async (req, res) => {
    const { email, name, password, firstname } = req.body;
    if (!email || !name || !password || !firstname) {
        res.status(400).json({ message: 'All fields are required' });
        return;
    }

    try {
        const [existingUser] = await db.execute('SELECT email FROM user WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            res.status(400).json({ message: 'Email already exists' });
            return;
        }

        const sql = 'INSERT INTO user (email, name, password, firstname) VALUES (?, ?, ?, ?)';
        const [result] = await db.execute(sql, [email, name, password, firstname]);
        res.json({ message: 'Registration successful!' });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
});

/*app.get('/users', async (req, res) => {
    const sql = 'SELECT * FROM user';
    try {
        const [results] = await db.query(sql);
        res.json(resor('Error fetching data:', err);
        res.status(500).json);
    } catch (err) {
        console.errn({ message: 'An error occurred. Please try again.' });
    }
});*/


app.get('/users', async (req, res) => {
    const sql = 'SELECT * FROM user';
    try {
        const [results] = await db.query(sql);
        res.json(results);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'An error occurred while fetching data' });
    }
});





/*-----------------Partie dédiée aux denré alimentaire et leurs tralala-----------------------*/
app.post('/riz', async (req, res) => {
    const { name, firstname, rice_quantity, localite, contact } = req.body;
    console.log('Received data:', req.body);

    const sql = 'INSERT INTO riz (name, firstname, rice_quantity, localite, contact) VALUES (?, ?, ? , ?, ?)';
    try {
        const [result] = await db.query(sql, [name, firstname, rice_quantity, localite, contact]);
        console.log('Data inserted successfully');
        res.json({ message: 'Data inserted successfully!' });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
});


app.post('/manioc', async (req, res) => {
    const { name, firstname, manioc_quantity, localite, contact } = req.body;
    console.log('Received data:', req.body);

    const sql = 'INSERT INTO manioc (name, firstname, manioc_quantity, localite, contact) VALUES (?, ?, ? , ?, ?)';
    try {
        const [result] = await db.query(sql, [name, firstname, manioc_quantity, localite, contact]);
        console.log('Data inserted successfully');
        res.json({ message: 'Data inserted successfully!' });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
});

app.post('/mais', async (req, res) => {
    const { name, firstname, mais_quantity, localite, contact } = req.body;
    console.log('Received data:', req.body);

    const sql = 'INSERT INTO mais (name, firstname, mais_quantity, localite, contact) VALUES (?, ?, ? , ?, ?)';
    try {
        const [result] = await db.query(sql, [name, firstname, mais_quantity, localite, contact]);
        console.log('Data inserted successfully');
        res.json({ message: 'Data inserted successfully!' });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
});


app.post('/tomate', async (req, res) => {
    const { name, firstname, tomate_quantity, localite, contact } = req.body;
    console.log('Received data:', req.body);

    const sql = 'INSERT INTO tomate (name, firstname, tomate_quantity, localite, contact) VALUES (?, ?, ? , ?, ?)';
    try {
        const [result] = await db.query(sql, [name, firstname, tomate_quantity, localite, contact]);
        console.log('Data inserted successfully');
        res.json({ message: 'Data inserted successfully!' });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
});

app.post('/haricot', async (req, res) => {
    const { name, firstname, haricot_quantity, localite, contact } = req.body;
    console.log('Received data:', req.body);

    const sql = 'INSERT INTO haricot (name, firstname, haricot_quantity, localite, contact) VALUES (?, ?, ? , ?, ?)';
    try {
        const [result] = await db.query(sql, [name, firstname, haricot_quantity, localite, contact]);
        console.log('Data inserted successfully');
        res.json({ message: 'Data inserted successfully!' });
    } catch (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ message: 'An error occurred. Please try again.' });
    }
});

// Route pour servir la page riz.html
app.get('/riz', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'riz.html'));
});



// Route pour récupérer les données de la table riz
app.get('/data/riz', async (req, res) => {
    const sql = 'SELECT * FROM riz';
    try {
        const [results] = await db.query(sql);
        res.json(results);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'An error occurred while fetching data' });
    }
});

app.get('/manioc', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'manioc.html'));
});

app.get('/data/manioc', async (req, res) => {
    const sql = 'SELECT * FROM manioc';
    try {
        const [results] = await db.query(sql);
        res.json(results);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'An error occurred while fetching data' });
    }
});

app.get('/tomate', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tomate.html'));
});

app.get('/data/tomate', async (req, res) => {
    const sql = 'SELECT * FROM tomate';
    try {
        const [results] = await db.query(sql);
        res.json(results);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'An error occurred while fetching data' });
    }
});

app.get('/mais', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mais.html'));
});

app.get('/data/mais', async (req, res) => {
    const sql = 'SELECT * FROM mais';
    try {
        const [results] = await db.query(sql);
        res.json(results);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'An error occurred while fetching data' });
    }
});

app.get('/haricot', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'haricot.html'));
});

app.get('/data/haricot', async (req, res) => {
    const sql = 'SELECT * FROM haricot';
    try {
        const [results] = await db.query(sql);
        res.json(results);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ message: 'An error occurred while fetching data' });
    }
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

