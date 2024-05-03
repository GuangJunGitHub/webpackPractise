import React, {memo} from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = memo(({onClick, children}) => {

  return (
    <button onClick={onClick}>
    {children}
    </button>
  )
})