import React, { useContext } from "react";

import { View, Text } from "react-native";
import { TaskContext } from "../context/TaskContext";

export const useTasks = () => {
  const { tasks, addTask } = useContext(TaskContext);
  return { tasks, addTask };
};

const UseTasksExport = () => {
    return <View>

    </View>
}

export default UseTasksExport