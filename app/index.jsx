import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import TaskProvider from './context/TaskContext';

export default function App() {
  return(<TaskProvider><AppNavigator /></TaskProvider>)}