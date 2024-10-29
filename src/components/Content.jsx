import TodoTask from './Task';

const TodoContent = ({ tasks, handleDelete, handleUpdate }) => {
  return (
    <div className="todo__content">
      <ul className="todo__list">
        {tasks.map(task => 
          <TodoTask
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </ul>
    </div>
  );
}

export default TodoContent;