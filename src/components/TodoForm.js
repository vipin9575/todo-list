import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        mt: 3,
        backgroundColor: "#e8f5e9",
        p: 2,
        borderRadius: 2,
      }}
    >
      <TextField
        fullWidth
        label="Add a task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        sx={{ bgcolor: "#ffffff", borderRadius: 1 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Add 
      </Button>
    </Box>
  );
};

export default TodoForm;
