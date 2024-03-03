import {
    createValidator,
    updateValidator,
    idValidator
} from '../validators/dataValidator.js';

const createObjValid = async (req, res, next) => {
    try{
        if(!req.body){
            return res.status(400).send('Data is required');
        }
        await createValidator.validateAsync(req.body);
        // console.log('Data for create record is valid');
        next();
    } catch (error) {
        return res.status(400).send(error.details[0].message);
    }
};

const updateObjValid = async (req, res, next) => {
    try{
        if(!req.body || Object.keys(req.body).length === 0){
            return res.status(400).send('Data is required');
        }
        await updateValidator.validateAsync(req.body);
        // console.log('Data for update record is valid');
        next();
    } catch (error) {
        return res.status(400).send(error.details[0].message);
    }
};

const idObjValid = async (req, res, next) => {
    try{
        if(!req.params){
            return res.status(400).send('Id is required');
        }
        await idValidator.validateAsync(req.params);
        // console.log('Id for record is valid');
        next();
    } catch (error) {
        return res.status(400).send(error.details[0].message);
    }
};

export { createObjValid, updateObjValid, idObjValid };