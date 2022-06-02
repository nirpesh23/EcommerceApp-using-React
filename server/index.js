import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://nirpesh:n5i6r3@cluster0.dhq6k.mongodb.net/ecommerce?retryWrites=true&w=majority";

// const CONNECTION_URL = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });
        console.log('Database connected');
    })
    .catch((error)=>{
        console.log(error.message)
    });


app.use('/posts', postRoutes);
