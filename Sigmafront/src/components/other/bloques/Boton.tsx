import React from 'react';

interface ButtonProps {
  onClick: () => void;
  isDisabled: boolean;
  text: string;
  class: string;
}
// className={`Boton ${class}`} 
function Button(props: ButtonProps): JSX.Element {
  const { onClick, isDisabled, text } = props;

  return (

    <button onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
}

export default Button;