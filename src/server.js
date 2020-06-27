import express from 'express';
import routes from './routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ECommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// setup body parser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());



routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
); 

app.listen(PORT, ()=>
    console.log(`Your server is running port ${PORT}`)
);

