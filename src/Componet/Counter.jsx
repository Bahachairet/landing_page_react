import React, { useState } from 'react';

function Counter({ Data }) {
  console.log(Data);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>
        {Data.map((item, index) => (
          <div key={index}>
            <h1 className="text-3xl font-bold underline">{item.test}</h1>
          </div>
        ))}
      </div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
    </div>
  );
}

export default Counter;
