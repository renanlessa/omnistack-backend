const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
});

mongoose.connect('mongodb://renanlessa:secret1@ds143678.mlab.com:43678/omnistack', {useNewUrlParser: true});

app.use((req, res, next) => {
    req.io = io;
    return next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')));
app.use(require('./routes'));

server.listen(PORT, () => {
    console.log('Server on!');
});