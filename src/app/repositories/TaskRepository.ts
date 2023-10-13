import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  text: string;
  done: boolean;
}

let tasks: Task[] = [
  {
    id: '1',
    text: 'Fazer compras',
    done: true,
  },
  {
    id: uuidv4(),
    text: 'Estudar',
    done: false,
  },
  {
    id: uuidv4(),
    text: 'Ir ao cinema',
    done: false,
  },
  {
    id: uuidv4(),
    text: 'Jogar videogame',
    done: false,
  },
  {
    id: uuidv4(),
    text: 'Ler livros',
    done: false,
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
      id: uuidv4(),
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
