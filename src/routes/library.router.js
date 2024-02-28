import express from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/library.controller.js';


const libraryRouter = express.Router();

// all routes in this file are starting with /users
libraryRouter.get('/', getUsers);
libraryRouter.post('/', createUser);
libraryRouter.get('/:id', getUser);
libraryRouter.delete('/:id', deleteUser);
libraryRouter.patch('/:id', updateUser);

export default libraryRouter;