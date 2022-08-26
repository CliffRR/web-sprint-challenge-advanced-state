import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Message(props) {
  console.log(props.wheel)

  return <div id="message">{`${props.infoMessage.message}`}</div>
}

export default connect(st => st, actions)(Message);