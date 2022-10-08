import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

routes(app);

app.get('/', (req, res) => 
    res.send(`Node & Express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server running on port ${PORT}`)
);