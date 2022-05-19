fimport React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  let increment = () =>{
    setCounter(counter + 1);
  };
  
  return (
    <div id="mainArea">
      <p>button count: <span>{counter}</span></p>
      <button onClick={increment} id="mainButton" >Increase</button>
    </div>
  );
};

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
