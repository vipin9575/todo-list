import React from "react";
import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <ListItem
      sx={{
        bgcolor: task.completed ? "#c8e6c9" : "#f3e5f5",
        mb: 1,
        borderRadius: 2,
        boxShadow: 1,
      }}
      secondaryAction={
        <IconButton
          edge="end"
          onClick={() => deleteTask(task.id)}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        sx={{ color: "#4caf50" }}
      />
      <ListItemText
        primary={task.text}
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
          fontSize: "1rem",
          color: task.completed ? "#757575" : "#000000",
        }}
      />
    </ListItem>
  );
};

export default TodoItem;
