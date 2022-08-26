import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'


export function Form(props) {
  console.log("need: ", props.form.question_text)
  console.log("Answer: ", props.set)

  const onChange = evt => {
    const { name, value } = evt.target
    props.inputChange({name, value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
    props.postQuiz(props.form)
    props.setMessageForm(props.form.question_text)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" name = "question_text" value = {props.form.question_text}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" name = "true_answer_text" value = {props.form.true_answer_text}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" name = "false_answer_text" value = {props.form.false_answer_text}/>
      <button disabled = {props.form.question_text.length && props.form.true_answer_text.length && props.form.false_answer_text.length >= 1 ? false : true} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actions)(Form)
