const tasks = [
  {
    id: '1',
    text: 'Fazer compras',
  },
  {
    id: '2',
    text: 'Estudar',
  },
  {
    id: '3',
    text: 'Ir ao cinema',
  },
  {
    id: '4',
    text: 'Jogar videogame',
  },
  {
    id: '5',
    text: 'Ler livros',
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
}

export default new TaskRepository();
