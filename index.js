import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose, { connection } from 'mongoose';
import bodyParser from 'body-parser';

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
const PORT = 4000;

// body parser connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => 
    res.send(`Node & Express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server running on port ${PORT}`)
);