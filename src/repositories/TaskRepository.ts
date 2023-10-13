import { randomUUID } from 'node:crypto';

import { Task } from '../typings/task';

let tasks: Task[] = [
  {
    id: randomUUID(),
    text: 'Estudar',
    done: true,
  },
];

class TaskRepository {
  findAll() {
    return tasks;
  }

  findById(id: string) {
    const item = tasks.find((task) => task.id === id);

    return item;
  }

  create(text: string) {
    const newTask: Task = {
      id: randomUUID(),
      text,
      done: false,
    };

    tasks.push(newTask);

    return newTask;
  }

  update(id: string, done: boolean) {
    const currentTask = tasks.find((task) => task.id === id);
    currentTask!.done = done;

    return currentTask;
  }

  delete(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);

    tasks = newTasks;

    return;
  }
}

export default new TaskRepository();
