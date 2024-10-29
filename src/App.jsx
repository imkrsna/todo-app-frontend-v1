import { useEffect, useState } from 'react';
import TodoHeader from './components/Header';
import TodoContent from './components/Content';
import { addTask, deleteTask, getAllTask, updateTask } from './services/database';

const Todo = ({ tasks, setTasks }) => {
  const handleAddNew = (inputTask) => {
    addTask({task: inputTask, completed: false})
      .then(data => setTasks(tasks.concat(data)))
      .catch(error => alert(error.response.data.message));
  };

  const handleDelete = (id) => {
    deleteTask(id)
      .then(data => setTasks(tasks.filter(task => task.id !== id)))
      .catch(error => alert(error.response.data.message));
  }

  const handleUpdate = (updatedTask) => {
    updateTask(updatedTask)
      .then(data => setTasks(tasks.map(task => task.id !== updatedTask.id ? task : updatedTask)))
      .catch(error => alert(error.response.data.message));
  }

  return (
    <div className="todo">
      <div className="todo__title">Checklist</div>
      <TodoHeader handleAddNew={handleAddNew} />
      <TodoContent
        tasks={tasks}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

const App = () => {
  const [tasks, setTasks] = useState([]);

  // getting all tasks
  useEffect(() => {
    getAllTask()
      .then(data => setTasks(data))
      .catch(error => alert(error.message));
  }, []);

  return (
    <div className="container">
      <Todo tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;