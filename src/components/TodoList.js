import { List } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  // console.log(tasks)
  return (
    <List>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </List>
  );
};

export default TodoList;
