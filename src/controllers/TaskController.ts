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

  store(request: Request, response: Response) {
    const { text } = request.body;

    if (!text) {
      return response.status(400).json({ error: 'Text is required' });
    }

    const newTask = TaskRepository.create(text);

    response.status(201).json(newTask);
  }

  update(request: Request, response: Response) {
    const { id } = request.params;
    const { done } = request.body;

    if (!id) {
      return response.status(400).json({ error: 'Invalid task id' });
    }

    const taskExists = TaskRepository.findById(id);

    if (!taskExists) {
      return response.status(404).json({ error: 'Task not found' });
    }

    if (typeof done !== 'boolean') {
      return response.status(400).json({ error: 'Done must be a boolean' });
    }

    const updatedTask = TaskRepository.update(id, done);

    response.status(201).json(updatedTask);
  }

  delete(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ error: 'Invalid task id' });
    }

    const taskExists = TaskRepository.findById(id);

    if (!taskExists) {
      return response.status(404).json({ error: 'Task not found' });
    }

    TaskRepository.delete(id);

    response.sendStatus(204);
  }
}

export default new TaskController();
