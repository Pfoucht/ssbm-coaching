const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const createRoutes = require('./routes/create');
const browseRoutes = require('./routes/browse');
const authRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/review');
const profileRoutes = require('./routes/profile');


require('./models/user');
require('./config/passport');

mongoose.connect('mongodb://ssbmadmin:ssbmcoaching123@ds227373.mlab.com:27373/ssbmcoaching');

mongoose.connection.on('connected', () => {
    console.log('Connected to mongoLab');
})

mongoose.connection.on('error', (err) => {
    console.log('Error ' + err);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/api/create', createRoutes)
app.use('/api/browse', browseRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/reviews', reviewRoutes)

app.listen(8080, () => {
    console.log('Listening on port 8080')
})


module.exports = app;