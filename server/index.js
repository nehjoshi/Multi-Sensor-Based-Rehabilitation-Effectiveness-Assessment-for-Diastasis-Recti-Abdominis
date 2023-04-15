const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Register = require('./routes/Register');
const Login = require('./routes/Login');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/', Register);
app.use('/', Login);


//Connect to DB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB!'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
