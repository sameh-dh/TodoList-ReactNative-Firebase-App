# Hello everyone 🌸 

<p>
I created this project to deepen my understanding of React Native through hands-on implementation. Along the way, I documented key concepts and insights that I believe will serve as a valuable reference when revisiting this project. Detailed documentation is crucial for navigating older projects effectively, so take your time, stay focused, and don't get discouraged!
</p>
<hr></hr>
<h3>💙 Enjoy this journey into the world of React Native! 💙</h3>
<hr></hr>

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

#### 1. [Set up project 🤗](#project-Set-up-bash-commands)


## project Set-up bash commands 🤗

```bash
npx create-expo-app@latest
npm run reset-project
```
### make sure that your react native app works 
```js
  the first step is to create app folder and _layout.jsx and index.jsx files and return any text
```

### First Lesson : Know how to navigate inside ur app 
```js
  //First thing you have to know that the best navigation approach is to use Drawer + Tabs + Stack. 
Tabs: Ideal for common pages like Home, Profile, and Settings.
Stack: Great for workflows like opening a task’s details from Home.
Drawer: Best for accessing less-used pages like Help, About, or Logout.
```
```js
//In this simple to do app we will use only stack navigation so i'll explain how to set it up so we can start properly: 
// First of all you'll have to return AppNavigator in your app or index file bc we will add to it all the screens to navigate between them easly "always look for the right way to do it and not the easiest"


```
### Breakdown of Key Folders:
```bash

components/ – Stores reusable UI components like buttons, task items, or modals.
screens/ – Each app screen (e.g., Home, Task Details) is stored separately.
navigation/ – Keeps all navigation-related code (e.g., Stack, Tab navigators).
context/ – If using Context API, keep global state management here.
hooks/ – Custom hooks for managing app logic (e.g., useTasks.js).
services/ – Handles API requests, local storage, or any external services.
utils/ – Stores helper functions like date formatters or string manipulators.
constants/ – Defines constant values like colors, routes, and action types.

```
### Challenge use this advanced file structure in your app : 

```bash
/todo-app
│── assets/                # Static assets (images, icons, fonts)
│── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── TaskItem.js    # Single task component
│   │   ├── Button.js      # Custom button component
│   │   ├── Input.js       # Custom input field
│   ├── screens/           # App screens
│   │   ├── HomeScreen.js  # Main to-do list screen
│   │   ├── AddTaskScreen.js # Screen to add tasks
│   ├── navigation/        # App navigation setup
│   │   ├── AppNavigator.js # Stack or Tab navigation
│   ├── context/           # Context API (if using)
│   │   ├── TaskContext.js  # Context for managing tasks
│   ├── hooks/             # Custom hooks
│   │   ├── useTasks.js     # Hook for managing tasks
│   ├── utils/             # Utility/helper functions
│   │   ├── storage.js      # AsyncStorage functions
│   ├── config/            # Configuration files
│   │   ├── colors.js       # Theme colors
│   ├── styles/            # Global styles (optional)
│   │   ├── global.js       # Global styles file
│   ├── App.js             # Main entry point
│── .expo/                 # Expo-related files (auto-generated)
│── .gitignore             # Git ignore file
│── app.json               # Expo app configuration
│── babel.config.js        # Babel configuration
│── package.json           # Dependencies and scripts
│── README.md              # Project documentation


```
