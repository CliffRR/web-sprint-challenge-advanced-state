// ❗ You don't need to add extra action creators to achieve MVP
import axios from 'axios'
import * as types from './action-types'

export function moveClockwise() { 
  return ({ type: types.MOVE_CLOCKWISE})
}

export function moveCounterClockwise() { 
  return ({ type: types.MOVE_COUNTERCLOCKWISE})
}

export function selectAnswer() { 
  return ({ type: types.SET_SELECTED_ANSWER})
}

export function selectAnswer2() {
  return ({ type: types.SET_SELECTED_ANSWER2})
}

export function setLoading(isLoading) {
  return ({ type: types.SET_LOADING, payload: isLoading})
}

export function resetQuiz() {
  return ({ type: types.RESET_QUIZ})
}

export function setMessage(message) { 
  return ({ type: types.SET_INFO_MESSAGE, payload: message})
}
export function resetMessage() {
  return ({ type: types.RESET_MESSAGE})
}
export function setMessageForm(message){
  return ({ type: types.SET_FORM_MESSAGE, payload: message})
}

export function renderOrNaw() {
  return ({ type: types.RENDER_OR_NAW})
}

export function setQuizQuestion(questionsAndAnswers) { 
  return ({ type: types.SET_QUIZ_INTO_STATE, payload: questionsAndAnswers})
}
export function setQuizCorrectAnswer(questionsAndAnswers) { 
  return ({ type: types.SET_QUIZ_INTO_STATE_C_ANSWER, payload: questionsAndAnswers})
}
export function setQuizIncorrectAnswer(questionsAndAnswers) { 
  return ({ type: types.SET_QUIZ_INTO_STATE_I_ANSWER, payload: questionsAndAnswers})
}
export function setQuestionID(questionID) { 
  return ({ type: types.QUESTION_ID, payload: questionID})
}
export function correctAnswerID(answerID) { 
  return ({ type: types.CORRECT_ANSWER_ID, payload: answerID})
}
export function incorrectAnswerID(answerID) { 
  return ({ type: types.INCORRECT_ANSWER_ID, payload: answerID})
}

export function inputChange({name, value}) { 
  return ({ type: types.INPUT_CHANGE, payload: { name, value }})
}

export function resetForm() { 
  return ({ type: types.RESET_FORM})
}


// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    
    axios.get("http://localhost:9000/api/quiz/next")
      .then((res)=>{
        dispatch(setQuizQuestion(res.data.question))
        dispatch(setQuizCorrectAnswer(res.data.answers[0]['text']))
        dispatch(setQuizIncorrectAnswer(res.data.answers[1]['text']))
        dispatch(setQuestionID(res.data.quiz_id))
        dispatch(correctAnswerID(res.data.answers[0]['answer_id']))
        dispatch(incorrectAnswerID(res.data.answers[1]['answer_id']))
        dispatch(setLoading(false))
      })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(question_ID, answer_ID) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/answer', {quiz_id: question_ID, answer_id: answer_ID})
      .then((res)=>{
        dispatch(setMessage(res.data.message))
      })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(obj) {
  return function (dispatch) {
    axios.post('http://localhost:9000/api/quiz/new', obj)
      .then((res)=>{
        dispatch(resetForm())
      })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
