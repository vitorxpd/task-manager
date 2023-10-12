const tasks = [
  {
    id: '1',
    text: 'Oiteste',
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
