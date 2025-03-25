
import React , {useState}from 'react'
import { View, TextInput, Button , Text} from 'react-native'
// import {useTasks} from '../hooks/useTasks'

const AddTaskScreen = ({navigation}) => {
const [task, setTask] =useState('');
// const {addTask} = useTasks();

const handleAddTask = () => {
  // addTask(task);
setTask('')
navigation.goBack();}
  return (
    <View>
      <TextInput placeholder='EnterTask' value={task} onChangeText={setTask} style={{"backgroundColor":"pink", "width":"50px"}}></TextInput>
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  )
}

export default AddTaskScreen