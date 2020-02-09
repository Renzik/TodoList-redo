import React from "react";

const TodoForm = props => {
  const { handleChange, handleSubmit, taskName, assignee } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="taskName">Task Name: </label>
      {/* we use this.state.taskName to make a connection with the state. */}
      <input
        onChange={handleChange}
        value={taskName}
        name="taskName"
        type="text"
      />

      <label htmlFor="assignee">Assign To: </label>
      <input
        onChange={handleChange}
        value={assignee}
        name="assignee"
        type="text"
      />

      <button disabled={taskName && assignee ? false : true} type="submit">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
