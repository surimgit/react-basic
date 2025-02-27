import React from 'react';
import './App.css';
import Component, { ClassComponent, FunctionalComponent } from './component/Component'
import CurlyBraces from './component/CurlyBraces';
import Properties from './component-manage/Properties';
import ConditionRender from './component-manage/ConditionRender';
import ListRender from './component-manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwardingComponent from './interaction/ForwardingComponent';
import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';

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
      {/* <StateComponent/> */}
      {/* <ForwardingComponent/> */}
      {/* <HookComponent1/> */}
      <HookComponent2/>
    </div>
  );
}

export default App;
