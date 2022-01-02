import express from 'express';
import Feedback from '../app/models/Feedback.js';
import { isAuth} from '../app/middleware/auth.js'
import { getFeedback,createFeedback,updateFeedback,deleteFeedback } from '../app/controllers/FeedbackController.js';
const feedbackRouter=express.Router();


feedbackRouter.get('/:id',isAuth,getFeedback);
feedbackRouter.post('/',isAuth,createFeedback);
feedbackRouter.put('/:id',isAuth,updateFeedback);
feedbackRouter.delete('/:id',isAuth,deleteFeedback);

export default feedbackRouter;

