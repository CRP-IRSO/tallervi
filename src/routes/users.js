import {UserController} from './ ../controller/UserController';
import {Router} from 'express'

const router = Router();

// Get todos los users
router.get('/', UserController.getAll);

//Get un solo user
router.get('/:id', UserController.getById);

//Create un nuevo usuario
router.post('/', UserController.newUser);

//Editar user
router.patch('/:id', UserController.editUser);

//Delete
router.delete('/:id', UserController.deleteUSer);

export default router;
