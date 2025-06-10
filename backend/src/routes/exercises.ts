import express, { Request, Response } from 'express';

// create a router instance
const router = express.Router();

// in memory data (for testing)
const exercises = [
    { id: 1, name: 'push-up', imageUrl: 'http://192.168.1.4:3000/images/malePushUp.jpeg', videoUrl: 'https://www.youtube.com/shorts/UIcct-7b6oE' },
    { id: 2, name: 'squat', imageUrl: 'http://192.168.1.4:3000/images/femaleSquat.jpeg', videoUrl: 'https://www.youtube.com/watch?v=xqvCmoLULNY' },
];


// GET /api/exercises
router.get('/', (req: Request, res: Response): void => {
    // extract the query from the request string
    const query = req.query.query as string;

    // if we have a query, filter the exercise array
    if (query) {
        const filtered = exercises.filter(ex =>
            ex.name.toLowerCase().includes((query).toLowerCase())
        );
        // return the filtered exercises
        res.json(filtered);
    }else {
        // if no query then show all exercises
        res.json(exercises);
    }

    
});

export default router;