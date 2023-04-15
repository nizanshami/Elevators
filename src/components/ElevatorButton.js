import React, { useState, useEffect } from 'react';
import '../styles/ElevatorButton.css';

const ElevatorButton = ({onClick, state}) => {
    const [text, setText] = useState('Call');
    const [color, setColor] = useState('green');


    useEffect(() => {
      if(state === 'handled'){
        setTimeout(() => {
          setColor('transparent');
          setText('Arrived');
          setTimeout(() => {
              setColor('green');
              setText('Call');
          }, 2000);
      }, 4000); 
      }
    }, [state])

    const handleClick = () => {
        if (color === 'green'){
            onClick()
            setColor('red');
            setText('Waiting'); 
    }
        
    }; 
        

  return (
    <button className={`button ${color}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default ElevatorButton;
