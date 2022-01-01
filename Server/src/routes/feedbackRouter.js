import express from 'express';
import Feedback from '../models/Feedback.js';
import { isAuth} from '../middleware/auth.js';
import { getFeedback,createFeedback,updateFeedback,deleteFeedback } from '../controllers/FeedbackController.js';
const feedbackRouter=express.Router();


feedbackRouter.get('/:id',isAuth,getFeedback);
feedbackRouter.post('/',isAuth,createFeedback);
feedbackRouter.put('/:id',isAuth,updateFeedback);
feedbackRouter.delete('/:id',isAuth,deleteFeedback);

export default feedbackRouter;

