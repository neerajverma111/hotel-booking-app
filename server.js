const express = require('express');

const app = express();

const dbConfig= require('./db')
const roomsRoute = require('./routes/roomsRoute')

app.use('/api/rooms', roomsRoute)


const port = 5000;
app.listen(port, ()=> console.log(`Server is running on port ${port}`));