import express from 'express';
import { getUser, getEvents, editEvent } from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* READ */
router.get('/:id', verifyToken, getUser);
router.get('/:id/events', verifyToken, getEvents);

/* UPDATE */
router.patch('/:id/:eventId', verifyToken, editEvent);

export default router;
