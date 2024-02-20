import React, { useCallback, useState } from 'react';
import ItemsList from '../ItemsList';

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'black',
  };

  const generateItemsFromAPI = useCallback((indexNumber: number) => {
    return new Array(count).fill('').map((_, index) => `Элемент ${index + indexNumber}`);
  }, [count]);

  return (
    <div>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button className="btn btn-success" onClick={() => setCount((prev) => prev + 1)}>Добавить</button>
      <button className="btn btn-warning" onClick={() => setColored((prev) => !prev)}>Изменить</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  );
}

export default App;
