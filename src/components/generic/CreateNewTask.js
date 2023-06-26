import React, {useState} from 'react';
import TBText from '../atoms/TBText';
import TBInput from '../atoms/TBInput';
import TBSpacer from '../atoms/TBSpacer';
import TBButton from '../atoms/TBButton';
import TBCard from '../atoms/TBCard';

const CreateNewTask = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskCategory, setTaskCategory] = useState('general');
  const [taskPriority, setTaskPriority] = useState('low');

  const createTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      description: taskDescription,
      priority: taskPriority,
      category: taskCategory,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <>
      <TBText>Add Task</TBText>
      <TBInput
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={text => setTaskTitle(text)}
      />
      <TBSpacer />

      <TBCard>
        <TBText>Category</TBText>
        <TBButton title="PERSONAL" />
      </TBCard>

      <TBInput
        placeholder="Task Description"
        value={taskDescription}
        onChangeText={text => setTaskDescription(text)}
      />
      <TBSpacer />
      <TBInput
        placeholder="Priority"
        value={taskPriority}
        onChangeText={text => setTaskPriority(text)}
      />
      <TBSpacer />
      <TBInput
        placeholder="Category"
        value={taskCategory}
        onChangeText={text => setTaskCategory(text)}
      />
      <TBButton title="Create Task" onPress={createTask} />
    </>
  );
};

export default CreateNewTask;
