import React, { useState } from 'react';
import '../styles/ElevatorButton.css';

const ElevatorButton = ({onClick}) => {
    const [text, setText] = useState('Call');
    const [color, setColor] = useState('green');

    const handleClick = () => {
        if (color === 'green'){
            onClick()
            setColor('red');
            setText('Waiting'); 
            setTimeout(() => {
                setColor('transparent');
                setText('Arrived');
                setTimeout(() => {
                    setColor('green');
                    setText('Call');
                }, 2000);
            }, 4000);
    }
        
    }; 
        

  return (
    <button className={`button ${color}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default ElevatorButton;
