import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm'; // Import ToDoForm component
import ToDoList from './ToDoList';

function App() {
  // Define state variable to store list of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Pass addTask function as a prop to ToDoForm component */}
      <ToDoForm addTask={addTask} />
      {/* Pass tasks array to ToDoList component using props */}
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
