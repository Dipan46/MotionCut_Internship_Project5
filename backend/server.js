const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../')));

let users = require('./users.json');

app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = { name, email, password };
    users.push(newUser);
    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 2));
    res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        return res.json({ message: 'Login successful', user });
    }
    res.status(401).json({ message: 'Invalid credentials' });
});

app.listen(5000, () => console.log('Server running on port 5000'));