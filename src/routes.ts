import { Router } from 'express';

import TaskController from './app/controllers/TaskController';

export const router = Router();

router.get('/tasks', TaskController.index);
router.get('/tasks/:id', TaskController.show);
router.post('/tasks', TaskController.store);
router.patch('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);
