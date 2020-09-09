const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require('./routes/apiRoutes');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Connect to the Mongo DB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connected succesfully');
});

// Use apiRoutes
const apiRouter = require('./routes/apiRoutes');

app.use('/books', apiRouter);

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
