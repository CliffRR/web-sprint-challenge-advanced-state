import React, { useState, createContext } from 'react'

export const WheelContext = createContext()

export default function WheelProvider(props) {
    const [wheel, setWheel] = useState(0)
    
    const clockwise = () => {
        if ((wheel === 0) || (wheel === 1) || (wheel === 2) || (wheel === 3) || (wheel === 4)) {
            return setWheel(st => st + 1 ) 
          }
        if (wheel === 5) {
            return setWheel(0)
          }
    }

    const counterClockWise = () => {
    if ((wheel === 5) || (wheel === 1) || (wheel === 2) || (wheel === 3) || (wheel === 4)) {
        return setWheel(st => st - 1)
      }
      if (wheel === 0) {
        return setWheel(5)
      }
    }

    return (
        <WheelContext.Provider value ={{wheel, clockwise, counterClockWise}}>
            {props.children}
        </WheelContext.Provider>
    )
}