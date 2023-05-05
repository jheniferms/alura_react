import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import StopWatch from '../components/stopwatch';

import style from './App.style.module.scss';
import { ITask } from '../types/Itask';

function App() {
  const [tasks, setTask] = useState<ITask[] | []>([])
  return (

    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <List tasks={tasks} />
      <StopWatch />
    </div>
  );
}

export default App;
