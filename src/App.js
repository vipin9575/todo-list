import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Typography, Paper } from "@mui/material";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#7d9069",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: "bold",
      color: "#4caf50",
    },
  },
});

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            To-Do List
          </Typography>
          <TodoForm addTask={addTask} />
          <TodoList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
