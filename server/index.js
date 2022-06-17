import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// const CONNECTION_URL = process.env.ATLAS_URI;
mongoose.connect(process.env.Database_Access, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        app.listen(port, () => { console.log(`Server running on port: ${port}`) });
        console.log('Database connected');
    })
    .catch((error)=>{
        console.log(error.message)
    });


app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);

app.use((req, res, next) => {
    res.send('<h1 style="text-align:center">Page Not Found! </h1>');
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})
