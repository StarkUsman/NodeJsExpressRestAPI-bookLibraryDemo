import { describe, it, mock } from 'node:test';
import assert from 'node:assert/strict';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../src/controllers/library.controller.js';
import LibrarySchema from '../src/models/library.models.js';

// describe('Controller Tests', () => {
//     it('should get users', async () => {
//         const users = [{ name: 'User 1' }, { name: 'User 2' }];
//         mock.method(LibrarySchema, 'find', async () => users);

//         const req = {};
//         const res = {
//             send: (data) => {
//                 assert.deepEqual(data, users);
//             }
//         };

//         await getUsers(req, res);
//     });

//     // Similarly, implement tests for other controller functions
// });

describe('Controller Tests', () => {
    it('should create a new user', async () => {
        const req = { body: { firstName: 'John', lastName: 'Doe', age: 30 } };
        const newUser = { id: '1', firstName: 'John', lastName: 'Doe', age: 30 };
        
        mock.method(LibrarySchema, 'create', async () => newUser);

        const res = {
            status: (code) => ({
                json: (data) => {
                    assert.equal(code, 201);
                    assert.deepEqual(data, newUser);
                }
            })
        };

        await createUser(req, res);
    });

    it('should get users', async () => {
        const users = [{ id: '1', firstName: 'John', lastName: 'Doe', age: 30 }];
        mock.method(LibrarySchema, 'find', async () => users);

        const res = {
            send: (data) => {
                assert.deepEqual(data, users);
            }
        };

        await getUsers({}, res);
    });

    it('should get user by ID', async () => {
        const userId = '1';
        const user = { id: userId, firstName: 'John', lastName: 'Doe', age: 30 };
        mock.method(LibrarySchema, 'findById', async () => user);

        const req = { params: { id: userId } };
        const res = {
            send: (data) => {
                assert.deepEqual(data, user);
            }
        };

        await getUser(req, res);
    });

    it('should delete user by ID', async () => {
        const userId = '1';
        const deletedUser = { id: userId, firstName: 'John', lastName: 'Doe', age: 30 };
        mock.method(LibrarySchema, 'findByIdAndDelete', async () => deletedUser);

        const req = { params: { id: userId } };
        const res = {
            send: (message) => {
                assert.equal(message, `user with id ${userId} deleted from the database`);
            }
        };

        await deleteUser(req, res);
    });

    it('should update user by ID', async () => {
        const userId = '1';
        const updatedUser = { id: userId, firstName: 'Jane', lastName: 'Doe', age: 35 };
        mock.method(LibrarySchema, 'findByIdAndUpdate', async () => updatedUser);

        const req = { params: { id: userId }, body: { firstName: 'Jane', lastName: 'Doe', age: 35 } };
        const res = {
            json: (data) => {
                assert.deepEqual(data, updatedUser);
            }
        };

        await updateUser(req, res);
    });
});
