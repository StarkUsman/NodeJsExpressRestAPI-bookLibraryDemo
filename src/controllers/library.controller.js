import { v4 as uuidv4 } from 'uuid';
import LibrarySchema from '../models/library.models.js';

let users = [];
const getUsers = async (req, res) => {
    const users = await LibrarySchema.find();
    // res.json(users);
    res.send(users);
};
const createUser = async (req, res) => {
    const user = req.body;
    const userWithId = { ...user, id: uuidv4() };
    
    try{
        const newUser = await LibrarySchema.create(userWithId);
        // res.send(`user with username ${user.firstName} added to the database`);
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};


const getUser = async (req, res) => {
    const { id } = req.params;
    try{
        const result = await LibrarySchema.findById(id);
        res.send(result);
    } catch (error) {
    res.send(error.message);
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        const result = await LibrarySchema.findByIdAndDelete(id);
        // res.json(result);
        res.send(`user with id ${id} deleted from the database`);        
    } catch (error) {
    res.send(error.message);
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { userName, bookTitle, allottedDate, hasReturned } = req.body;
    try{
        const result = await LibrarySchema.findByIdAndUpdate(
            id,
            { userName, bookTitle, allottedDate, hasReturned }, { new: true });
        res.json(result);
        // res.send(`user with id ${id} has been updated`);
} catch (error) {
    res.send(error.message);
    }
};

// const updateUser = async (req, res) => {
//     const { id } = req.params;
//     const { firstName, lastName, age } = req.body;
//     const user = users.find((user) => user.id === id);
//     if(firstName) user.firstName = firstName;
//     if(lastName) user.lastName = lastName;
//     if(age) user.age = age;
//     res.send(`user with id ${id} has been updated`);
// }

export { createUser, getUsers, getUser, deleteUser, updateUser };