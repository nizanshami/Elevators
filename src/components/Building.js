import React, { useState} from 'react';
import '../styles/Building.css';
import floors from '../utils/floors'
import ElevatorButton from './ElevatorButton';
import Elevator from './Elevator';
import { useSprings, animated } from '@react-spring/web';

const Building = () => {
    const shafts = [0, 1, 2, 3, 4];
    const [elevatorPositions, setElevatorPositions] = useState([0, 0, 0, 0, 0]);
    
    const elevatorSprings = useSprings(
        elevatorPositions.length,
        elevatorPositions.map((position) => ({
          transform: `translateY(${position}px)`,
          from: { transform: 'translateY(0px)' },
          config: { duration: 4000 },
        }))
      );
    


    const handleClick = (floor) => {
        // Find the closest elevator to the clicked floor
        let closestElevator = shafts[0];
        for (let i = 0; i < shafts.length; i++) {
          if (Math.abs(-elevatorPositions[i] - floor * 50) < Math.abs(-elevatorPositions[closestElevator] - floor * 50)) {
            closestElevator = i;
          }
        }
        
        
        // Move the closest elevator to the clicked floor
        const newElevatorPositions = [...elevatorPositions];
        newElevatorPositions[closestElevator] = -floor * 50;
        setElevatorPositions(newElevatorPositions);
        
        return 4000;
    };
          
    
  return (
    <div className="building">
      <div className="building-title">Elevators exercise</div>
      <div className='shafts-container'>
      {elevatorSprings.map((spring, index) => (
                    <animated.div key={index} style={spring} className="shaft">
                        <Elevator />
                    </animated.div>
                ))}
 
        </div>
      <div className="floors-container">
        {floors.map((floor, index) => (
          <div key={index} className="floor">
            <span className="floor-name">{floor.name}</span>
            {floor.elevators.map((elevator, index) => (
                <div key={index} className="elevator-shaft">
                </div>
            ))}
            <div><ElevatorButton onClick={() => handleClick(floor.id)}/> </div>
          </div>
           
        ))}
      </div>
    </div>
  );
};

export default Building;
