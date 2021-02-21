import React from 'react';
import './NewTodoForm.css'

function NewTodoForm({ formData, changeHandler, submitHandler }) {
  return (
  <form onSubmit={submitHandler}>
    <label htmlFor="todo">Input items for your to-do list:</label>
    <input 
    type="text"
    id="todo"
    name="todo"
    value={formData.todo}
    onChange={changeHandler}
    />
    <button type="submit" className="add-btn">Add</button>
  </form>
  );
}

export default NewTodoForm;
