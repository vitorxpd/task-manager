import { Request, Response } from 'express';

import TaskRepository from '../repositories/TaskRepository';

class TaskController {
  index(request: Request, response: Response) {
    const tasks = TaskRepository.findAll();

    response.json(tasks);
  }

  show(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ error: 'Invalid task id' });
    }

    const task = TaskRepository.findById(id);

    if (!task) {
      return response.status(404).json({ error: 'Task not found' });
    }

    response.json(task);
  }
}

export default new TaskController();
