import React from 'react';
import './App.css';
import Component, { ClassComponent, FunctionalComponent } from './component/Component'
import CurlyBraces from './component/CurlyBraces';

function App() {
  return (
    <div>
      {/* <ClassComponent/>
      <FunctionalComponent/>
      <Component /> */}
      <CurlyBraces></CurlyBraces>
    </div>
  );
}

export default App;
