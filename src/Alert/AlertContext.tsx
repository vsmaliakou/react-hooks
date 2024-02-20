import React, { createContext, useContext, useReducer } from 'react';

export interface IAlertContext {
  visible: boolean;
  text: string;
  show: (text: string) => void;
  hide: () => void;
}
  
export const AlertContext = createContext<IAlertContext>({
  visible: false,
  text: '',
  show: () => {},
  hide: () => {},
});

export const useAlert = () => {
  return useContext(AlertContext);
};

const SHOW_ALERT = 'show';
const HIDE_ALERT = 'hide';

const reducer = (state: { visible: boolean, text: string }, action: any) => {
  switch (action.type) {
    case SHOW_ALERT: {
      return { ...state, visible: true, text: action.text };
    }
    case HIDE_ALERT: {
      return { ...state, visible: false };
    }
    default: {
      return state;
    }
  }
};

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: '',
  });

  const show = (text: string) => dispatch({ type: SHOW_ALERT, text });

  const hide = () => dispatch({ type: HIDE_ALERT });

  return (
    <AlertContext.Provider value={{ visible: state.visible, text: state.text, show, hide }}>
      {children}
    </AlertContext.Provider>
  );
}
