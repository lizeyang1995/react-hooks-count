import React from 'react';
import Counter01 from './components/counter01'
import Counter02 from './components/counter02'
import Counter03 from './components/counter03'
import Counter04 from './components/counter04'
function App() {
  return (
    <div className="App">
      <h4>类组件计数器</h4>
      <Counter01 />
      <h4>函数组件+hooks计数器</h4>
      <Counter02 />
      <h4>函数组件+hooks计时器</h4>
      <Counter03 />
      <h4>函数组件+hooks可暂停计时器</h4>
      <Counter04 />
    </div>
  );
}

export default App;
