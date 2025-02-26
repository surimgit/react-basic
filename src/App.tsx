import React from 'react';
import './App.css';
import Component, { ClassComponent, FunctionalComponent } from './component/Component'
import CurlyBraces from './component/CurlyBraces';
import Properties from './component-manage/Properties';
import ConditionRender from './component-manage/ConditionRender';
import ListRender from './component-manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';

function App() {
  return (
    <div>
      {/* <ClassComponent/>
      <FunctionalComponent/>
      <Component /> */}
      {/* <CurlyBraces></CurlyBraces> */}
      {/* <Properties/> */}
      {/* <ConditionRender/> */}
      {/* <ListRender/> */}
      {/* <EventComponent/> */}
      <StateComponent/>
    </div>
  );
}

export default App;
