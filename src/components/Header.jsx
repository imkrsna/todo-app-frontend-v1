import { useState } from "react";

const Button = ({ type, title }) => {
  return (
    <button type={type} className="todo__add">{title}</button>
  );
}

const TodoHeader = ({ handleAddNew }) => {
  const [inputTask, setInputTask] = useState('');

  const handleInputTask = (event) => setInputTask(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNew(inputTask);
    setInputTask('');
  };

  return (
    <form className="todo__header" onSubmit={handleSubmit}>
      <input 
        type="text"
        className="todo__input"
        placeholder="What we doign today?"
        value={inputTask}
        onChange={handleInputTask}
      />

      <Button type="submit" title="Add" />
    </form>
  );
};

export default TodoHeader;