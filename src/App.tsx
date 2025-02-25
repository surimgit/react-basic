import React from 'react';
import './App.css';
import Component, { ClassComponent, FunctionalComponent } from './component/Component'
import CurlyBraces from './component/CurlyBraces';
import Properties from './component-manage/Properties';
import ConditionRender from './component-manage/ConditionRender';
import ListRender from './component-manage/ListRender';

function App() {
  return (
    <div>
      {/* <ClassComponent/>
      <FunctionalComponent/>
      <Component /> */}
      {/* <CurlyBraces></CurlyBraces> */}
      {/* <Properties/> */}
      {/* <ConditionRender/> */}
      <ListRender/>
    </div>
  );
}

export default App;
