import { useState, forwardRef, useImperativeHandle, Ref } from 'react';

export type TRef = {
  handleReset: () => void;
};

const Counter: React.ForwardRefRenderFunction<unknown, { ref: Ref<TRef> }> = (
  _,
  ref
) => {
  const [count, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  useImperativeHandle(ref, () => ({
    handleReset,
  }));

  return (
    <div>
      <h1 style={{ color: '#ffffff' }}>{count}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default forwardRef(Counter);
