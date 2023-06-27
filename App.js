// Play.ht to the moon 🚀

/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  TBColors,
  TBFontSize,
  TBFontWeight,
  TBSpacing,
} from './src/theme/TBTheme';
import {CoreNavigation} from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import TBModal from './src/components/atoms/TBModal';
import TBCard from './src/components/atoms/TBCard';
import TBText from './src/components/atoms/TBText';
import TBSpacer from './src/components/atoms/TBSpacer';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: TBColors.smokeWhite}}>
        <Provider store={store}>
          <CoreNavigation />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

// import React, {useState} from 'react';
// import {View, Text, FlatList} from 'react-native';
// import TBInput from './src/components/atoms/TBInput';
// import {TBColors, TBFontSize, TBSpacing} from './src/theme/TBTheme';
// import TBSpacer from './src/components/atoms/TBSpacer';
// import TBButton from './src/components/atoms/TBButton';
// import TBText from './src/components/atoms/TBText';
// import TBModal from './src/components/generic/TBModal';

// const TaskApp = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskTitle, setTaskTitle] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [taskCategory, setTaskCategory] = useState('general');
//   const [taskPriority, setTaskPriority] = useState('low');

//   const createTask = () => {
//     const newTask = {
//       id: tasks.length + 1,
//       title: taskTitle,
//       description: taskDescription,
//       priority: taskPriority,
//       category: taskCategory,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTaskTitle('');
//     setTaskDescription('');
//   };

//   const completeTask = taskId => {
//     const updatedTasks = tasks.map(task =>
//       task.id === taskId ? {...task, completed: true} : task,
//     );
//     setTasks(updatedTasks);
//   };

//   const deleteTask = taskId => {
//     const updatedTasks = tasks.filter(task => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   return (
//     <View style={{flex: 1, backgroundColor: "#f6fafd"}}>
//       <TBText>Task List</TBText>

//       <TBModal />

//       <CategoriesScreen tasks={tasks} />

//       <FlatList
//         data={tasks}
//         keyExtractor={task => task.id.toString()}
//         renderItem={({item}) => (
//           <View>
//             <TBText>Title: {item.title}</TBText>
//             <TBText>Description: {item.description}</TBText>
//             <TBText>Priority: {item.priority}</TBText>
//             <TBText>Category: {item.category}</TBText>
//             {!item.completed ? (
//               <TBButton
//                 title="Complete"
//                 onPress={() => completeTask(item.id)}
//               />
//             ) : null}
//             <TBButton title="Delete" onPress={() => deleteTask(item.id)} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default TaskApp;

// const CategoriesScreen = ({tasks}) => {
//   // Extract unique categories from tasks
//   const categories = [...new Set(tasks.map(task => task.category))];

//   return (
//     <View>
//       <TBText>Categories</TBText>
//       {categories.map((category, index) => (
//         <TBText key={index}>{category}</TBText>
//       ))}
//     </View>
//   );
// };
