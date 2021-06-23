import { useState } from 'react';

type ButtonType = {
  text?: string;
};

export const Button = (props: ButtonType) => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return <button onClick={increment}>{counter}</button>;
};
