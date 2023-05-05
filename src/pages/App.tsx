import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import StopWatch from '../components/stopwatch';

import style from './App.style.module.scss';
import { ITask } from '../types/Itask';

function App() {
  const [tasks, setTask] = useState<ITask[] | []>([])
  const [selected,setSelected]=useState<ITask>();

  function selectTask(taskSelected: ITask){
    setSelected(taskSelected)
    setTask(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: taskSelected.id === task.id
    })))
  }

  return (

    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List tasks={tasks} selectTask={selectTask}/>
      <StopWatch taskSelected={selected}/>
    </div>
  );
}

export default App;
