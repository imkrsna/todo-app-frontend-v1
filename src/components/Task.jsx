import { useEffect, useRef, useState } from "react";

const TodoCheck = ({ isChecked, setIsChecked }) => {
  const handleChange = () => setIsChecked(!isChecked);

  return (
    <div className="todo__check" onClick={handleChange}>
      <i>✅</i>
    </div>
  );
}


const TodoTask = ({ task, handleDelete, handleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputTask, setInputTask] = useState(task.task);
  const [isChecked, setIsChecked] = useState(task.completed);
  const inputRef = useRef(null);

  const handleInput = (event) => setInputTask(event.target.value);
  const handleDeleteButton = () => handleDelete(task.id);
  const handleEditButton = () => setIsEditing(true);
  const handleBlur = () => setIsEditing(false);
  
  useEffect(() => {
    if (isChecked != task.completed || inputTask != task.task) {
      handleUpdate({id: task.id, task: inputTask, completed: isChecked});
    }
    inputRef.current.focus();
  }, [isEditing, isChecked]);

  return (
    <li className={`todo__task ${isChecked ? "todo__task--active" : ''}`}>
      <TodoCheck task={task} isChecked={isChecked} setIsChecked={setIsChecked}/>
      <input
        type="text"
        className="todo__text"
        value={inputTask}
        onChange={handleInput}
        onBlur={handleBlur}
        disabled={!isEditing}
        ref={inputRef}
      />
      <div className="todo__btns">
        <button className="todo__btn" onClick={handleEditButton}>✏️</button>
        <button className="todo__btn" onClick={handleDeleteButton}>❌</button>
      </div>
    </li>
  );
}

export default TodoTask;