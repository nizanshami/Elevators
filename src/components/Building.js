import React, {useState, useEffect} from 'react';
import '../styles/Building.css';
import floors from '../utils/floors'
import ElevatorButton from './ElevatorButton';
import Elevator from './Elevator';
import { useSprings, animated } from '@react-spring/web';

const Building = () => {
    const [elevatorsStates, setElevatorsStates] = useState(['ready', 'ready', 'ready', 'ready', 'ready']);
    const [elevatorPositions, setElevatorPositions] = useState([0, 0, 0, 0, 0]);
    const [queue, setQueue] = useState([]);
    const [buttonStates, setButtonStates] = useState(Array(10).fill('unhandled'))    


    const elevatorSprings = useSprings(
        elevatorPositions.length,
        elevatorPositions.map((position) => ({
          transform: `translateY(${position}px)`,
          from: { transform: 'translateY(0px)' },
          config: { duration: 4000 },
        }))
      );

    useEffect(() => {
      //if the queue has task assign an elevtor to the task
      if (queue.length > 0){
        let elevator = -1;
        let task = deque();
        elevator = findNearReadyElevator(task.floor);
        if(elevator === -1){// if all the elevator busy re-insert the tesk to the queue
          enque(task.floor);
          return;
        }    
        
      // changing the state of the elevator and the button  
        setElevatorsStates(elevatorsStates => {
          const newElevatorsStates = [...elevatorsStates];
          newElevatorsStates[elevator] = 'occupied';
          return newElevatorsStates;
        });

        setButtonStates(buttonStates => {
        const newButtonStates = [...buttonStates];
        newButtonStates[task.floor] = 'handled';
        return newButtonStates;
      });
      
      //start animition
      moveElevator(elevator, task.floor)
      
      setTimeout(() => {
        //change back the the states to ready to use
        setElevatorsStates(elevatorsStates => {
          const newElevatorsStates = [...elevatorsStates];
          newElevatorsStates[elevator] = 'ready';
          return newElevatorsStates;
        });

        setButtonStates(buttonStates => {
          const newButtonStates = [...buttonStates];
          newButtonStates[task.floor] = 'unhandled';
          return newButtonStates;
        });
      }, 6000);
      
      
      
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queue])
    
    const enque = (floor) => {
      setQueue(queue => {
        const enqueItem = [...queue,{floor:floor, timestamp: Date.now()}];
        console.log(enqueItem);
        return enqueItem;
      });
    }

    const deque = () => {
      const [oldest, ...rest] = queue;
      setQueue(rest);
      return oldest
    }  


    const findNearReadyElevator = (floor) => {
      let closestElevator = -1;
      let closestElevatorPosition = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < elevatorsStates.length; i++) {
        if ((Math.abs(-elevatorPositions[i] - floor * 50) < Math.abs(-closestElevatorPosition - floor * 50)) 
        && elevatorsStates[i] === 'ready') {
          closestElevator = i;
          closestElevatorPosition = elevatorPositions[closestElevator]; 
        }
      }
      
      return closestElevator

    }

    const moveElevator = (closestElevator, floor) => {
                
        
        // Move the closest elevator to the clicked floor
        const newElevatorPositions = [...elevatorPositions];
        newElevatorPositions[closestElevator] = -floor * 50;
        setElevatorPositions(newElevatorPositions);
    }


    const handleClick = (floor) => {
      enque(floor) 
    };
          
    
  return (
    <div className="building">
      <div className="building-title">Elevators exercise</div>
      <div className='shafts-container'>
      {elevatorSprings.map((spring, index) => (
                    <animated.div key={index} style={spring} className="shaft">
                        <Elevator state={elevatorsStates[index]} />
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
            <div><ElevatorButton onClick={() => handleClick(floor.id)} state={buttonStates[floor.id]} /> </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Building;
