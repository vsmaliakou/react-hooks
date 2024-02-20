import React from 'react';
import { useAlert } from './AlertContext';

export default function Alert() {
  const { visible, text, hide } = useAlert();

  if (!visible) {
    return null;
  }

  return (
    <div className="alert alert-danger" onClick={hide}>
      {text}
    </div>
  );
}
