import express from 'express';

import {isAuth} from '../app/middleware/auth.js'

const commentRouter=express.Router();

import {createComment,getComment,updateComment,deleteComment} from '../app/controllers/CommentController.js'
commentRouter.get('/:id',isAuth,getComment)
commentRouter.post('/',isAuth,createComment);
commentRouter.put('/:id',isAuth,updateComment);
commentRouter.delete('/:id',isAuth,deleteComment);


export default commentRouter;