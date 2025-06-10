import express from "express";
import path from "path";
import exercisesRouter from './routes/exercises';
// create the express application and define the port the server will listen to
const app = express();
const PORT = Number(process.env.PORT) || 3000;

// middleware for parsing json requests
app.use(express.json());

// register exercises route
app.use('/api/exercises', exercisesRouter);

// test static images for dummy backend
app.use('/images', express.static(path.join(__dirname, '../../frontend/assets/images')));

// GET route handler
app.get('/', (_req, res) => {
    res.send('API is running');
});

// start server and listen 
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at ${PORT} and now just changed`);
});