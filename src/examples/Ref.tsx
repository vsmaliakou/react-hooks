import React, { useEffect, useRef, useState } from 'react';

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevValue = useRef('');

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current?.focus();

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input ref={inputRef} type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      <button className="btn btn-success" onClick={focus}>Фокус</button>
    </div>
  );
}

export default App;
