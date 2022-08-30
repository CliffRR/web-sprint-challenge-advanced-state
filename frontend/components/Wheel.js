import React, {useState, useContext} from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'
// import { WheelContext } from "../state/wheel"

export function Wheel(props) {
//   const { wheel, clockWise, counterClockWise} = useContext(WheelContext)
//   return (
//     <div id="wrapper">  
//       <div id="wheel">
//         <div className={wheel === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{wheel === 0 ? "B" : ""} </div>
//         <div className={wheel === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{wheel === 1 ? "B" : ""} </div>
//         <div className={wheel === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{wheel === 2 ? "B" : ""} </div>
//         <div className={wheel === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{wheel === 3 ? "B" : ""} </div>
//         <div className={wheel === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{wheel === 4 ? "B" : ""} </div>
//         <div className={wheel === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{wheel === 5 ? "B" : ""} </div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
//       </div>
//       <div id="keypad">
//         <button onClick = {counterClockWise} id="counterClockwiseBtn">Counter clockwise</button>
//         <button onClick = {clockWise} id="clockwiseBtn">Clockwise</button>
//       </div>
//     </div>
//   )
// }


  // OG version
  const {wheel, moveCounterClockwise, moveClockwise} = props
  return (
    <div id="wrapper">  
      <div id="wheel">
        <div className={wheel === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{wheel === 0 ? 'B' : ""}</div>
        <div className={wheel === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{wheel === 1 ? 'B' : ""}</div>
        <div className={wheel === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{wheel === 2 ? 'B' : ""}</div>
        <div className={wheel === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{wheel === 3 ? 'B' : ""}</div>
        <div className={wheel === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{wheel === 4 ? 'B' : ""}</div>
        <div className={wheel === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{wheel === 5 ? 'B' : ""}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick = {() => moveCounterClockwise()} id="counterClockwiseBtn">Counter clockwise</button>
        <button onClick = {() => moveClockwise()} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )

//   const {wheel, moveCounterClockwise, moveClockwise} = props
//   return (
//     <div id="wrapper">  
//       <div id="wheel">
//         {[...Array(6).keys()].map((key)=> {
//           return (
//             <div className={wheel === key ? "cog active" : "cog"} key = {key} style={{ "--i": key }}>{wheel === key ? 'B' : ""} </div>
//           )
//         })}
//       </div>
//       <div id="keypad">
//         <button onClick = {() => moveCounterClockwise()} id="counterClockwiseBtn">Counter clockwise</button>
//         <button onClick = {() => moveClockwise()} id="clockwiseBtn">Clockwise</button>
//       </div>
//     </div>
//   )
// }
  }

export default connect(st => st, actions)(Wheel);