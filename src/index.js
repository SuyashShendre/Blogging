const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv")
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Server running on port ' + (process.env.PORT || 3000))
});
