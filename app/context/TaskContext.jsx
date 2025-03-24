import { View, Text } from "react-native";
import React, { createContext, useState } from "react";
import HomeScreen from "../screens/HomeScreen";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  console.log(tasks,"chillld")

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;