import React from 'react';
import Landing from './src/screens/landing/Landing';
import TBCard from './src/components/atoms/TBCard';
import {TBColors, TBSpacing} from './src/theme/TBTheme';
import HomeScreen from './src/screens/home/HomeScreen';

export default function App() {
  return (
    <TBCard
      flex={1}
      cardStyle={{
        padding: TBSpacing.xl,
        backgroundColor: TBColors.smokeWhite,
      }}>
      <HomeScreen />
    </TBCard>
  );
}

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
