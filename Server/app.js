const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 4000;

const mongoose = require('mongoose');
const cors = require('cors');

//Connect Database
app.use(cors({ origin: true, credentials: true}));

app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('Hello world!'));

const conn_str = 'mongodb+srv://noteworthyadmin:noteworthy123@noteworthydb.y3xclix.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Suceeded...')
})
.catch(err => {
    console.log('Error in DB Connection ${err}');
});