import React from 'react';
import Counter01 from './components/counter01'
import Counter02 from './components/counter02'
function App() {
  return (
    <div className="App">
      <h4>类组件计数器</h4>
      <Counter01 />
      <h4>函数组件+hooks计数器</h4>
      <Counter02 />
    </div>
  );
}

export default App;
