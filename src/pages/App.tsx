import React from 'react';
import  Form  from '../components/form';
import  List  from '../components/list';
import StopWatch from '../components/stopwatch';

import style from './App.style.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
      <StopWatch/>
    </div>
  );
}

export default App;
