const express = require('express');
const cors = require('cors');
const mongoDB = require('./Database/db');


const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');


const app = express();
mongoDB();
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.listen(5000)