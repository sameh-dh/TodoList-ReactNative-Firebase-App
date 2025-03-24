import { View, Text } from 'react-native'
import React, {createContext,useState} from 'react'

const TaskContext = createContext();
    
 const TaskProvider=({children}) =>{
    const [tasks, setTasks] =useState([]);
    const addTask =(task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    }
 
  return (
    <TaskContext.Provider value={{tasks, addTask}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider