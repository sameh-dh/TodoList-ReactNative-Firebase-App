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
│── /src
│   │── /components        
│   │   │── TaskItem.js    
│   │── /screens           
│   │   │── HomeScreen.js  
│   │── /navigation        
│   │   │── AppNavigator.js
│   │── /context           
│   │   │── TaskContext.js 
│   │── /services          
│   │   │── storage.js     
│   │── /utils             
│   │   │── helpers.js     
│   │── /constants         
│   │   │── colors.js      
│   │── App.js             
│   │── index.js           
│
│── /assets                
│── package.json           
│── .gitignore             
│── README.md              

```
