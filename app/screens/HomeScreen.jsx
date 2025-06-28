import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "../components/TaskItem";
import AddTaskScreen from "./AddTaskScreen";
import { useTasks } from "../hooks/useTasks";
import Input from "../components/Input";

const HomeScreen = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);
  const [task, setTask] = useState("");
  const { addTask } = useTasks();

  const SetTasksFunc = (e) => {
    return setTask(e);
  };

  const handleAddTask = () => {
    addTask(task);
    setTask("");
    // navigation.goBack();
  };

  return (
    <View style={styles.HomeContainer}>
      <View style={styles.InputButtonContainer}>
        <Input
          InputValue={task}
          Func={SetTasksFunc}
          InputPlaceHolder="Write your task here .."
        />

        <AddTaskScreen handleTask={handleAddTask} />
      </View>
      {tasks.map((task, index) => {
        return <TaskItem key={index} task={task} />;
      })}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF2E5",
    width: "100%",
    padding: 20,
  },
  InputButtonContainer: {
    flexDirection: "row", // This makes children align horizontally
    justifyContent: "space-between",
    width: "100%", // Adjust as needed
    marginBottom : 30,
    // borderBottomWidth: 2,
    // borderBottomColor : "white"

  },
});
