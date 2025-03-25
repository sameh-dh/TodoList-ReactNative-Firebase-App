import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "../components/TaskItem";

const HomeScreen = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);

  return (
    <View>
      <Text>To-Do List</Text>
      {tasks.map((task, index) => {
        return <TaskItem key={index} task={task} />;
      })}

      <Button title="Add Task" onPress={() => navigation.navigate("AddTask")} />
    </View>
  );
};

export default HomeScreen;
