import React, { ChangeEvent, useEffect, useState } from 'react';

function useLogger(value: string) {
  useEffect(() => {
    console.log('Value changed: ', value);
  }, [value]);
}

function useInput(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clear = () => {
    setValue('');
  };

  return {
    bind: { value, onChange },
    value,
    clear,
  };
}

function App() {
  const input = useInput('');

  useLogger(input.value);

  return (
    <div className="container pt-3">
      <input type="text" {...input.bind} />
      <button className="btn btn-warning" onClick={() => input.clear()}>Очистить</button>
      <hr />
      <h1>{input.value}</h1>
    </div>
  );
}

export default App;
