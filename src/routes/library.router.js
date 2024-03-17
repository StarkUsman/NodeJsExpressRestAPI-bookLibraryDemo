import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/library.controller.js';
import { createObjValid, updateObjValid, idObjValid } from '../middleware/middleware.js';
import authRouter from './auth.js';
import protectedRoute from './protectedRoute.js';

const libraryRouter = express.Router();

// all routes in this file are starting with /users
libraryRouter.get('/', getUsers);
libraryRouter.use('/auth', authRouter);
libraryRouter.use('/protected', protectedRoute);
// libraryRouter.post('/', createObjValid, createUser);     //commented because user is created by auth route at /auth/register
libraryRouter.get('/:id', idObjValid, getUser);
libraryRouter.delete('/:id', deleteUser);
libraryRouter.patch('/:id', updateObjValid, updateUser);

export default libraryRouter;