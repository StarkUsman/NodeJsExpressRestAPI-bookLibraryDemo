import Joi from 'joi';

const createValidator = Joi.object({
    userName: Joi.string().required(),
    bookTitle: Joi.string().required(),
    allottedDate: Joi.date().default(new Date()),
    hasReturned: Joi.boolean().default(false),
});

const updateValidator = Joi.object({
    userName: Joi.string(),
    bookTitle: Joi.string(),
    allottedDate: Joi.date(),
    hasReturned: Joi.boolean(),
});

const idValidator = Joi.object({
    id: Joi.string().required(),
});

export { createValidator, updateValidator, idValidator };