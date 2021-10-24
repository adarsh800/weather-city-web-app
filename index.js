const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const ratelimit = require('express-rate-limit');
const path = require('path');

require('dotenv').config();

const app = express();

//Rate Limiter
const limiter = ratelimit({
    windowMs: 10*60*1000,
    max: 10
})
app.use(limiter)
app.set('test proxy',1)
//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api', require('./routes/weather'));


app.get('/', (req, res) => {
    res.json("Hello");
});



app.listen(PORT, (req, res)=>{ console.log(`Server connected to PORT: ${PORT}`)});
