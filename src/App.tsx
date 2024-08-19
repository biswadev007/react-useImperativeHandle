import './App.css';
import { useRef } from 'react';

import Counter, { TRef } from './Counter';

function App() {
  const handleRef = useRef<TRef>(null);

  return (
    <div className='App'>
      <Counter ref={handleRef} />
      <button
        style={{ marginTop: '1rem' }}
        onClick={() => handleRef.current?.handleReset()}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
