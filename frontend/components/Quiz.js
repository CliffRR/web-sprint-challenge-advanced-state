import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'


export function Quiz(props) {
  useEffect(()=>{props.fetchQuiz()
  },[props.renderORNaw])


  const handleFirstSelect = () => {
    props.selectAnswer()
    props.resetMessage()
  }

  const handleSecondSelect = () => {
    props.selectAnswer2()
    props.resetMessage()
  }

  const handleSubmit = () => {
    props.renderOrNaw()
    props.setLoading(true)
    props.resetQuiz()
    props.setMessage()
    if(props.selectedAnswer.answer1 === true){
      props.postAnswer(props.quizQuestion.questionID, props.quizQuestion.correctAnswerID)
    }
    if(props.selectedAnswer.answer1 === false){
      props.postAnswer(props.quizQuestion.questionID, props.quizQuestion.incorrectAnswerID)
    }
  }


  return (
    <div id="wrapper">
      {
        props.loadingReducer ? 'Loading next quiz...' : (
          <>
            <h2>{props.quizQuestion.question}</h2>

            <div id="quizAnswers">
              <div className= {props.selectedAnswer.answer1 === true ? "answer selected" : 'answer'}>
                {props.quizQuestion.correctQuestion}
                <button onClick = {() => handleFirstSelect()}>
                  {props.selectedAnswer.answer1 === true ? "SELECTED" : 'Select'}
                </button>
              </div>

              <div className={props.selectedAnswer.answer2 === true ? "answer selected" : 'answer'}>
                {props.quizQuestion.incorrectQuestion}
                <button onClick = {() => handleSecondSelect()}>
                  {props.selectedAnswer.answer2 === true ? "SELECTED" : 'Select'}
                </button>
              </div>
            </div>

            <button onClick = {() => handleSubmit()} disabled = {props.selectedAnswer.answer1 || props.selectedAnswer.answer2 === true ? false : true} id="submitAnswerBtn">Submit answer</button>
          </>
        )
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz);