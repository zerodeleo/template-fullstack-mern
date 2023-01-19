import express from 'express';
import controller from '../controllers/User';

const router = express.Router();

// prettier-ignore
router
    .post('/authenticate', controller.authenticateUser)
    .post('/', controller.createUser)
    .get('/:username', controller.readUser)
    .get('/', controller.readAllUsers)
    .patch('/:_id', controller.updateUser)
    .delete('/:_id', controller.deleteUser)

export = router;
