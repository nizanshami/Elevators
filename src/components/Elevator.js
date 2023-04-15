import React from "react";
import { useEffect, useState } from "react";
import elevatorSound from '../assets/elevatorSound.wav'
function Elevator({state}) {
    const [color, setColor] = useState('black');    
    
    useEffect(() => {
      if(state === 'occupied'){
        setColor('red');
        setTimeout(() => {
          new Audio(elevatorSound).play();
          setColor('green');
          setTimeout(() => {
            setColor('black');
          }, 2000);
        }, 4000);
      }
      
      if(state === 'ready'){
        setColor('black');
      }
          }, [state])
    
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill={color} >
        <path d="M15.875 0a1 1 0 00-.656.375l-5 6c-.242.3-.29.71-.121 1.059.168.347.52.566.902.566h10c.383 0 .734-.219.902-.566a.994.994 0 00-.12-1.059l-5-6A.999.999 0 0015.874 0zm13.938 0a1.01 1.01 0 00-.766.64c-.121.337-.055.712.172.985l5 6a.998.998 0 001.562 0l5-6c.242-.3.29-.71.121-1.059A1.002 1.002 0 0040 0H29.813zm2.312 2h5.75L35 5.438zM16 2.563L18.875 6h-5.75zM3 10c-1.645 0-3 1.355-3 3v34c0 1.645 1.355 3 3 3h44c1.645 0 3-1.355 3-3V13c0-1.645-1.355-3-3-3zm0 2h44c.555 0 1 .445 1 1v34c0 .555-.445 1-1 1H3c-.555 0-1-.445-1-1V13c0-.555.445-1 1-1zm8 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 8c-3.324 0-6 2.676-6 6v7a.994.994 0 00.563.906L7 36.625V45c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-8.375l1.438-.719A.994.994 0 0017 35v-7c0-3.324-2.676-6-6-6zm14-8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 8c-3.324 0-6 2.676-6 6v7a.994.994 0 00.563.906l1.437.719V45c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-8.375l1.438-.719A.994.994 0 0031 35v-7c0-3.324-2.676-6-6-6zm14-8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 8c-3.324 0-6 2.676-6 6v7a.994.994 0 00.563.906l1.437.719V45c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-8.375l1.438-.719A.994.994 0 0045 35v-7c0-3.324-2.676-6-6-6zm-28-6c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm14 0c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm14 0c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm-28 8c2.277 0 4 1.723 4 4v6.375l-1.438.719A.994.994 0 0013 36v8H9v-8a.994.994 0 00-.563-.906L7 34.375V28c0-2.277 1.723-4 4-4zm14 0c2.277 0 4 1.723 4 4v6.375l-1.438.719A.994.994 0 0027 36v8h-4v-8a.994.994 0 00-.563-.906L21 34.375V28c0-2.277 1.723-4 4-4zm14 0c2.277 0 4 1.723 4 4v6.375l-1.438.719A.994.994 0 0041 36v8h-4v-8a.994.994 0 00-.563-.906L35 34.375V28c0-2.277 1.723-4 4-4z"></path>
    </svg>   
  );
}

export default Elevator;
