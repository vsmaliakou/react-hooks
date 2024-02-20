import React, { useEffect, useState } from 'react';

interface ItemsListProps {
  getItems: (indexNumber: number) => string[];
}

export default function ItemsList({ getItems }: ItemsListProps) {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const newItems = getItems(42);
    setItems(newItems);
  }, [getItems]);

  return (
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
